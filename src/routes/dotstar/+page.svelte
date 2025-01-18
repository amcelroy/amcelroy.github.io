<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import * as wasm from "./pkg/dotstar";
    import { writable } from 'svelte/store';
    import Led from './led.svelte';
    import Waveformparams from './waveformparams.svelte';
    import { browser } from '$app/environment';
    import { Color } from '$lib/utils';

    const argb = writable<number[]>([]);
    const led_div_width = writable<number>(0);

    const LEDS: number = 32;
    const DOT_SIZE: number = 3;
    const DOT_OFFSET: number = DOT_SIZE/2;

    let waveform0 = wasm.WaveformParams.new(1, .5, 0, 0);
    let waveform1 = wasm.WaveformParams.new(1, .5, 3.14/2, 0);
    let waveform2 = wasm.WaveformParams.new(1, .5, 3.14, 0);


    const schematicUrl = new URL('./schematic.png', import.meta.url).href;
    const pcb2dUrl = new URL('./pcb_2d.png', import.meta.url).href;
    const pcb3dUrl = new URL('./pcb_3d.png', import.meta.url).href;


    let timer: NodeJS.Timeout | null = null;

    let chart_init = false;

    function dispatchResize() {
        if(browser){
            let led_id = document.getElementById('LEDS');
            if(led_id) {
                led_div_width.set(led_id.offsetWidth - 16);
            }
        }
    }
    
    function update_canvas(colors: Color[]) {
        if(browser){
            const canvas = document.getElementById('waveform') as HTMLCanvasElement;
            const ctx = canvas.getContext('2d');
            const spacing = canvas.width / colors.length;
            if(ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = "rgba(255, 255, 240, .2)"; // Use a color name, hex code, or RGB value
                ctx.fillRect(0, 0, canvas.width, canvas.height); 

                colors.forEach((color, i) => {
                    ctx.fillStyle = color.to_blue_css_string();
                    ctx.fillRect(i*spacing, 255 - color.b, DOT_SIZE, DOT_SIZE);
                    if(i > 0) {
                        ctx.strokeStyle = color.to_blue_css_string();
                        ctx.beginPath();
                        ctx.moveTo((i - 1)*spacing + DOT_OFFSET, 255 - colors[i - 1].b + DOT_OFFSET);
                        ctx.lineTo(i*spacing + DOT_OFFSET, 255 - color.b + DOT_OFFSET);
                        ctx.stroke();
                    }

                    ctx.fillStyle = color.to_green_css_string();
                    ctx.fillRect(i*spacing, 255 - color.g, DOT_SIZE, DOT_SIZE);
                    if(i > 0) {
                        ctx.strokeStyle = color.to_green_css_string();
                        ctx.beginPath();
                        ctx.moveTo((i - 1)*spacing + DOT_OFFSET, 255 - colors[i - 1].g + DOT_OFFSET);
                        ctx.lineTo(i*spacing + DOT_OFFSET, 255 - color.g + DOT_OFFSET);
                        ctx.stroke();
                    }

                    ctx.fillStyle = color.to_red_css_string();
                    ctx.fillRect(i*spacing, 255 - color.r, DOT_SIZE, DOT_SIZE);
                    if(i > 0) {
                        ctx.strokeStyle = color.to_red_css_string();
                        ctx.beginPath();
                        ctx.moveTo((i - 1)*spacing + DOT_OFFSET, 255 - colors[i - 1].r + DOT_OFFSET);
                        ctx.lineTo(i*spacing + DOT_OFFSET, 255 - color.r + DOT_OFFSET);
                        ctx.stroke();
                    }
                });
            }
        }
    }

    onMount(() => {
        wasm.init();

        //console.log(wasm.argb_array());
        argb.set([...wasm.argb_array()]);
        timer = setInterval(() => {
            wasm.update_waveform(0, waveform0.get());
            wasm.update_waveform(1, waveform1.get());
            wasm.update_waveform(2, waveform2.get());
            wasm.tick();
            argb.set([...wasm.argb_array()]);
            let color_arr =$argb.map((v) => new Color().from_u32(v)); 
            // Update Canvas
            update_canvas(color_arr);
            dispatchResize();
        }, 50);
        chart_init = true;
    });

    onDestroy(() => {
        if(timer) {
            clearInterval(timer);
        }
    });

</script>

<svelte:window on:resize={dispatchResize} on:load={dispatchResize}/>

{#if $argb}
    <div class="shadow border m-8 rounded-lg variant-glass-surface"  id="LEDS">
        <div class="flex flex-row p-1 justify-between">
            {#each [...$argb] as v}
                <Led v={v}/>
            {/each}
        </div>
    </div>
    <div class="flex shadow border m-8 rounded-lg p-1 variant-glass-surface">
        <canvas id="waveform" class="m-auto" width="{$led_div_width}" height="260"></canvas>
    </div>
    <div class="flex shadow border m-8 rounded-lg variant-glass-surface">
        <div class="m-auto">
            <!-- Set the parameters for the different waveforms -->
            <button class="button" on:click={() => wasm.reset()}>Stop</button>
            <Waveformparams bind:waveform={waveform0} name="Red" LEDs={32}/>
            <Waveformparams bind:waveform={waveform1} name="Green" LEDs={32}/>
            <Waveformparams bind:waveform={waveform2} name="Blue" LEDs={32}/>
        </div>
    </div>
    <div class="flex shadow border m-8 rounded-lg variant-glass-surface">
        <div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10">
            <div class="snap-start shrink-0 card my-auto w-40 md:w-4/6 text-center">
                <img src="{schematicUrl}" alt="Schematic" class="rounded-lg"/>
            </div>
            <div class="snap-start shrink-0 card my-auto w-40 md:w-4/6 text-center">
                <img src="{pcb2dUrl}" alt="Schematic" class="rounded-lg"/>
            </div>
            <div class="snap-start shrink-0 card my-auto w-40 md:w-4/6 text-center">
                <img src="{pcb3dUrl}" alt="Schematic" class="rounded-lg"/>
            </div>
        </div>
    </div>
    <div class="shadow border m-8 rounded-lg variant-glass-surface p-2">
        <p class="m-3">
            I wanted a place to show off my watercolor paintings and decided to build a picture frame use the Dotstar LEDs to illuminate the light. I'm trying
            to make a shadowbox but with some more dynamic lighting to make the optics part of the art. Since there wasn't anything that seemed to work for my on 
            Amazon, it was time to put my EE degree to work. I made a custom PCB that uses the Fanstel nRF52840 BLE MCU 
            module, a high capacity capacitor, 3.3V regulator, and USB-C connector for power - up to 2.9A at 5V. The Dotstar LEDs require 5V for power and logic, 
            so I added a level shifter as well to covert the 3.3V from the nRF to 5V. 
        </p>
        <p class="m-3">
            The nRF52840 is using Rust (of course) Embassy firmware and BLE stack that controls the waveforms that is displayed on the Dotstar LEDs. I decided to
            have each LED controlled by a waveform that can be dynamically updated - the delta time (dt) of the update along with the amplitude, frequency, phase, 
            and offset. The waveforms should generally reside between -1 to 1, which maps from 0 -%gt 255 in 
            the 8-bit space. The superposition of the waveforms maps to color. We have smooth dynamic, programmable, lighting. Let there be light!
        </p>
        <p class="m-3">
            One of the cool things about embedded Rust is working in with core and no_std libraries. This usually means a small feature set with minimal
            memory allocation on the heap. There are heap allocators in Rust for no_std, but generally the more that is known at compile time the 
            better things will be. This also means fewer concurrency options to safely share data.
        </p>
        <p class="m-3">
            Web Assembly, WASM, has similar limitations to the embedded space. This means libraries written in no_std Rust can be exported relatively 
            easily to WASM. This project is a library that I have been working on to control the Adafruit Dotstar LED strips. They have an addressable
            LED protocol that has a start frame, a series of digital data for each LED, and an end frame. Each white light or RGB LED takes 32 bits of data
            to program. the 3 upper bytes are 1, followed by 5 bits for a global alpha, followed by 8 bits for blue, green, and red (or white, white, white
            for the mono-color). The update rate is really high using the SPI bus with a core clock speed of 8 MHz means we can spit out data at
            8MHz / ((Number of LEDs + 2)*32) means we have a refresh rate of &gt 7Khz for 32 LEDs. The eye is comfortable at 20 to 30 Hz, so we will use a timer
            at 50ms (20 Hz) govern the update rate of the LEDs.
        </p>
        <p class="m-3">
            Basically, this code is the same that is running on the MCU and controlling the physical LEDs. Enjoy messing around with the waveforms and making 
            a pattern that could work on a physical light strip!
        </p>
    </div>
{/if}
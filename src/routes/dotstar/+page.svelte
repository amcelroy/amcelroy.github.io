<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import * as wasm from "./pkg/dotstar";
    import { writable } from 'svelte/store';
    import Led from './led.svelte';
    import Waveformparams from './waveformparams.svelte';

    const argb = writable<number[]>([]);

    const LEDS: number = 32;

    let waveform0 = wasm.WaveformParams.new(1, 1, 0, 0);
    let waveform1 = wasm.WaveformParams.new(1, 1, 0, 0);
    let waveform2 = wasm.WaveformParams.new(1, 1, 0, 0);

    let timer: NodeJS.Timeout | null = null;

    let waveform_0_dt = 0;
    let waveform_1_dt = 0;
    let waveform_2_dt = 0;

    let chart_init = false;

    function set_dt(waveform: number, dt: number) {
        wasm.set_dt(waveform, dt);
    }

    $: {
        if(chart_init)
            set_dt(0, waveform_0_dt);
    }

    $: {
        if(chart_init)
            set_dt(1, waveform_1_dt);
    }

    $: {
        if(chart_init)
            set_dt(2, waveform_2_dt);
    }

    onMount(() => {
        wasm.init();
        wasm.set_dt(0, 0);
        wasm.set_dt(1, 0);
        wasm.set_dt(2, 0);
        //console.log(wasm.argb_array());
        argb.set([...wasm.argb_array()]);
        timer = setInterval(() => {
            wasm.update_waveform(0, waveform0.get());
            wasm.update_waveform(1, waveform1.get());
            wasm.update_waveform(2, waveform2.get());
            wasm.tick();
            console.log([...wasm.argb_array()]);
            argb.set([...wasm.argb_array()]);
        }, 50);
        chart_init = true;
    });

    onDestroy(() => {
        if(timer) {
            clearInterval(timer);
        }
    });

</script>


{#if $argb}

    <div class="flex shadow border m-8 rounded-lg variant-glass-surface">
        <div class="flex flex-row p-1 m-auto">
            {#each [...$argb] as v}
                <Led v={v}/>
            {/each}
        </div>
    </div>
    <div class="flex shadow border m-8 rounded-lg variant-glass-surface">
        <div class="m-auto">
            <!-- Set the parameters for the different waveforms -->
            <button class="button" on:click={() => wasm.reset()}>Stop</button>
            <Waveformparams bind:waveform={waveform0} bind:dt={waveform_0_dt} name="Red" LEDs={32}/>
            <Waveformparams bind:waveform={waveform1} bind:dt={waveform_1_dt} name="Green" LEDs={32}/>
            <Waveformparams bind:waveform={waveform2} bind:dt={waveform_2_dt} name="Blue" LEDs={32}/>
        </div>
    </div>
    <div class="shadow border m-8 rounded-lg variant-glass-surface p-2">
        <p class="m-3">
            I wanted a place to show off my watercolor paintings and decided to build a picture frame use the Dotstar LEDs to illuminate the light. I'm trying
            to make a shadowbox but with some more dynamic lighting to make the optics part of the art. I made a custom nRF52840 PCB that uses the Fanstel nRF52840
            module, a high capacity capacitor, 3.3V regulator, and USB-C connector for power - up to 2.9A at 5V. The Dotstar LEDs require 5V for power and logic, 
            so I added a level shifter as well to covert the 3.3V from the nRF to 5V. 
        </p>
        <p class="m-3">
            The nRF52840 is using Rust (of course) Embassy firmware and BLE stack that controls the waveforms that is displayed on the Dotstar LEDs. I decided to
            have each LED controled by a waveform that can be dynamically updated - the delta time (dt) of the update along with the amplitude, frequency, phase, 
            and offset. The waveforms should generally reside between -1 to 1, which maps from 0 -%gt 255 in 
            the 8-bit space. The superposition of the waveforms maps to color. We have smooth dynamic, programmable, lighting. Let there be light!
        </p>
        <p class="m-3">
            One of the cool things about embedded Rust is working in with core and no_std libraries. This usually means a small feature set with minimal
            memory allocation on the heap. There are heap allocators in Rust for no_std, but generally the more that is known at compile time the 
            better things will be. This also means fewer concurrency options like Mutexes.
        </p>
        <p class="m-3">
            Web Assembly, WASM, has similar limitations to the embedded space. This means libraries written in no_std Rust can be exported relatively 
            easily to WASM. This project is a library that I have been working on to control the Adafruit Dotstar LED strips. They have an addressable
            LED system that has a start frame, a series of digital data for each LED, and an end frame. Each white light or RGB LED takes 32 bits of data
            to program. the 3 upper bytes are 1, followed by 5 bits for a global alpha, followed by 8 bits for blue, green, and red (or white, white, white
            for the mono-color). The update rate is really high using the SPI bus with a core clock speed of 8 MHz means we can spit out data at
            8MHz / ((Number of LEDs + 2)*32) means we have a refresh rate of &gt 7Khz for 32 LEDs. The eye is comfortable at 20 to 30 Hz, so we will use a timer
            at 50ms (20 Hz) govern the update rate of the LEDs.
        </p>
        <p class="m-3">
            Basically, this code is the same that is running on the MCU and controlling the physical LEDs. Enjoy messing around with the waveforms and making 
            a pattern that can highlight your own art!
        </p>
    </div>
{/if}
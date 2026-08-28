<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import * as wasm from "./pkg/gol";
    import { browser } from '$app/environment';
    import PictureScroll from '$lib/PictureScroll.svelte';

    const schematicUrl = new URL('./schematic.png', import.meta.url).href;
    const pcb2dUrl = new URL('./pcb_2d.png', import.meta.url).href;

    // The panel running, and a still of the finished piece. MP4 rather than a
    // GIF: the same clip as a 480px 12fps GIF is 6.9 MB against 1.1 MB here at
    // 1280 wide and full frame rate.
    const panelMp4 = new URL('./panel.mp4', import.meta.url).href;
    const panelStill = new URL('./panel_still.jpeg', import.meta.url).href;

    const GRID = 64;
    const STEP_MS = 100;

    let board: wasm.GolBoard | null = null;
    let timer: NodeJS.Timeout | null = null;

    let running = true;
    let seedNames: string[] = [];
    let seedIndex = 0;
    let generation = 0;
    let population = 0;
    let lastEnding = '';

    function draw() {
        if (!browser || !board) return;
        const canvas = document.getElementById('gol') as HTMLCanvasElement;
        const ctx = canvas?.getContext('2d');
        if (!ctx) return;
        const bytes = board.rgba();
        ctx.putImageData(new ImageData(new Uint8ClampedArray(bytes), GRID, GRID), 0, 0);
    }

    function tick() {
        if (!board || !running) return;
        const ending = board.step();
        generation = board.generation();
        population = board.population();
        draw();
        if (ending) {
            // The board stopped being interesting -- say how, hold it a beat,
            // then move to the next seed. Same logic the physical panel runs.
            lastEnding = `${board.seedName()} ${ending} after ${generation} generations`;
            running = false;
            setTimeout(() => {
                if (!board) return;
                board.next_seed();
                seedIndex = board.seedIndex();
                generation = board.generation();
                draw();
                running = true;
            }, 2000);
        }
    }

    function pickSeed(i: number) {
        if (!board) return;
        board.seed(i);
        seedIndex = board.seedIndex();
        generation = 0;
        population = board.population();
        lastEnding = '';
        running = true;
        draw();
    }

    onMount(() => {
        board = new wasm.GolBoard();
        seedNames = Array.from({ length: wasm.seedCount() }, (_, i) => wasm.seedNameAt(i));
        seedIndex = board.seedIndex();
        population = board.population();
        draw();
        timer = setInterval(tick, STEP_MS);
    });

    onDestroy(() => {
        if (timer) clearInterval(timer);
        board?.free();
    });
</script>

<div class="flex shadow border m-8 rounded-lg p-1 variant-glass-surface">
    <canvas id="gol" class="m-auto rounded-lg" width={GRID} height={GRID}></canvas>
</div>

<div class="shadow border m-8 rounded-lg variant-glass-surface p-3">
    <div class="flex flex-wrap gap-2 justify-center m-2">
        {#each seedNames as name, i}
            <button
                class="btn btn-sm {i === seedIndex ? 'variant-filled' : 'variant-soft'}"
                on:click={() => pickSeed(i)}>
                {name.replace(/_/g, ' ')}
            </button>
        {/each}
    </div>
    <div class="flex flex-wrap gap-4 justify-center m-3 text-sm">
        <span>generation <strong>{generation}</strong></span>
        <span>population <strong>{population}</strong></span>
        <button class="btn btn-sm variant-soft" on:click={() => (running = !running)}>
            {running ? 'pause' : 'run'}
        </button>
    </div>
    {#if lastEnding}
        <p class="m-3 text-center text-sm"><em>{lastEnding}</em></p>
    {/if}
</div>

<div class="shadow border m-8 rounded-lg variant-glass-surface p-2 overflow-hidden">
    <video class="w-full rounded-lg" src={panelMp4} autoplay muted loop playsinline controls>
        <track kind="captions" />
    </video>
</div>

<PictureScroll urls={[panelStill, schematicUrl, pcb2dUrl]} />

<div class="shadow border m-8 rounded-lg variant-glass-surface p-2">
    <p class="m-3">
        I wanted a piece of engineering art for the wall that is never quite the same twice. Conway's Game of Life
        is the obvious candidate &mdash; simple rules, endlessly varied behaviour &mdash; so I built a 64&times;64
        RGB LED matrix driven by an ESP32-S3 on a custom backpack PCB that mounts directly to the back of the panel.
    </p>
    <p class="m-3">
        The board negotiates 9V over USB-C Power Delivery with a <code>HUSB238A</code> sink controller, bucks it down
        to 5V at up to 6A with a <code>TPS54560B</code>, and level-shifts the S3's 3.3V logic up to the panel's 5V
        through a pair of <code>74AHCT245</code> buffers. The HUB75 panel wants fourteen signals clocked out
        continuously, which the S3's LCD_CAM peripheral drives over DMA at almost no CPU cost. There are two USB-C
        ports: one for power, one for debug, so I can reflash without dropping the PD negotiation.
    </p>
    <p class="m-3">
        The simulation core is a <code>no_std</code> Rust crate with no allocations and no platform dependencies,
        which is why the same code compiles for both the Xtensa firmware and the WASM you are running now. The cell
        state carries more than alive/dead: it distinguishes a cell that was just born from one that has been
        alive a while, and a cell that just died from empty space. That is what makes the green and red
        flashes possible, and the color mapping lives in the engine so the panel and this page cannot drift apart.
    </p>
    <p class="m-3">
        Lots of stuff left to do, but this certainly proves out the circuit and starting firmware:
    </p>
    <ul class="list-disc ml-8 mb-4 m-3">
        <li>
            3D print a frame for the back so it can hang from a wall hook.
        </li>
        <li>
            Add <code>mcuboot</code> as the bootloader. This will work with an A/B for OTA updates (see below).
        </li>
        <li>
            Add HTTP server to allow for settings. I would like the user to be able to play 
            with different alive and dead rules, create their own seed states, OTA updates, and a few other things.
        </li>
        <li>
            Add HTTP capture portal to get the ESP32-S3 on the user's local network.
        </li>
        <li>
            Probably need another board spin for electrostatic protection.
        </li>
    </ul>
</div>

<style>
    canvas {
        width: 512px;
        max-width: 90vw;
        height: auto;
        /* 64x64 scaled up: keep the cells square and hard-edged */
        image-rendering: pixelated;
        background: #000;
    }

    code {
        color: orange;
        font-family: 'Fira Sans', sans-serif;
        font-weight: 400;
        font-size: 16px;
    }
</style>

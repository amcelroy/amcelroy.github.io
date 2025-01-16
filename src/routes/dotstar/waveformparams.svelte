<script lang="ts">
    import { writable } from "svelte/store";
    import * as wasm from "./pkg/dotstar";
	import { onMount } from 'svelte';

    export let waveform: wasm.WaveformParams;
    export let dt: number;

    let amplitude = writable<number>(1);
    let frequency = writable<number>(1);
    let phase = writable<number>(0);
    let offset = writable<number>(0);

    $: {
        waveform.set_amplitude($amplitude);
        waveform.set_freq($frequency);
        waveform.set_phase($phase);
        waveform.set_offset($offset);
    }

    onMount(() => {
        amplitude.set(waveform.amplitude);
        frequency.set(waveform.freq);
        phase.set(waveform.phase);
        offset.set(waveform.offset);
    })
</script>


<div class="flex flex-row m-4 items-center flex-wrap">
    <div class="block m-2">
        <label class="label" for="dt">dt</label>
        <input class="input w-32" name="dt" title="dt" type="number" bind:value={dt}/>
    </div>

    <div class="block m-2">
        <label class="label" for="Amplitude">Amplitude</label>
        <input class="input w-20" name="Amplitude" title="Amplitude" type="number" bind:value={$amplitude}/>
    </div>

    <div class="block m-2 shrink">
        <label class="label" for="Frequency">Frequency</label>
        <input class="input w-20" name="Frequency" title="Frequency" type="number" bind:value={$frequency}/>
    </div>

    <div class="block m-2">
        <label class="label" for="Phase">Phase</label>
        <input class="input w-20" name="Phase" title="Phase" type="number" bind:value={$phase}/>
    </div>

    <div class="block m-2">
        <label class="label" for="Offset">Offset</label>
        <input class="input w-20" name="Offset" title="Offset" type="number" bind:value={$offset}/>
    </div>
</div>

<script lang="ts">
    import { writable } from "svelte/store";
    import * as wasm from "./pkg/dotstar";
	import { onMount } from 'svelte';
    import Icon from "@iconify/svelte";

    export let waveform: wasm.WaveformParams;
    export let name: string;
    export let LEDs: number;

    let amplitude = writable<number>(waveform.amplitude);
    let frequency = writable<number>(waveform.freq);
    let phase = writable<number>(waveform.phase);
    let offset = writable<number>(waveform.offset);
    let dt = writable<number>(waveform.dt);

    $: {
        waveform.set_amplitude($amplitude);
        waveform.set_freq($frequency);
        waveform.set_phase($phase);
        waveform.set_offset($offset);
        waveform.set_dt($dt);
    }

    onMount(() => {
        amplitude.set(waveform.amplitude);
        frequency.set(waveform.freq);
        phase.set(waveform.phase);
        offset.set(waveform.offset);
        dt.set(waveform.dt);
    })
</script>


<fieldset class="static z-1 border rounded-lg relative m-2">
    <legend class="m-1">{name}</legend>
    <div class="flex flex-row items-center flex-wrap" id="{name}">
        <div class="block m-1">
            <button type="button" class="btn-icon variant-filled" on:click={() => {
                $dt = -1/LEDs;
            }}>
                <Icon  icon="mdi:axis-y-rotate-clockwise" style="font-size: 24px;"/>
            </button>
        </div>
        <div class="block m-1">
            <label class="label" for="Amplitude">Amplitude</label>
            <input class="input w-32" name="Amplitude" title="Amplitude" type="number" bind:value={$amplitude}/>
        </div>

        <div class="block m-1 shrink">
            <label class="label" for="Frequency">Frequency</label>
            <input class="input w-32" name="Frequency" title="Frequency" type="number" bind:value={$frequency}/>
        </div>

        <div class="block m-1">
            <button type="button" class="btn-icon variant-filled" on:click={() => {
                $dt = 0;
            }}>
                <Icon  icon="icon-park-outline:pause-one" style="font-size: 24px;"/>
            </button>
        </div>

        <div class="block m-1">
            <label class="label" for="Phase">Phase</label>
            <input class="input w-32" name="Phase" title="Phase" type="number" bind:value={$phase}/>
        </div>

        <div class="block m-1">
            <label class="label" for="Offset">Offset</label>
            <input class="input w-32" name="Offset" title="Offset" type="number" bind:value={$offset}/>
        </div>
        <div class="block m-1">
            <button type="button" class="btn-icon variant-filled" on:click={() => {
                $dt = 1/LEDs;
            }}>
                <Icon  icon="mdi:axis-y-rotate-clockwise" style="font-size: 24px;"/>
            </button>
        </div>
    </div>
</fieldset>

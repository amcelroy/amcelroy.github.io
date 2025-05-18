<script lang="ts">
    import { writable } from "svelte/store";
    import * as wasm from "./pkg/dotstar";
	import { onMount } from 'svelte';
    import Icon from "@iconify/svelte";
    import { WaveformMode, WaveformType } from "./pkg/dotstar_bg";

    export let waveform: wasm.WaveformParams;
    export let name: string;
    export let LEDs: number;

    let amplitude = writable<number>(waveform.amplitude);
    let frequency = writable<number>(waveform.freq);
    let phase = writable<number>(waveform.phase);
    let offset = writable<number>(waveform.offset);
    let dt = writable<number>(waveform.dt);
    let mode = writable<WaveformMode>(WaveformMode.Dynamic);
    let type = writable<WaveformType>(WaveformType.Sine);

    $: {
        waveform.amplitude = $amplitude;
        waveform.freq = $frequency;
        waveform.phase = $phase;
        waveform.offset = $offset;
        waveform.dt = $dt;
        waveform.mode = $mode;
        waveform.waveform = $type;
        console.log("waveform", waveform.amplitude, waveform.freq, waveform.phase, waveform.offset, waveform.dt, waveform.mode, waveform.waveform);
    }

    function onTypeChange(event: Event) {
        const target = event.target as HTMLSelectElement;
        switch (target.value) {
            case "0":
                type.set(WaveformType.Sine);
                break;
            case "1":
                type.set(WaveformType.Square);
                break;
            case "2":
                type.set(WaveformType.Triangle);
                break;
            case "3":
                type.set(WaveformType.Sawtooth);
                break;
            case "4":
                type.set(WaveformType.Noise);
                break;
            case "5":
                type.set(WaveformType.Bounce);
                break;
            default:
                type.set(WaveformType.Sine);
        }
    }

    onMount(() => {
        amplitude.set(waveform.amplitude);
        frequency.set(waveform.freq);
        phase.set(waveform.phase);
        offset.set(waveform.offset);
        dt.set(waveform.dt);
        mode.set(waveform.mode);
        type.set(waveform.waveform);
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
        <div class="block m-1">
            <button type="button" class="btn-icon variant-filled" on:click={() => {
                $mode = $mode == WaveformMode.Dynamic ? WaveformMode.InPlace : WaveformMode.Dynamic;
            }}>
                <Icon  icon="svg-spinners:bouncing-ball" style="font-size: 24px;"/>
            </button>
        </div>
        <div class="block m-1">
            <select class="select variant-filled" on:change={onTypeChange}>
                <option value="0">Sine Wave</option>
                <option value="1">Square Wave</option>
                <option value="2">Triangle Wave</option>
                <option value="3">Sawtooth Wave</option>
                <option value="4">Random Noise</option>
                <option value="5">Bounce</option>
            </select>
        </div>
    </div>
</fieldset>

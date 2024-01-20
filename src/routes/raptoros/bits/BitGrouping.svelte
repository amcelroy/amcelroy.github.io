<script lang="ts">
    import Bit from "./Bit.svelte";
    import { BitLib, type IBitsChanged } from "./bitlib";
    import { createEventDispatcher, onMount } from 'svelte'

    const dispatch = createEventDispatcher<{change: IBitsChanged}>()

    export let value: number = 0;

    $: hexValue = "0";
    $: decValue = 0;
    $: {
        onValueChanged(value);
    }
    
    let bitArray: boolean[] = [];

    let bitLib: BitLib = new BitLib(bitArray, false);

    export let startBit: number;

    function onValueChanged(newValue: number) {
        decValue = newValue;
        bitLib.setValue(decValue);
        hexValue = decValue.toString(16).padStart(2, '0');
        bitArray = bitLib.getBits();
    }

    function dispatchChange() {
        dispatch("change", {bits: bitArray, startBit} as IBitsChanged);
    }

    function onBitsChanged(event: CustomEvent<[boolean, number]>) {
        bitArray[event.detail[1]] = event.detail[0];
        bitLib.setBits(bitArray);
        decValue = bitLib.getValue();
        hexValue = decValue.toString(16).padStart(2, '0');
        dispatchChange();
    }

    function onDecValueChanged() {
        bitLib.setValue(decValue);
        hexValue = decValue.toString(16).padStart(2, '0');
        onHexValueChanged();
        bitArray = bitLib.getBits();
        dispatchChange();
    }

    function onHexValueChanged() {
        let regEx = /[0-9A-Fa-f]{2}/g;
        let isHex = regEx.test(hexValue);

        let input = document.getElementById("hex_" + startBit) as HTMLInputElement;

        if(isHex){
            input.classList.remove("bit_group_error");
            decValue = Number('0x' + hexValue);
            bitLib.setValue(decValue);
            bitArray = bitLib.getBits();
            dispatchChange();
        }else{
            input.classList.add("bit_group_error");
        }
    }
</script>

<div>
    <fieldset class="tui-input-fieldset bit_group">
        <legend>Bits {startBit + 7} to {startBit}</legend>
        {#each Array(8) as _, i}
            <Bit bit={bitArray[8 - i - 1]} bit_number={8 - i - 1} on:change={onBitsChanged} />
        {/each}
        <div class="number_pad">
            <input class="tui-input dec_number" type="number" min="0" max="255" step="1" placeholder="Value" bind:value={decValue} on:change={onDecValueChanged}/> Dec
        </div>
        <div class="number_pad" id="hex_{startBit}">
            0x  <input class="tui-input hex_number" type="text" placeholder="Value" maxlength="2" bind:value={hexValue} on:change={onHexValueChanged} pattern="[a-fA-F\d]+"/> Hex
        </div>
    </fieldset>
</div>

<style>
    @import "../tuicss.css";

    .bit_group {
        display: flex;
        align-items: center;
    }

    .hex_number {
        width: 48px;
    }

    .dec_number {
        width: 72px;
    }

    .number_pad {
        margin: 10px;
    }

    :global(.bit_group_error) {
        border-color: red;
        border-width: 2px;
        border-style: dashed;
        padding: 2px;
    }

</style>
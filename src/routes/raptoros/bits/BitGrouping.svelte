<script lang="ts">
    import Bit from "./Bit.svelte";
    import { BitLib, type IBitsChanged } from "./bitlib";
    import { createEventDispatcher, onMount } from 'svelte'

    const dispatch = createEventDispatcher<{change: IBitsChanged}>()

    export let input: number;
    export let startBit: number;

    $: update(UpdatedValue.INPUT, input);
    $: bitArray = [];
    $: decValue = 0;
    $: hexValue = "";

    let bitLib: BitLib = new BitLib(8, false);

    enum UpdatedValue {
        BIT_ARRAY,
        HEX,
        DEC,
        INPUT,
    }

    function update(uv: UpdatedValue, value: number | string | boolean[]) {
        switch(uv) {
            case UpdatedValue.BIT_ARRAY:
                bitLib.setBits(value);
                decValue = bitLib.getValue();
                hexValue = bitLib.getHex();
                input = decValue;
                break;
            case UpdatedValue.HEX:
                bitLib.setValueHex(value);
                decValue = bitLib.getValue();
                bitArray = bitLib.getBits();
                input = decValue;
                break;
            case UpdatedValue.DEC:
                bitLib.setValue(value);
                hexValue = bitLib.getHex();
                bitArray = bitLib.getBits();
                input = decValue;
                break;
            case UpdatedValue.INPUT:
                bitLib.setValue(value);
                decValue = bitLib.getValue();
                hexValue = bitLib.getHex();
                bitArray = bitLib.getBits();
                break;
        }
        dispatch("change", {bits: bitArray, startBit, value: decValue} as IBitsChanged);
    }

    function onValueChanged(newValue: number) {
        update(UpdatedValue.INPUT, newValue);
    }

    function onBitsChanged(event: CustomEvent<[boolean, number]>) {
        bitArray[event.detail[1]] = event.detail[0];
        update(UpdatedValue.BIT_ARRAY, bitArray);
    }

    function onDecValueChanged() {
        update(UpdatedValue.DEC, decValue);
    }

    function onHexValueChanged() {
        let regEx = /[0-9A-Fa-f]{2}/g;
        let isHex = regEx.test(hexValue);

        let input = document.getElementById("hex_" + startBit) as HTMLInputElement;

        if(isHex){
            input.classList.remove("bit_group_error");
            update(UpdatedValue.HEX, hexValue);            
        }else{
            input.classList.add("bit_group_error");
        }
    }

    function leftShift() {
        decValue = decValue << 1;
        if(decValue > 255){
            decValue = 255;
        }
        update(UpdatedValue.DEC, decValue);
    }

    function rightShift() {
        decValue = decValue >> 1;
        if(decValue < 0){
            decValue = 0;
        }
        update(UpdatedValue.DEC, decValue);
    }

    function zeros() {
        decValue = 0;
        update(UpdatedValue.DEC, decValue);
    }

    function ones() {
        decValue = 255;
        update(UpdatedValue.DEC, decValue);
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
        <button class="tui-button number_pad" on:click={leftShift}>&lt&lt;</button>
        <button class="tui-button number_pad" on:click={rightShift}>&gt&gt;</button>
        <button class="tui-button number_pad" on:click={zeros}>0's</button>
        <button class="tui-button number_pad" on:click={ones}>1's</button>
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
<script lang="ts">
    import Bit from "./Bit.svelte";
    import { onMount } from "svelte";
    import { BitLib } from "./bitlib";

    let bits: number = 8;
    let signed: boolean = true;
    
    let finalized = false;

    let bitLib: BitLib = new BitLib(bits, signed);
    $: value = bitLib.getValue();

    function onBitsChanged(event: CustomEvent<number>) {
        bits = event.detail;
        bitLib = new BitLib(bits, signed);
        value = bitLib.getValue();
    }

    function onContinueClick() {
        finalized = true;
    }
    
</script>

{#if finalized == false}
    <div>
        <fieldset class="tui-input-fieldset">
            <label class="tui-radio">8-Bit
                <input type="radio" name="bits" on:select={() => {bits = 8;}} checked/>
                <span></span>
            </label>
            <label class="tui-radio">16-bit
                <input type="radio" name="bits" on:select={() => {bits = 16;}} />
                <span></span>
            </label>
            <label class="tui-radio">32-bit
                <input type="radio" name="bits" on:select={() => {bits = 32;}} />
                <span></span>
            </label>
        </fieldset>
        <br/>
        <fieldset class="tui-input-fieldset">
            <label class="tui-radio">Signed
                <input type="radio" name="sign" on:select={() => {signed = true;}} checked/>
                <span></span>
            </label>
            <label class="tui-radio">Unsigned
                <input type="radio" name="sign" on:select={() => {signed = false;}}/>
                <span></span>
            </label>
        </fieldset>
        <br/>
        <button class="tui-button" on:click={onContinueClick}>Continue</button>
    </div>
{:else}
    <input class="input number" type="number" placeholder="Value" bind:value={value} />
    <br/>
    {#each Array(bits) as _, i}
        <Bit bit={bitLib.getBit(i)} bit_number={bits - i - 1} on:change={onBitsChanged} />
    {/each}
{/if}



<style>
    @import "../tuicss.css";

</style>
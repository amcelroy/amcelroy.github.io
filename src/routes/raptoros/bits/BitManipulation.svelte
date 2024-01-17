<script lang="ts">
    import Bit from "./Bit.svelte";
    import { onMount } from "svelte";
    import { BitLib } from "./bitlib";

    let bits: number = 8;
    let signed: boolean = true;
    
    let finalized = false;

    $: value = 0;

    let bitArray: boolean[] = [];

    function onBitsChanged(event: CustomEvent<[[boolean, number]]>) {
        bitArray[event.detail[1]] = event.detail[0];
        let bitLib: BitLib = new BitLib(bitArray, signed);
        value = bitLib.getValue();
    }

    function onSignedChanged(sign: boolean) {
        signed = sign;
    }

    function onContinueClick() {
        for(let i = 0; i < bits; i++){
            bitArray.push(0);
        }
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
                <input type="radio" name="sign" on:click={() => {onSignedChanged(true);}} checked/>
                <span></span>
            </label>
            <label class="tui-radio">Unsigned
                <input type="radio" name="sign" on:click={() => {onSignedChanged(false);}}/>
                <span></span>
            </label>
        </fieldset>
        <br/>
        <button class="tui-button" on:click={onContinueClick}>Continue</button>
    </div>
{:else}
    <input class="tui-input number" type="number" placeholder="Value" bind:value={value} />
    <br/>
    <div>
        <fieldset class="tui-input-fieldset" style="width: 480px;">
            <legend>Bits 7 to 0</legend>
                {#each Array(bits) as _, i}
                    <Bit bit={bitArray[bits - i - 1]} bit_number={bits - i - 1} on:change={onBitsChanged} />
                {/each}
        </fieldset>
    </div>
{/if}



<style>
    @import "../tuicss.css";

</style>
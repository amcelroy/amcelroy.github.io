<script lang="ts">
    import Bit from "./Bit.svelte";
    import { onMount } from "svelte";
    import { BitLib, type IBitsChanged } from "./bitlib";
    import BitGrouping from "./BitGrouping.svelte";

    let bits: number = 8;
    
    let finalized = false;

    let value: number = 0;
    $: value_0_7 = 0;
    let value_8_15: number = 0;
    let value_16_23: number = 0;
    let value_24_31: number = 0;

    $: value = value_0_7;

    let bitArray: boolean[] = [];

    function onContinueClick() {
        for(let i = 0; i < bits; i++){
            bitArray.push(false);
        }
        finalized = true;
    }

    function onBitGroupingChanged(event: any) {
        let changes = event.detail as IBitsChanged;
        console.log(changes);
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
            <label class="tui-radio">64-bit
                <input type="radio" name="bits" on:select={() => {bits = 64;}} />
                <span></span>
            </label>
        </fieldset>
        <br/>
        <button class="tui-button button_margin" on:click={onContinueClick}>Continue</button>
    </div>
{:else}
    <input class="tui-input number" type="number" placeholder="Value" bind:value />
    <br/>
    <BitGrouping startBit={0} on:change={onBitGroupingChanged} value={value_0_7}/>
{/if}



<style>
    @import "../tuicss.css";

    .button_margin {
        margin: 8px;
    }

</style>
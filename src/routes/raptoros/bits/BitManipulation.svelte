<script lang="ts">
    import Bit from "./Bit.svelte";
    import { onMount } from "svelte";
    import { BitLib, type IBitsChanged } from "./bitlib";
    import BitGrouping from "./BitGrouping.svelte";

    let bits: number = 8;
    
    let finalized = false;

    let value: number = 0;
    let value_0_7: number = 0;
    let value_8_15: number = 0;
    let value_16_23: number = 0;
    let value_24_31: number = 0;

    $: value = value_0_7;
    $: bits_16 = (value_8_15 << 8) + value_0_7;
    $: bits_32 = ((value_24_31 << 24) + (value_16_23 << 16) + (value_8_15 << 8) + value_0_7);

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
                <input type="radio" name="bits" on:change={() => {bits = 8;}} checked/>
                <span></span>
            </label>
            <label class="tui-radio">16-bit
                <input type="radio" name="bits" on:change={() => {bits = 16;}} />
                <span></span>
            </label>
            <label class="tui-radio">32-bit
                <input type="radio" name="bits" on:change={() => {bits = 32;}} />
                <span></span>
            </label>
        </fieldset>
        <br/>
        <button class="tui-button button_margin" on:click={onContinueClick}>Continue</button>
    </div>
{:else}


    {#if bits == 8}
        <input class="tui-input number" type="number" placeholder="Value" bind:value={value_0_7} />
        <br/>
        <BitGrouping startBit={0} on:change={onBitGroupingChanged} bind:input={value_0_7}/>
    {:else if bits == 16}
        <input class="tui-input number" type="number" placeholder="Value" bind:value={bits_16} />
        <br/>
        <BitGrouping startBit={8} on:change={onBitGroupingChanged} bind:input={value_8_15}/>
        <BitGrouping startBit={0} on:change={onBitGroupingChanged} bind:input={value_0_7}/>
    {:else if bits == 32}
        <input class="tui-input number" type="number" placeholder="Value" bind:value={bits_32} />
        <br/>
        <BitGrouping startBit={24} on:change={onBitGroupingChanged} bind:input={value_24_31}/>
        <BitGrouping startBit={16} on:change={onBitGroupingChanged} bind:input={value_16_23}/>
        <BitGrouping startBit={8} on:change={onBitGroupingChanged} bind:input={value_8_15}/>
        <BitGrouping startBit={0} on:change={onBitGroupingChanged} bind:input={value_0_7}/>
    {/if}


{/if}



<style>
    @import "../tuicss.css";

    .button_margin {
        margin: 8px;
    }

</style>
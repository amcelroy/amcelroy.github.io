<script lang="ts">
    import Bit from "./Bit.svelte";
    import { onMount } from "svelte";
    import { BitLib, type IBitsChanged } from "./bitlib";
    import BitGrouping from "./BitGrouping.svelte";

    let bits: number = 8;
    
    let finalized = false;

    let value_0_7: number = 0;
    let value_8_15: number = 0;
    let value_16_23: number = 0;
    let value_24_31: number = 0;
    let inputString: string = "";

    let bitArray: boolean[] = [];

    function onContinueClick() {
        for(let i = 0; i < bits; i++){
            bitArray.push(false);
        }
        finalized = true;
    }

    function onBitGroupingChanged(event: any) {
        let changes = event.detail as IBitsChanged;
        let _8_bit = BigInt(value_0_7);
        let _16_bit = (BigInt(value_8_15) << BigInt(8)) + BigInt(value_0_7);
        let _32_bit = (BigInt(value_24_31) << BigInt(24)) + (BigInt(value_16_23) << BigInt(16)) + (BigInt(value_8_15) << BigInt(8)) + BigInt(value_0_7);

        switch(bits) {
            case 8:
                setInputValue(_8_bit);
                break;
            case 16:
                setInputValue(_16_bit);
                break;
            case 32:
                setInputValue(_32_bit);
                break;
        }
        console.log(changes);
    }

    function onLeftShift()  {
        let v = getInputValue();
        v = v << BigInt(1);
        let max = BigInt(2) ** BigInt(bits);
        if(v >= max) {
            v = max;
        }
        update(v);
        setInputValue(v);
    }

    function onRightShift()  {
        let v = getInputValue();
        v = v >> BigInt(1);
        if(v <= 0) {
            v = 0;
        }
        update(v);
        setInputValue(v);
    }

    function onZeros() {
        update(0);
        setInputValue(0);
    }

    function onOnes() {
        let max = BigInt(2) ** BigInt(bits) - BigInt(1);
        update(max);
        setInputValue(max);
    }

    function getInputValue() {
        return BigInt(inputString);
    }

    function setInputValue(newValue: bigint) {
        inputString = newValue.toString();
    }

    function update(newValue: bigint) {
        switch(bits) {
            case 8:
                if(newValue > 255) {
                    newValue = 255;
                }
                if(newValue < 0) {
                    newValue = 0;
                }
                value_0_7 = Number(BigInt(newValue));
                break;
            case 16:
                if(newValue > 65535) {
                    newValue = 65535;
                }
                if(newValue < 0) {
                    newValue = 0;
                }
                value_0_7 = Number(BigInt(newValue) & BigInt(0xFF));
                value_8_15 = Number((BigInt(newValue) & BigInt(0xFF00)) >> BigInt(8));
                break;
            case 32:
                if(newValue > 4294967295) {
                    newValue = 4294967295;
                }
                if(newValue < 0) {
                    newValue = 0;
                }
                value_0_7 = Number(BigInt(newValue) & BigInt(0xFF));
                value_8_15 = Number(BigInt(newValue) & BigInt(0xFF00) >> BigInt(8));
                value_16_23 = Number(BigInt(newValue) & BigInt(0xFF0000) >> BigInt(16));
                value_24_31 = Number(BigInt(newValue) & BigInt(0xFF000000) >> BigInt(24));
                break;
        }   
    }

    function onInputChanged(inputEvent: any) {
        let newValue = BigInt(inputEvent.srcElement.value);
        update(newValue);
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

    <input class="tui-input number" type="text" inputmode="numeric" pattern="\d*" value={inputString} on:change={onInputChanged}/>

    <br/>
    <br/>
    <button class="tui-button button_margin" on:click={onLeftShift}>&lt&lt;</button>
    <button class="tui-button button_margin" on:click={onRightShift}>&gt&gt;</button>
    <button class="tui-button button_margin" on:click={onZeros}>0's</button>
    <button class="tui-button button_margin" on:click={onOnes}>1's</button>
    <br/>
    <br/>

    {#if bits == 8}
        <BitGrouping startBit={0} on:change={onBitGroupingChanged} bind:input={value_0_7}/>
    {:else if bits == 16}
        <BitGrouping startBit={8} on:change={onBitGroupingChanged} bind:input={value_8_15}/>
        <BitGrouping startBit={0} on:change={onBitGroupingChanged} bind:input={value_0_7}/>
    {:else if bits == 32}
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
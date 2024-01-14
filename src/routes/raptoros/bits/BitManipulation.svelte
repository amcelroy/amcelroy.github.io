<script lang="ts">
    import Bit from "./Bit.svelte";
    import { onMount } from "svelte";
    import { BitLib } from "./bitlib";

    export let bits: number;
    export let signed: boolean;

    let bitLib: BitLib = new BitLib(bits, signed);
    $: value = bitLib.getValue();

    function onBitChanged(event: CustomEvent<[boolean, number]>) {
        bitLib.setBit(event.detail[1], event.detail[0]);
        value = bitLib.getValue();
    }
    
</script>

<input class="input number" type="number" placeholder="Value" bind:value={value} />
{#each Array(bits) as _, i}
    <Bit bit={bitLib.getBit(i)} bit_number={bits - i - 1} on:change={onBitChanged} />
{/each}


<style>

</style>
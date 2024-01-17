<script lang="ts">
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher<{ change: [boolean, number] }>()

    export let bit: boolean;
    export let bit_number: number;

    function onClick() {
        bit = !bit;
        dispatch('change', [bit, bit_number]);
    }
</script>

<button class="bit" on:click={onClick}>
{#if !bit}
<pre>
[ ]
{bit_number}
</pre>
{:else}
<pre>
[√]
{bit_number}
</pre>
{/if}
</button>

<style>
    .bit {
        width: 48px;
        height: 48px;
        margin: 4px;
    }
</style>
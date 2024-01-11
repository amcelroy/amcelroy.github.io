<script lang="ts">

    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

    export let units: Map<string, number>;

    let selectedUnitIndex = 0;

</script>

<RadioGroup>
{#each units as unit }
    <RadioItem bind:group={selectedUnitIndex} name="justify" value={unit[1]}>{unit[0]}</RadioItem>
{/each}
</RadioGroup>

<style>

</style>
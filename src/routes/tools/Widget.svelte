<script lang="ts">
    import Units from "./Units.svelte";
    import { UNITS_FARAD, UNITS_OHM } from "./units";

   export let name: string;
</script>

<div class="card card-hover widget">
    <header class="card-header">{name}</header>
    <section class="p-4">
        <slot/>
    </section>
</div>  

<style>
    .widget {
        min-width: 256px;
        max-width: 768px;
        width: fit-content;
        height: auto;
        max-height: 768px;
        margin: 8px;
    }
</style>
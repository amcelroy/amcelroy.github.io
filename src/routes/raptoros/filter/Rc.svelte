<script lang="ts">
    import Units from "../Units.svelte";
    import Widget from "../Widget.svelte";
    import {UNITS_OHM, UNITS_FARAD} from "../units";

</script>


<div>-----||-----</div>
<div class="numeric">
    <input class="input number" type="number" placeholder="Resistance" />
    <Units units={UNITS_OHM} />
</div>
<div class="numeric">
    <input class="input number" type="number" placeholder="Capacitance" />
    <Units units={UNITS_FARAD} />
</div>


<style>
    
    .number {
        width: 192px;
    }

    .numeric {
        vertical-align: center;
        display: flex;

    }

</style>
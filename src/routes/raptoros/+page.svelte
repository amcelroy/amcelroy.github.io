<script lang="ts">
    import { onMount } from "svelte";
    import Rc from "./filter/Rc.svelte";
    import BitManipulation from "./bits/BitManipulation.svelte";
    import Bootup from "./Bootup.svelte";
    import Desktop from "./Desktop.svelte";

    enum RaptorOSStates {
        BOOTING,
        RUNNING,
    }

    let state:RaptorOSStates = RaptorOSStates.BOOTING;

    onMount(() => {
        setInterval(() => {
            state = RaptorOSStates.RUNNING;
        }, 1500);
    });
</script>

<div class="tui-screen-1024-768 bordered black-168 screen">
    {#if state == RaptorOSStates.BOOTING}
        <Bootup/>
    {:else}
        <Desktop/>
    {/if}
</div>

<style>
    @import "./tuicss.css";

    div {
        font: 'Lucida Console';
        font-size: 16px;
    }

    .screen {
        position: relative;
    }
</style>
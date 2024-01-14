<script lang="ts">
    import { onMount } from "svelte";
    import Application from "./Application.svelte";

    function onClickBitlib() {

    }

    onMount(() => {
        const tuicss = import("./tuicss");
        //datetimeController();
    });
</script>

<nav class="tui-nav" style="width: 1021px;">
    <ul>
        <li class="tui-dropdown">
            <span class="red-168-text">A</span>pplications
            <div class="tui-dropdown-content">
                <ul>
                    <li><button on:click={onClickBitlib}><span class="red-168-text">B</span>itlib</button></li>
                </ul>
            </div>
        </li>
        <span class="tui-datetime" data-format="h:m:s a"></span>
    </ul>
</nav>
<div class="tui-bg-blue-white main">
    <Application name="Bitlib"/>
</div>


<style>
    @import "./tuicss.css";

    .main {
        width: 100%;
        height: 100%;
        margin-top: 24px;
        position: relative;
    }

</style>
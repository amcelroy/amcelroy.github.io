<script lang="ts">
    import logo from "./logo.png";
</script>

<div class="bootscreen">
    <div>
        <img src={logo} alt="RaptorOS Logo" width="256" height="256" />
        <div class="tui-progress-bar" style="width: 256px; margin: 16px;">
            <span class="tui-indeterminate"></span>
        </div>
        <div style="margin: 16px; width: 256px; text-align: center;">
            Booting RaptorOS
        </div>
    </div>
    <div class="about">
        <div>
            Written by Austin McElroy, Graphics powered by TuiCSS
        </div>
    </div>
</div>

<style>
    @import "./tuicss.css";

    div {
        font: 'Lucida Console';
        font-size: 16px;
    }

    .bootscreen {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        flex-direction: column;
    }

    .about {
        position: absolute;
        bottom: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
</style>
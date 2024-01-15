<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher<{close: string}>();

    export let name: string;
    export let uuid: string;
    export let top: number = 24;
    export let left: number = 24;

    let drag_focus: boolean = false;

    function onMouseDownMove(event: MouseEvent) {
        if(drag_focus){
            drag_focus = false;
        }else{
            drag_focus = true;
        }
    }

    function onMouseDownClose(event: MouseEvent) {
        dispatch('close', uuid);
    }

    function onMouseLeave(event: MouseEvent) {
        drag_focus = false;
    }

    function onWindowDrag(event: MouseEvent) {
        if(drag_focus){
            top += event.movementY;
            left += event.movementX;
        }
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div id={name} class="tui-window application" draggable={drag_focus} style="left: {left}px; top: {top}px;" on:mousemove={onWindowDrag} on:mouseleave={onMouseLeave}>
    <fieldset class="tui-fieldset">
        <legend class="center">Bitlib Long Name</legend>
        <button class="tui-fieldset-button left move_window" on:mousedown={onMouseDownMove} value={drag_focus}>
            <span class="green-255-text">■</span>
        </button>
        <button class="tui-fieldset-button" on:click={onMouseDownClose}>
            <span class="green-255-text">X</span>
        </button>
        <div class="application-content">
            <slot/>
        </div>
    </fieldset>
</div>

<style>
    @import "./tuicss.css";

    .move_window {
        cursor: move;
    }

    .application{
        position: absolute;
    }

    .application-content {
        width: 256px;
        height: 256px;
    }

</style>

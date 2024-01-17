<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher<{close: string}>();

    export let name: string;
    export let uuid: string;
    export let top: number = 24;
    export let left: number = 24;
    export let height: number = 256;
    export let width: number = 512;

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
<div  id={name} class="application" draggable={drag_focus} style="left: {left}px; top: {top}px;" on:mousemove={onWindowDrag} on:mouseleave={onMouseLeave}>
    <div class="tui-window">
        <fieldset class="tui-fieldset ">
            <legend style="center">{name}</legend>
            <button class="tui-fieldset-button field_set_margin move_window" on:mousedown={onMouseDownMove} value={drag_focus}>
                <span class="green-255-text">■</span>
            </button>
            <button class="tui-fieldset-button" on:click={onMouseDownClose}>
                <span class="green-255-text">X</span>
            </button>
            <div style="width: {width}px; height: {height}px;">
                <slot/>
            </div>
        </fieldset>
    </div>
</div>

<style>
    @import "./tuicss.css";

    .move_window {
        cursor: move;
    }

    .field_set_margin {
        margin-right: 24px;
    }

    .application{
        position: absolute;
    }
</style>

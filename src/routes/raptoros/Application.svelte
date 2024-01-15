<script lang="ts">
    export let name: string;

    let drag_focus: boolean = false;

    let top: number = 24;
    let left: number = 24;

    function onMouseDown(event: MouseEvent) {
        if(drag_focus){
            drag_focus = false;
        }else{
            drag_focus = true;
        }
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
<div id={name} class="tui-window application" on:mousemove={onWindowDrag} on:mouseleave={onMouseLeave} draggable={drag_focus} style="left: {left}px; top: {top}px;">
    <fieldset class="tui-fieldset">
        <legend>{name}</legend>
        <button class="tui-fieldset-button left" on:click={onMouseDown} on:mouseleave={onMouseLeave} value={drag_focus}><span class="green-255-text">■</span></button>
        <div class="application-content">
            <slot/>
        </div>
    </fieldset>
</div>

<style>
    @import "./tuicss.css";

    .application{
        position: absolute;
    }

    .application-content {
        width: 256px;
        height: 256px;
    }

</style>

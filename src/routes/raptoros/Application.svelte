<script lang="ts">
    export let name: string;

    let drag_focus: boolean = false;
    let top: number = 24;
    let left: number = 24;

    function onMouseDown(event: MouseEvent) {
        drag_focus = true;
    }

    function onMouseUp(event: MouseEvent) {
        drag_focus = false;
    }

    function onWindowDrag(event: DragEvent) {
        if(drag_focus){
            let elem = document.getElementById(name);
            top = event.clientY;
            left = event.clientX;
        }
    }
</script>

<div id={name} class="tui-window application" on:drag={onWindowDrag} draggable={drag_focus} style:top={top} style:left={left}>
    <fieldset class="tui-fieldset">
        <legend>{name}</legend>
        <button class="tui-fieldset-button left" on:mousedown={onMouseDown} on:mouseup={onMouseUp}><span class="green-255-text">■</span></button>
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
        width: 128px;
        height: 128px;
    }

</style>

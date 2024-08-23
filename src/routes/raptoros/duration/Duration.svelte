<script lang="ts">
    import { onMount } from "svelte";

    let start_time_hours: number = 7;
    let start_time_minutes: number = 30;
    let start_time_am: boolean = true;

    let end_time_hours: number = 4;
    let end_time_minutes: number = 30;
    let end_time_am: boolean = false;

    let duration_hours: number = 0;
    let duration_minutes: number = 0;

    function compute_duration() {
        duration_hours = end_time_hours + (end_time_am ? 0 : 12) - start_time_hours - (start_time_am ? 0 : 12);
        duration_minutes = end_time_minutes - start_time_minutes;
    }

    function hours_on_change(hours: number): number {
        if (hours > 12) {
            return 12;
        } else if (hours < 1) {
            return 1;
        } else {
            return hours;
        }
    }

    function minutes_on_change(minutes: number): number {
        if (minutes > 59) {
            return 59;
        } else if (minutes < 0) {
            return 0;
        } else {
            return minutes;
        }
    }
</script>


<div class="time_group">
    <div class="time_text">
        Start Time
    </div>
    <input class="tui-input time_input" type="number" bind:value={start_time_hours} on:change={() => {
        start_time_hours = hours_on_change(start_time_hours); 
        compute_duration();
    }}/>
    <input class="tui-input time_input" type="number" bind:value={start_time_minutes} on:change={() => {
        start_time_minutes = minutes_on_change(start_time_minutes);
        compute_duration();
    }}/>
    <label class="tui-checkbox">
        AM
        <input type="checkbox" bind:checked={start_time_am} on:change={() => {compute_duration()}}/>
        <span></span>
    </label>
</div>

<div class="time_group">
    <div class="time_text">
        End Time &nbsp 
    </div>
    <input class="tui-input time_input" type="number" bind:value={end_time_hours} on:change={() => {
        end_time_hours = hours_on_change(end_time_hours);
        compute_duration();
    }}/>
    <input class="tui-input time_input" type="number" bind:value={end_time_minutes} on:change={() => {
        end_time_minutes = minutes_on_change(end_time_minutes);
        compute_duration();
    }}/>
    <label class="tui-checkbox">
        AM
        <input type="checkbox" bind:checked={end_time_am} on:change={() => {compute_duration()}}/>
        <span></span>
    </label>
</div>

<div class="time_group">
    <div class="time_text">
        Duration&nbsp&nbsp&nbsp
    </div>
    <input class="tui-input time_input" type="number" bind:value={duration_hours}/>
    <input class="tui-input time_input" type="number" bind:value={duration_minutes}/>
</div>

<style>
    @import "../tuicss.css";

    .time_text {
        margin-right: 8px;
    }

    .time_group {
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        margin-right: 3px;
        padding-right: 3px;
    }

    .time_input {
        width: 100px;
    }

    .button_margin {
        margin: 8px;
    }

</style>
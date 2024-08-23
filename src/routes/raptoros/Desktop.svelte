<script lang="ts">
    import { onMount } from "svelte";
    import Application from "./Application.svelte";

    import { Task, TaskManager } from "./tasks";
    import BitManipulation from "./bits/BitManipulation.svelte";
    import Duration from "./duration/Duration.svelte";

    let task_manager: TaskManager = new TaskManager();

    $: tasks = [];

    function onSpawn(name: string) {
        let uuid = task_manager.spawn(name);
        tasks = task_manager.getTasks();
        console.log(`Spawning Application with UUID: ${uuid}`);
    }

    function onApplicationClose(event: CustomEvent<string>){
        task_manager.closeTask(event.detail);
        tasks = task_manager.getTasks();
        console.log(`Closing Application UUID: ${event.detail}`);
    }

    onMount(() => {
        const tuicss = import("./tuicss");
    });
</script>

<nav class="tui-nav" style="width: 1021px;">
    <ul>
        <li class="tui-dropdown">
            <span class="red-168-text">A</span>pplications
            <div class="tui-dropdown-content">
                <ul>
                    <li><button on:click={() => { onSpawn("bitlib") }}><span class="red-168-text">B</span>itlib</button></li>
                </ul>
                <ul>
                    <li><button on:click={() => { onSpawn("duration") }}><span class="red-168-text">D</span>uration</button></li>
                </ul>
            </div>
        </li>
        <span class="tui-datetime" data-format="h:m:s a"></span>
    </ul>
</nav>
<div class="tui-bg-blue-white main">
    {#each tasks as task, i}
        {#if task.name == "bitlib"}
            <Application name={task.name + '_' + task.instance} uuid={task.uuid} top={i*32} left={i*32} width={700} height={256} on:close={onApplicationClose}>
                <BitManipulation />
            </Application>
        {/if}
        {#if task.name == "duration"}
            <Application name={task.name + '_' + task.instance} uuid={task.uuid} top={i*32} left={i*32} width={700} height={256} on:close={onApplicationClose}>
                <Duration />
            </Application>
        {/if}
    {/each}
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
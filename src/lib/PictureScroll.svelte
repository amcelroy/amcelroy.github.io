<script lang="ts">
    export let urls: string[] = [];
    export let iframes: string[] = [];
</script>

<div class="flex shadow border m-8 rounded-lg variant-glass-surface">
    <div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10">
        {#each iframes as frame}
        <div class="snap-start shrink-0 card my-auto text-center">
            <iframe src="{frame}" width="1024" height="640" allow="autoplay"></iframe>
        </div> 
        {/each}
        {#each urls as url}
        <div class="snap-start shrink-0 card my-auto w-40 md:w-4/6 text-center">
            <img src="{url}" alt="Schematic" class="rounded-lg"/>
        </div> 
        {/each}
    </div>
</div>
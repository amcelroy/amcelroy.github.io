<script lang="ts">
    export let quote: string;
    export let citation: string;
</script>

<div class="card m-4 flex p-4 variant-ghost-surface">
    <div class="justify-center m-auto">
        <div class="flex items-stretch">
            <div class="quotation pr-1">"</div>
            <div class="quote">{quote}</div>
            <div class="quotation pl-1">"</div>
        </div>
        <div class="flex justify-end mt-4 mr-16">
            <h4 class="pr-1">-</h4><h6 class="citation">{citation}</h6>
        </div>
    </div>
</div>

<style>
    .line {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .quote {
        font-size: 1.5em;
        font-weight: bold;
        font-style: italic;
        font-style: italic;
        font-family: 'Courier New', Courier, monospace;
    }
    .citation {
        font-size: 1em;
        font-family:'Courier New', Courier, monospace;
    }
    .quotation{
        font-size: 2.5em;
        font-weight: bold;

    }
</style>
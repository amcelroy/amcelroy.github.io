<script lang="ts">
    import { ProgressRadial,Accordion, AccordionItem } from "@skeletonlabs/skeleton";

    export let title: string;
    export let description: string = "";
</script>

<div class="card card-hover art variant-glass-secondary">    
    <AccordionItem>
        <!-- <svelte:fragment slot="lead">(icon)</svelte:fragment> -->
        <svelte:fragment slot="summary">{title}</svelte:fragment>
        <svelte:fragment slot="content">
            <p>{description}</p>
            <slot></slot>
        </svelte:fragment>
    </AccordionItem>
</div>


<!-- {#await fetchImage}
    <ProgressRadial />
{:then data}
    <img src={data.message} alt={description} />
{:catch error}
    <p>Error loading image {url}</p>
{/await} -->

<style>
    .art {
        min-width: 680px;
        max-width: 100%;
        width: 680px;
    }


</style>
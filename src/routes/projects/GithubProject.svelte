<script lang="ts">
    import Icon from '@iconify/svelte';
    import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

    export let header: string;
    export let description: string;
    export let url: string;
</script>

<div class="card card-hover">
    <Accordion>
        <AccordionItem open>
            <svelte:fragment slot="lead">{header}</svelte:fragment>
            <svelte:fragment slot="summary">{header}</svelte:fragment>
            <svelte:fragment slot="content">{description}</svelte:fragment>
        </AccordionItem>
    </Accordion>
</div>

<style>
    .project {
        min-width: 128px;
        max-width: 100%;
        width: 512px;
    }

</style>

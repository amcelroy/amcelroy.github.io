<script lang="ts">
    import Icon from '@iconify/svelte';
    import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

    export let header: string;
</script>

<div class="project">
    <AccordionItem>
        <svelte:fragment slot="lead">
            <Icon icon="mdi:idea" width="64"/>
        </svelte:fragment>
        <svelte:fragment slot="summary">{header}</svelte:fragment>
        <svelte:fragment slot="content">
            <slot/>
        </svelte:fragment>
    </AccordionItem>
</div>

<style>
    .project {
        min-width: 128px;
        max-width: 100%;
        width: 100%;
    }
</style>

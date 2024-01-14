<script lang="ts">
    import Icon from '@iconify/svelte';

    export let header: string;
    export let description: string;
    export let url: string;
</script>

<a class="card variant-glass-primary" href={url}>
    <header class="card-header">{header}</header>
    <section class="p-4">{description}</section>
</a>

<style>

</style>

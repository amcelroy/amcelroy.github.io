<script lang="ts">
    import { onMount } from "svelte";
    import resume from './amcelroy_cv.pdf';

    let PdfViewer: any;

    onMount(async () => {
        const module = await import("svelte-pdf");
        PdfViewer = module.default;
    });

</script>

<svelte:component this={PdfViewer} url={resume}/>


<style>

</style>
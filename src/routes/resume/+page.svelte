<script lang="ts">
    import { base } from '$app/paths';

    const resumeUrl = `${base}/resume.pdf`;
</script>

<svelte:head>
    <title>Resume | Austin McElroy</title>
    <meta name="description" content="Austin McElroy's resume" />
</svelte:head>

<main class="resume-page">
    <div class="resume-actions">
        <a class="btn variant-filled-primary" href={resumeUrl} target="_blank" rel="noreferrer">
            Open PDF
        </a>
        <a class="btn variant-ghost-surface" href={resumeUrl} download="Austin-McElroy-Resume.pdf">
            Download
        </a>
    </div>

    <object class="resume" data={resumeUrl} type="application/pdf" aria-label="Austin McElroy's resume">
        <p>
            Your browser cannot display the embedded PDF.
            <a href={resumeUrl}>Open the resume instead.</a>
        </p>
    </object>
</main>

<style>
    .resume-page {
        width: min(100%, 72rem);
        height: calc(100vh - 5rem);
        min-height: 36rem;
        margin: 0 auto;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .resume-actions {
        display: flex;
        justify-content: flex-end;
        gap: 0.5rem;
    }

    .resume {
        width: 100%;
        flex: 1;
        border: 0;
        border-radius: 0.5rem;
        background: white;
    }
</style>

<script lang="ts">
    import GithubProject from "./GithubProject.svelte";


</script>

<div class="projects">
    <GithubProject header="amcelroy.github.io" description="This website!" url="https://github.com/amcelroy/amcelroy.github.io"/>
</div>


<style>
    .projects {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin: 16px;
    }
</style> 
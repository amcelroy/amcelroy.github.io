<script lang="ts">
    import { onMount } from 'svelte';


    onMount(() => {
        var frame = document.getElementById("map") as HTMLIFrameElement; 
        frame.onload = () => { 
            frame.style.height =  frame.contentWindow!.document.body.scrollHeight + 'px'; 
            frame.style.width  =  frame.contentWindow!.document.body.scrollWidth+'px'; 
        } 
    });

</script>

<iframe src="https://www.google.com/maps/d/u/0/embed?mid=11mHYSuNKCLLDkMLImVfxbFqwinAQEW0&ehbc=2E312F&noprof=1" 
    id="map"
    class="map"
    title="Dad's Project Map of Vietnam"
    ></iframe>

<style>
    .map {
        width: 95vw;
        height: 90vh;
    }

</style>
<script lang="ts">
    import { onMount } from "svelte";
    onMount(async () => {
        var frame = document.getElementById("resume_frame") as HTMLIFrameElement;
            
        if(frame) {
            // Adjusting the iframe height onload event
            frame.onload = function() {
                // set the height of the iframe as 
                // the height of the iframe content
                frame.style.height = frame.contentWindow?.document.body.scrollHeight + 'px';

                // set the width of the iframe as the 
                // width of the iframe content
                frame.style.width  = frame.contentWindow?.document.body.scrollWidth + 'px';
            }
        }
    });
</script>

<div class="resume_div m-auto">
    <iframe id="resume_frame" class="resume m-auto" src="https://drive.google.com/file/d/1k6tBH5qRwrFie-5jXqlsd5vyDKT5aHjU/preview" allow="autoplay"></iframe>
</div>

<style>
    .resume_div {
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .resume {
        width: 100%;
        height: 100%;
    }
</style>
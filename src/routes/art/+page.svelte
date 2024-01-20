<script lang="ts">
    import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
    import Art from './Art.svelte';

</script>

<div class="allart card variant-glass-secondary">
    <p>
        My 2024 New Years resolution was to paint one painting a week in an effort to learn some new art skills.
        I really like watercolor paintings for the pastels and the chaos that comes from the surface tension of 
        water on the paper. 
    </p>

    <br/>

    <p> 
        To help learn, I picked up "Stunning Watercolor Skies" by Rachael Mae Moyles which has really simple and 
        effective techniques for landscapes, something I've always enjoyed photographing on camping trips. Below
        are some of my paintings, earliest to latest as the year progresses.
    </p>

    <br/>

    <Accordion>
        <Art description="First landscape painting after reading a book on watercolor landscapes. 
            Pretty basic, uninspired hills, I painted the horizon too far down." title="First landscape painting">
            <iframe src="https://drive.google.com/file/d/14459zfrsI_fwh8lFxHGYhQON46VJXlSo/preview" width="640" height="480" allow="autoplay"></iframe>
        </Art>
        <Art description="My wife and I painted these on New Year's Eve 2023. Mine is on the left, hers is on the right. It was a lot
            of fun to share that time and activity together." title="New Years Eve Fireworks">
            <iframe src="https://drive.google.com/file/d/1b2xYRDDfa52C2HBCp4XFVcFNNROOB0qR/preview" width="640" height="480" allow="autoplay"></iframe>
        </Art>
        <Art description="Another attempt at a landscape with mountains. I tried to focus on the mountains
            and making them less sinusoidal and more random." title="Landscape retry">
            <iframe src="https://drive.google.com/file/d/1CwjojmmJyfssGKNKYdf8bO8TpAIZRa-f/preview" width="640" height="480" allow="autoplay"></iframe>
        </Art>
        <Art title="Sunrises over a pine forest" description="This is the second lesson in my tutorial book. It is try to teach wetting the paper
            and using a wet-on-wet technique, then more detailed foreground work using a wet-on-dry technique.">
            <iframe src="https://drive.google.com/file/d/142GSaxfEDvUOtdx4MVJSvw_B_CZtGfUQ/preview" width="640" height="480" allow="autoplay"></iframe>
            <iframe src="https://drive.google.com/file/d/1_dENZ1rLuMCgcmzea_-3OnmmSMzYvEuh/preview" width="640" height="480" allow="autoplay"></iframe>
        </Art>
        <Art title="Trees in the evening, with moon" description="The moon was setting at dusk and there were some high clouds that
            reflected the setting sun. The trees without leaves are supposed to be pecan trees, with Southern Oaks on the right.">
            <iframe src="https://drive.google.com/file/d/1BercaKiLgDfAcIUgaUDnfS5i7gPhKPYD/preview" width="640" height="480" allow="autoplay"></iframe>
            <iframe src="https://drive.google.com/file/d/1sJbYuOQCu-UeDmXzwPzQoXdnESQRs1BC/preview" width="640" height="480" allow="autoplay"></iframe>
        </Art>
        <Art title="Liam, on a hill" description="I was trying out some new paper and pigments and decided to paint a picture my wife mentioned
            that she enjoyed. There were more buildings in the background in the original, but I wasn't confident enough to attempt them. However, 
            the Google sail building made it. I also added a tree to make things a little more colorful.">
            <iframe src="https://drive.google.com/file/d/19nILblexYqnwTuucn4wIJ3fhif2X-ndg/preview" width="640" height="480" allow="autoplay"></iframe>
        </Art>
    </Accordion>
</div>

<style> 
    .allart {
        margin: 32px;
        padding: 16px;
        float: left;
    }
</style>
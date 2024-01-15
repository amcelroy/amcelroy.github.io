<script lang="ts">
    import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
    import Art from './Art.svelte';

</script>

<div class="allart">
    <Accordion>
        <Art description="First landscape painting after reading a book on watercolor landscapes. \
            Pretty basic, uninspired hills, I painted the horizon too far down." title="First landscape painting">
            <iframe src="https://drive.google.com/file/d/14459zfrsI_fwh8lFxHGYhQON46VJXlSo/preview" width="640" height="480" allow="autoplay"></iframe>
        </Art>
        <Art description="My wife and I painted these on New Year's Eve 2023" title="New Years Eve Fireworks">
            <iframe src="https://drive.google.com/file/d/1b2xYRDDfa52C2HBCp4XFVcFNNROOB0qR/preview" width="640" height="480" allow="autoplay"></iframe>
        </Art>
        <Art description="Another attempt at a landscape with mountains. I tried to focus on the mountains \
            and making them less sinusoidal and more random." title="Landscape retry">
            <iframe src="https://drive.google.com/file/d/1CwjojmmJyfssGKNKYdf8bO8TpAIZRa-f/preview" width="640" height="480" allow="autoplay"></iframe>
        </Art>
        <Art title="Sunrises over a pine forest" description="This is the second lesson in my tutorial book. It is try to teach wetting the paper \
            and using a wet-on-wet technique, then more detailed foreground work using a wet-on-dry technique.">
            <iframe src="https://drive.google.com/file/d/142GSaxfEDvUOtdx4MVJSvw_B_CZtGfUQ/preview" width="640" height="480" allow="autoplay"></iframe>
            <iframe src="https://drive.google.com/file/d/1_dENZ1rLuMCgcmzea_-3OnmmSMzYvEuh/preview" width="640" height="480" allow="autoplay"></iframe>
        </Art>
        <Art title="Trees in the evening, with moon" description="The moon was setting at dusk and there were some high clouds that \
            reflected the setting sun. The trees without leaves are supposed to be pecan trees, with Southern Oaks on the right.">
            <iframe src="https://drive.google.com/file/d/1BercaKiLgDfAcIUgaUDnfS5i7gPhKPYD/preview" width="640" height="480" allow="autoplay"></iframe>
            <iframe src="https://drive.google.com/file/d/1sJbYuOQCu-UeDmXzwPzQoXdnESQRs1BC/preview" width="640" height="480" allow="autoplay"></iframe>
        </Art>
    </Accordion>
</div>

<style> 
    .allart {
        margin: 32px;
    }
</style>
<script lang="ts">
    import { Color } from "$lib/utils";


    export let v: number;

    $: color = new Color().from_u32(v);

</script>

<div class="border rounded-full w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 m-1" 
    style="background-color: {color.to_css_string()};"/>

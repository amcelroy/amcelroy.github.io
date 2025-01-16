<script lang="ts">

    export let v: number;

    $: color = argbToCssColor(v);

    function argbToCssColor(argb: number) {
        const alpha = ((argb >> 24) & 0xFF);
        const blue = (argb >> 16) & 0xFF;
        const green = (argb >> 8) & 0xFF;
        const red = argb & 0xFF;
    
        return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    }

</script>

<div class="border rounded-full w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 m-1" style="background-color: {color};">

</div>

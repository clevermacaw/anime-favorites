<script lang="ts">
    import { goto } from "$app/navigation";

    export let title: string;
    export let mal_id: number;
    export let image: string;
</script>

<h1>{title}</h1>
<img
    class="hover:opacity-50 hover:cursor-pointer"
    src={image}
    alt={title}
    on:click={() => goto(`/${mal_id}`)}
    height="200px"
    width="200px"
/>

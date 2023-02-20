<script lang="ts">
    import { enhance } from "$app/forms";
    import { goto } from "$app/navigation";
    import AnimeComponent from "../AnimeComponent.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<AnimeComponent
    title={data.anime.title}
    mal_id={data.anime.mal_id}
    image={data.anime.images.webp.image_url}
/>

<form action="?/addToFavorites" method="post" use:enhance>
    <input type="hidden" name="mal_id" value={data.anime.mal_id} />
    <input type="hidden" name="title" value={data.anime.title} />
    <input
        type="hidden"
        name="image"
        value={data.anime.images.webp.image_url}
    />
    <button class="bg-gray-300 rounded p-4 mt-4" type="submit">
        Add to favorites
    </button>
</form>

<button class="bg-gray-300 rounded p-4 mt-4" on:click={() => goto("/")}>
    Go back to list
</button>

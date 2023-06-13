import { getFavorites } from "$lib/favorites.utils";
import type { LayoutServerLoad } from "./$types";

export const load = (async () => {
    const favorites = await getFavorites();
    return {
        favorites: favorites,
    };
}) satisfies LayoutServerLoad;

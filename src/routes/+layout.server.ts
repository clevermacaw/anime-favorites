import type { LayoutServerLoad } from "./$types";
import favorites from "../data/favorites";

export const load = (async () => {

    // not working, too much api requests, rate limit
    // const favoritesPromise: Anime[] = [];
    // for (const favorite of favorites) {
    //     const anime = await apiRequest<Anime>(`anime/${favorite}`);
    //     favoritesPromise.push(anime);
    // }
    return {
        favorites: favorites,
    };
}) satisfies LayoutServerLoad;

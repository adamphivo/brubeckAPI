<script lang="ts">
    import { overview } from "$lib/stores";
    import type { ActionData, PageData } from "./$types";
    import FavoriteTotals from "$lib/components/FavoriteTotals.svelte";
    import FavoriteNode from "$lib/components/FavoriteNode.svelte";
    import FavoriteAdd from "$lib/components/FavoriteAdd.svelte";

    export let form: ActionData;
</script>

<div class="flex w-full flex-col gap-10 max-w-screen-lg pt-20 pb-40">
    <FavoriteAdd result={form}></FavoriteAdd>
    <FavoriteTotals></FavoriteTotals>
    {#if $overview}
        <div class="flex w-full flex-wrap justify-between items-stretch gap-6">
            {#each $overview.favorites as node (node.db.id) }
                    <div class="flex grow">
                        <FavoriteNode {node}/>
                    </div>
            {/each}
        </div>
    {/if}
</div>
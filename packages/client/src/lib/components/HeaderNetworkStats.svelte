<script lang="ts">
    import { prices } from "$lib/stores";
    import type { Network } from "@brubeckscan/common/types";
    import { format } from "$lib/utils/format";

    export let network: Network;
</script>

<div class="flex text-xs gap-4">
    <p>{format.numberWithSpaces(Math.round(network?.stats.SPOTDATASTAKED * $prices.DATAUSDT))} USDT Locked</p>
    <p>APY {network?.stats["SPOTAPY"]}%</p>
    <p>{network?.lastRewards[0].topologySize} nodes</p>
</div>
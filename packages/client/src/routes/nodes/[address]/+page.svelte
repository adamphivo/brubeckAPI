<script lang="ts">
    import Module from "$lib/components/Module.svelte";
    import TokenData from "$lib/components/TokenData.svelte";
    import type { PageData } from "./$types";
    import { format } from "$lib/utils/format";

    export let data: PageData;

    // Icon
    const src = `https://api.dicebear.com/5.x/identicon/svg?seed=${data.node.address}`;
    const alt = "A unique identicon";
</script>

<div class="w-full flex gap-4 items-stretch justify-between flex-wrap max-w-screen-lg pt-20 pb-40">
    <!-- Avatar -->
    <div class="flex">
        <Module>
            <div class="w-48 flex items-center justify-center {data.node.status ? "" : "inactive"}">
                <img class="w-32" {src} {alt}>
            </div>
        </Module>
    </div>

    <!-- Stats -->
    <div class="flex grow">
        <Module>
            <div class="w-full flex flex-col justify-between text-lg">
                <h3 class="text-3xl mb-4">Node stats</h3>
                <div class="flex justify-between">
                    <p class="text-slate-600">Status</p>
                    {#if data.node.status}
                    <p class="text-green-400">OK</p>
                    {:else}
                    <p class="text-red-600">KO</p>
                    {/if}
                </div>
                {#if data.node.lastClaim?.claimTime}
                <div class="flex justify-between">
                    <p class="text-slate-600">Latest claim</p>
                    <p class="text-slate-900">{format.getFromNow(data.node.lastClaim.claimTime)}</p>
                </div>
                {/if}
                <div class="flex justify-between">
                    <p class="text-slate-600">Address</p>
                    <p class="text-slate-900">{data.node.address}</p>
                </div>
                <div class="flex justify-between">
                    <p class="text-slate-600">Staked</p>
                    <p class="text-slate-900"><TokenData value={data.node.staked}/></p>
                </div>
                <div class="flex justify-between">
                    <p class="text-slate-600">To be received</p>
                    <p class="text-slate-900"><TokenData value={data.node.toBeReceived}/></p>
                </div>
                <div class="flex justify-between">
                    <p class="text-slate-600">Sent</p>
                    <p class="text-slate-900"><TokenData value={data.node.sent}/></p>
                </div>
                <div class="flex justify-between">
                    <p class="text-slate-600">Total rewards</p>
                    <p class="text-slate-900"><TokenData value={data.node.rewards}/></p>
                </div>
                <div class="flex justify-between">
                    <p class="text-slate-600">Rewards codes claimed</p>
                    <p class="text-slate-900">{data.node.claimCount}</p>
                </div>
                <div class="flex justify-between">
                    <p class="text-slate-600">Percentage of received claims</p>
                    <p class="text-slate-900">{Math.round(data.node.claimPercentage * 100)} %</p>
                </div>
            </div>
        </Module>
    </div>

    
    <!-- Payouts -->
    <div class="flex w-1/2">
        <Module>
            <div class="flex flex-col w-full">
                <h3 class="text-3xl mb-8">Payouts</h3>
                <div class="flex flex-col w-full gap-1 text-md">
                    {#each data.node.payouts.reverse() as payout}
                    <div class="w-full flex justify-between items-center">
                        <div class="text-slate-500">{new Date(+payout.timestamp * 1000).toUTCString()}</div>
                        <div><TokenData value={Math.round(+payout.value)}/></div>
                    </div>
                    {/each}
                </div>
                {#if !data.node.payouts.length}
                    <p class="text-lg">This node never received any payout</p>
                {/if}
            </div>
        </Module>
    </div>
    <!-- Payouts -->
    <div class="flex flex-grow">
        <Module>
            <div class="flex flex-col w-full">
                <h3 class="text-3xl mb-8">Latest codes</h3>
                <div class="flex flex-col w-full gap-1 text-md justify-between flex-grow">
                    {#each data.node.claimedRewardCodes.slice(0,10) as code}
                    <div class="w-full flex justify-between items-center flex-grow">
                        <div>{code.id}</div>
                        <div class="text-slate-500">{new Date(code.claimTime).toLocaleTimeString()}</div>
                    </div>
                    {/each}
                </div>
                {#if !data.node.claimedRewardCodes.length}
                <p class="text-lg">This node never claimed any code</p>
                {/if}
            </div>
        </Module>
    </div>
</div>

<style>
    .inactive {
        filter: grayscale(1);
    }
</style>
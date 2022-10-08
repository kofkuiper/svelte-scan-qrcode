<script lang="ts">
    import { result } from "$lib/stores/scan";
</script>

{#if $result}
    <h1 class="text-center">Scan result: {$result}</h1>
{/if}
<a href="/" class="text-center">Back to Home</a>

<style>
    .text-center {
        margin: auto;
        text-align: center;
    }
</style>

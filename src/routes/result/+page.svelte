<script lang="ts">
    import { result } from "$lib/stores/scan";
</script>

{#if $result}
    <div>
        <h2>Scan result: {$result}</h2>
    </div>
{:else}
    <a href="/">Back to Home</a>
{/if}

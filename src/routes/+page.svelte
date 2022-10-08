<script>
    import { goto } from "$app/navigation";
	import ScanQrCode from "$lib/components/ScanQRCode.svelte";
	import { result } from "$lib/stores/scan";
	
	function _onPermissionError() {
		alert("Permission rejected");
	}

	function _onResulted() {
		goto("/result");
	}
</script>

<ScanQrCode 
bind:scanResult={$result}
	options={{
		onPermissionError: () => _onPermissionError(),
		onResulted: () => _onResulted(),
	}}
/>

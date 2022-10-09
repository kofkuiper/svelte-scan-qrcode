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

<h1>svelte-scan-qrcode Demo</h1>
<a
	class="github-link"
	href="https://github.com/kofkuiper/svelte-scan-qrcode"
	target="_blank"
	rel="external"><u>View documentation on Github</u></a
>
<ScanQrCode
	bind:scanResult={$result}
	enableQRCodeReaderButton={true}
	options={{
		onPermissionError: () => _onPermissionError(),
		onResulted: () => _onResulted(),
	}}
/>

<style>
	.github-link {
		text-align: center;
		margin-top: 12px;
		margin-bottom: 24px;
		color: #2d99ff;
	}
</style>

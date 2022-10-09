# svelte-scan-qrcode

## [Demo](https://main--verdant-naiad-e61991.netlify.app/)



#### How to use

- Install [@kuiper/svelte-scan-qrcode](https://www.npmjs.com/package/@kuiper/svelte-scan-qrcode)
  ```shell
  npm install --save @kuiper/svelte-scan-qrcode
  ```

  ##### Simple with `bind:scanResult` to get scan result
  ```svelte
    <script lang="ts">
        import { ScanQRCode } from "@kuiper/svelte-scan-qrcode";
        let result = "";
    </script>

    <ScanQRCode bind:scanResult={result} options={{}} />
  ```

  ##### Custom with options
  ```svelte
    <script lang="ts">
        import { goto } from "$app/navigation";
        import { ScanQRCode } from "@kuiper/svelte-scan-qrcode";
        let result = "";

        function _onPermissionError() {
            alert("Permission rejected");
            location.reload();
        }

        function _onResulted() {
            if (result.includes("love")) {
                goto("/result"); // go to result page
            }
        }
    </script>

    <ScanQRCode
        bind:scanResult={result}
        options={{
            onPermissionError: () => _onPermissionError(),
            onResulted: () => _onResulted(),
        }}
    />

  ```

    - onPermissionError function will call if `@kuiper/svelte-scan-qrcode` package request camera get rejected.
    - onResulted function will call if the `@kuiper/svelte-scan-qrcode` package gets the scan result from QR Code.
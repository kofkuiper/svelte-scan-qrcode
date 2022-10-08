<script lang="ts">
    import { onMount } from "svelte";
    import jsQR from "jsqr";

    type optionsType = {
        onPermissionError?: Function;
        onResulted?: Function;
    };
    export let scanResult: string = "";
    export let options: optionsType;

    let video: any;
    let canvas: any;

    onMount(() => {
        requestCamera();
    });

    function requestCamera() {
        navigator.mediaDevices
            .getUserMedia({
                audio: false,
                video: {
                    facingMode: "environment",
                },
            })
            .then((userStream) => {
                video.srcObject = userStream;
                video.setAttribute("playsinline", true);
                video.play();
                startScan();
            })
            .catch((err) => {
                if (options?.onPermissionError != undefined) {
                    options.onPermissionError();
                } else {
                    alert(err);
                }
            });
    }

    function startScan() {
        const context = canvas.getContext("2d", { willReadFrequently: true });
        const { width, height } = canvas;

        context.drawImage(video, 0, 0, width, height);

        const imageData = context.getImageData(0, 0, width, height);
        const qrCode = jsQR(imageData.data, width, height);

        if (qrCode) {
            scanResult = qrCode.data;
            if (options?.onResulted != undefined) {
                options.onResulted(qrCode.data);
            } else {
                alert(qrCode.data);
                setTimeout(startScan, 1000);
            }
        } else {
            setTimeout(startScan, 500);
        }
    }

    function onCanPlay() {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        startScan();
    }
</script>

<canvas bind:this={canvas} />
<!-- svelte-ignore a11y-media-has-caption -->
<video on:canplay={onCanPlay} bind:this={video} />

<style>
    canvas {
        display: none;
    }
</style>

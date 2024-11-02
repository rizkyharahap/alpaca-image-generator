<script setup lang="ts">
import DownloadIcon from "@/assets/svg/download.svg";
import ShuffleIcon from "@/assets/svg/shuffle.svg";
import { alpacaStore } from "@/stores/alpaca";
import { useTemplateRef } from "vue";

const imagePreview = useTemplateRef("image-preview");
const imageGenerated = useTemplateRef("image-generated");

function loadImage(url: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "anonymous"; // Handle CORS if needed
    image.src = url;

    // Draw each image once it's loaded
    image.onload = () => resolve(image);

    // Handle image load errors
    image.onerror = reject;
  });
}

async function drawCanvas() {
  const canvas = document.createElement("canvas");

  // set width and height of canvas
  canvas.width = 1000;
  canvas.height = 1000;

  const context = canvas.getContext("2d");

  const imagePromises: Promise<HTMLImageElement>[] = [];

  imagePreview.value
    ?.querySelectorAll("img")
    .forEach((img) => imagePromises.push(loadImage(img.src)));

  const images = await Promise.all(imagePromises);

  for (const image of images) {
    context?.drawImage(image, 0, 0, canvas.width, canvas.height);
  }

  return canvas;
}

async function downloadImage() {
  const canvas = await drawCanvas();
  const imgUrl = canvas.toDataURL("image/png");

  // display and download img

  const outputImage = document.createElement("img");
  outputImage.src = imgUrl;

  // render on imageGenerated for downloading generated image
  imageGenerated.value?.appendChild(outputImage);

  // Optionally, create a download link
  const downloadLink = document.createElement("a");
  downloadLink.href = imgUrl;
  downloadLink.download = "generated-image.png";
  downloadLink.click();

  // destroy child after download
  imageGenerated.value?.removeChild(outputImage);
}
</script>

<template>
  <div class="relative mb-12">
    <figure class="relative aspect-square h-full w-full" ref="image-preview">
      <template v-for="(accessorizes, key) in alpacaStore.alpacas" :key="key">
        <template
          v-for="(accessorize, accessorizesIdx) in accessorizes"
          :key="accessorizesIdx"
        >
          <img
            v-if="alpacaStore.accessorizes[key] === accessorizesIdx"
            :src="`/assets/alpaca/${key}/${accessorize}`"
            :alt="accessorize"
            class="absolute h-full w-full"
          />
        </template>

        <img
          v-if="key === 'leg'"
          src="/assets/alpaca/nose.png"
          alt="nose"
          class="absolute h-full w-full"
        />
      </template>
    </figure>

    <div ref="image-generated" class="hidden"></div>

    <div
      class="dark:bg-gray-950 dark:shadow-gray-400 absolute -bottom-8 left-1/2 flex -translate-x-1/2 items-center justify-center gap-4 rounded-lg bg-white p-3 shadow-md"
    >
      <button
        type="button"
        class="dark:border-purple-600 dark:bg-purple-800 dark:text-purple-400 dark:hover:bg-purple-700 dark:hover:text-white dark:focus:ring-purple-700 rounded-lg p-4 text-sm font-medium text-purple-500 hover:bg-purple-200 focus:z-10 focus:outline-none focus:ring-2 focus:ring-purple-100"
        @click="alpacaStore.shuffle()"
      >
        <ShuffleIcon class="h-5 w-5" />
      </button>
      <button
        type="button"
        class="dark:border-purple-600 dark:bg-purple-800 dark:text-purple-400 dark:hover:bg-purple-700 dark:hover:text-white dark:focus:ring-purple-700 rounded-lg p-4 text-sm font-medium text-purple-500 hover:bg-purple-200 focus:z-10 focus:outline-none focus:ring-2 focus:ring-purple-100"
        @click="downloadImage()"
      >
        <DownloadIcon class="h-5 w-5" />
      </button>
    </div>
  </div>
</template>

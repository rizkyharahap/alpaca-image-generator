<script setup lang="ts">
import DownloadIcon from "@/assets/svg/download.svg";
import ShuffleIcon from "@/assets/svg/shuffle.svg";
import ImageGenerator from "./components/ImageGenerator.vue";
</script>

<template>
  <div class="container mx-auto max-w-5xl bg-white p-4 dark:bg-gray-950">
    <header>
      <h1 class="text-3xl font-semibold text-gray-900 dark:text-white">
        Alpaca Generator
      </h1>
      <span class="text-gray-60 text-base dark:text-gray-400"
        >by Rizki Harahap</span
      >
    </header>

    <main class="mt-6">
      <div class="relative mb-12">
        <ImageGenerator />

        <div
          class="absolute -bottom-8 left-1/2 flex -translate-x-1/2 items-center justify-center gap-4 rounded-lg bg-white p-3 shadow-md dark:bg-gray-950 dark:shadow-gray-400"
        >
          <button
            type="button"
            class="rounded-lg p-4 text-sm font-medium text-purple-500 hover:bg-purple-200 focus:z-10 focus:outline-none focus:ring-2 focus:ring-purple-100 dark:border-purple-600 dark:bg-purple-800 dark:text-purple-400 dark:hover:bg-purple-700 dark:hover:text-white dark:focus:ring-purple-700"
          >
            <DownloadIcon class="h-5 w-5" />
          </button>
          <button
            type="button"
            class="rounded-lg p-4 text-sm font-medium text-purple-500 hover:bg-purple-200 focus:z-10 focus:outline-none focus:ring-2 focus:ring-purple-100 dark:border-purple-600 dark:bg-purple-800 dark:text-purple-400 dark:hover:bg-purple-700 dark:hover:text-white dark:focus:ring-purple-700"
          >
            <ShuffleIcon class="h-5 w-5" />
          </button>
        </div>
      </div>

      <div>
        <h2 class="text-xl font-semibold text-gray-900">
          Accessorize the Alpaca's
        </h2>
      </div>
    </main>
  </div>
</template>

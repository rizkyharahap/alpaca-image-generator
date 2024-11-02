<script setup lang="ts">
import ImagePreview from "@/components/ImagePreview.vue";
import AccessorizeAlpaca from "./components/AccessorizeAlpaca.vue";
</script>

<template>
  <div
    class="dark:bg-gray-950 container mx-auto flex min-h-screen max-w-7xl flex-col justify-center bg-white p-4"
  >
    <header>
      <h1 class="dark:text-white text-3xl font-semibold text-gray-900">
        Alpaca Generator
      </h1>
      <span class="text-gray-60 dark:text-gray-400 text-base"
        >by Rizki Harahap</span
      >
    </header>

    <main class="mt-6 flex flex-row flex-wrap gap-9">
      <div
        class="mx-auto w-full max-w-[334px] flex-none sm:max-w-[400px] md:min-w-[360px] lg:max-w-[560px]"
      >
        <ImagePreview />
      </div>

      <div class="min-w-[240px] flex-1 sm:min-w-[360px] md:min-w-[320px]">
        <AccessorizeAlpaca />
      </div>
    </main>
  </div>
</template>

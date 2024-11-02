<script setup lang="ts">
import ImagePreview from "@/components/ImagePreview.vue";
import AccessorizeAlpaca from "./components/AccessorizeAlpaca.vue";
</script>

<template>
  <div class="dark:bg-gray-950 container mx-auto max-w-5xl bg-white p-4">
    <header>
      <h1 class="dark:text-white text-3xl font-semibold text-gray-900">
        Alpaca Generator
      </h1>
      <span class="text-gray-60 dark:text-gray-400 text-base"
        >by Rizki Harahap</span
      >
    </header>

    <main class="mt-6">
      <ImagePreview />

      <div>
        <AccessorizeAlpaca />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
  import ImagePreview from "@/components/ImagePreview.vue";
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
      <ImagePreview />
      
      <div>
        <h2 class="text-xl font-semibold text-gray-900">
          Accessorize the Alpaca's
        </h2>
      </div>
    </main>
  </div>
</template>

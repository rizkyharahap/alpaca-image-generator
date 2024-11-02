<script setup lang="ts">
import { alpacaStore, type AlpacaAccessorize } from "@/stores/alpaca";
import { ref } from "vue";

const activeAccessorize = ref<AlpacaAccessorize>("accessories");

function renderAccessorizeStyleName(value: string) {
  // split extension png from accessorize;
  const [name] = value.split(".png");

  const lastTwoCharacter = name.slice(-2);

  // check if 2 last character is not number, this use from split background name
  if (Number.isNaN(Number(lastTwoCharacter))) return name;

  return `${name.slice(0, -2)}-${lastTwoCharacter}`;
}
</script>

<template>
  <h2 class="text-xl font-semibold text-gray-900">Accessorize the Alpaca's</h2>

  <div class="mt-3 flex flex-wrap gap-2">
    <button
      v-for="(_, key) in alpacaStore.accessorizes"
      :key="key"
      class="dark:border-purple-600 dark:bg-purple-800 dark:text-purple-400 dark:hover:bg-purple-700 dark:hover:text-white dark:focus:ring-purple-700 rounded-full border-2 border-purple-500 px-4 py-2 text-sm font-medium capitalize text-purple-500 transition-colors duration-75 hover:bg-purple-200 focus:z-10 focus:outline-none focus:ring-2 focus:ring-purple-100"
      :class="{
        'bg-purple-500 text-white hover:bg-purple-400':
          activeAccessorize === key,
      }"
      @click="activeAccessorize = key"
    >
      {{ key }}
    </button>
  </div>

  <h2 class="mt-8 text-xl font-semibold text-gray-900">Style</h2>

  <div class="my-3 flex flex-wrap gap-2">
    <button
      v-for="(style, idx) in alpacaStore.alpacas[activeAccessorize]"
      :key="idx"
      class="dark:border-purple-600 dark:bg-purple-800 dark:text-purple-400 dark:hover:bg-purple-700 dark:hover:text-white dark:focus:ring-purple-700 rounded-full border-2 border-purple-500 px-4 py-2 text-sm font-medium capitalize text-purple-500 transition-colors duration-75 hover:bg-purple-200 focus:z-10 focus:outline-none focus:ring-2 focus:ring-purple-100"
      :class="{
        'bg-purple-500 text-white hover:bg-purple-400':
          alpacaStore.accessorizes[activeAccessorize] === style,
      }"
      @click="alpacaStore.changeAccessorize(activeAccessorize, style)"
    >
      {{ renderAccessorizeStyleName(style) }}
    </button>
  </div>
</template>

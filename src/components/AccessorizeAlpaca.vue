<script setup lang="ts">
import { alpacaStore, type AlpacaAccessorize } from "@/stores/alpaca";
import { ref } from "vue";

const activeAccessorize = ref<AlpacaAccessorize>("backgrounds");

function handleOnClickAccessorize(value: AlpacaAccessorize) {
  activeAccessorize.value = value;
}

function renderAccessorizeStyleName(value: string) {
  // split extension png from accessorize;
  const [name] = value.split(".png");

  const lastTwoCharacter = name.slice(-2);

  console.log(lastTwoCharacter, Number.isNaN(lastTwoCharacter));

  // check if 2 last character is not number, this use from split background name
  if (Number.isNaN(Number(lastTwoCharacter))) return name;

  return `${name.slice(0, -2)}-${lastTwoCharacter}`;
}
</script>

<template>
  <h2 class="text-xl font-semibold text-gray-900">Accessorize the Alpaca's</h2>

  <div class="mt-3 flex flex-wrap gap-2">
    <button
      v-for="(accessorize, key) in alpacaStore.accessorizes"
      :key="accessorize"
      class="dark:border-purple-600 dark:bg-purple-800 dark:text-purple-400 dark:hover:bg-purple-700 dark:hover:text-white dark:focus:ring-purple-700 rounded-full border-2 border-purple-500 px-4 py-2 text-sm font-medium capitalize text-purple-500 transition-colors duration-75 hover:bg-purple-200 focus:z-10 focus:outline-none focus:ring-2 focus:ring-purple-100"
      :class="{
        'bg-purple-500 text-white hover:bg-purple-400':
          activeAccessorize === key,
      }"
      @click="handleOnClickAccessorize(key)"
    >
      {{ key }}
    </button>
  </div>

  <h2 class="mt-8 text-xl font-semibold text-gray-900">Style</h2>

  <div class="my-3 flex flex-wrap gap-2">
    <button
      v-for="(style, idx) in alpacaStore.alpacas[activeAccessorize]"
      :key="style"
      class="dark:border-purple-600 dark:bg-purple-800 dark:text-purple-400 dark:hover:bg-purple-700 dark:hover:text-white dark:focus:ring-purple-700 rounded-full border-2 border-purple-500 px-4 py-2 text-sm font-medium capitalize text-purple-500 transition-colors duration-75 hover:bg-purple-200 focus:z-10 focus:outline-none focus:ring-2 focus:ring-purple-100"
      :class="{
        'bg-purple-500 text-white hover:bg-purple-400':
          alpacaStore.accessorizes[activeAccessorize] === idx,
      }"
      @click="alpacaStore.changeAccessorize(activeAccessorize, idx)"
    >
      {{ renderAccessorizeStyleName(style) }}
    </button>
  </div>
</template>

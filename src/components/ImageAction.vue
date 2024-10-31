<script setup lang="ts"></script>

<template>
  <div class="container">
    <button>🔀 Random</button>
    <button>🖼️ Download</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  gap: 16px;
}

button {
  border: 1px solid var(--vt-c-white-mute);
  background-color: var(--vt-c-white-soft);
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}
</style>

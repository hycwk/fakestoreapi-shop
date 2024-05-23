<script lang="ts" setup>
const { data, pending, error, refresh } = await useFetch('/api/store/product');
</script>

<template>
  <div v-if="pending">Loading...</div>
  <div v-else-if="error">Error: {{ error }}</div>
  <div v-else-if="Array.isArray(data?.body)">
    <div class="grid md:grid-cols-2 md:gap-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4">
      <div v-for="product in data.body" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

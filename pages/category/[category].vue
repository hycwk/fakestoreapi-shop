<script lang="ts" setup>
import type { ProductAPIResponse } from '~/types/store';
const route = useRoute();
const { data, pending, error, refresh } = await useFetch<ProductAPIResponse>('/api/store/product?productCat=' + route.params.category);
</script>

<template>
  <div class="max-w-7xl">
    <div class="mb-4">
      <NuxtLink to="/" class="btn btn-ghost">
        <IconsBack width="24" height="24" />
        Back
      </NuxtLink>
    </div>
    <div>
      <h1 class="uppercase font-bold mb-2">{{ route.params.category }}</h1>
    </div>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else-if="Array.isArray(data?.body)">
      <div class="grid md:grid-cols-2 md:gap-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4">
        <div v-for="product in data.body" :key="product.id">
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

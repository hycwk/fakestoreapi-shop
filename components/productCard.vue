<script lang="ts" setup>
import type { Product } from '~/types/store';

const props = defineProps<{ product: Product }>();
const { product } = props;
</script>
<template>
  <div class="card w-72 bg-base-100 shadow-xl">
    <figure class="bg-white p-4"><img :src="product.image" :alt="product.title" class="object-contain h-48 w-72 max-w-full" /></figure>
    <div class="card-body">
      <h2 class="card-title font-store">{{ product.title }}</h2>
      <p class="font-store">{{ product.description }}</p>
      <p>${{ product.price }}</p>
      <div class="card-actions justify-end">
        <NuxtLink :to="'/product/' + product.id" class="btn btn-primary">Details</NuxtLink>
      </div>
    </div>
  </div>
</template>

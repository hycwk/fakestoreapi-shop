<script lang="ts" setup>
import type { Product } from '~/types/store';

const props = defineProps<{product: Product}>()
const { product } = props
const { title, description, price, image, category } = product
</script>
<template>
	<div class="grid md:grid-cols-2 md:gap-4">
		<figure class="w-full mb-4">
			<img :src="image" :alt="title">
		</figure>
		<div class="flex flex-col">
			<nuxt-link to="/" class="mb-4 font-bold uppercase">{{ category }}</nuxt-link>
			<h3 class="mb-4 font-store text-lg">{{ title }}</h3>
			<p class="mb-4 font-store">{{ description }}</p>
			<p class="mb-4">${{ price }}</p>
			<button class="btn btn-primary mt-auto">Add to cart</button>
		</div>
	</div>
</template>
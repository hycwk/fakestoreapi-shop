<script lang="ts" setup>
	import type { ProductAPIResponse } from '~/types/store';
	const route = useRoute()
	const { data, pending, error, refresh } = await useFetch<ProductAPIResponse>('/api/store/product?productId=' + route.params.product_id)
</script>

<template>
	<div class="mb-4">
		<NuxtLink to="/" class="btn btn-ghost">
			<IconsBack width="24" height="24" />
			Back
		</NuxtLink>
	</div>
	<div v-if="pending">Loading...</div>
	<div v-else-if="error">Error: {{ error }}</div>
	<div v-else-if="!Array.isArray(data?.body) && typeof data?.body === 'object'">
		<ProductDetail :product="data.body" />
	</div>
</template>
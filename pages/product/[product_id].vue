<script lang="ts" setup>
	const route = useRoute()
	const { data, pending, error, refresh } = await useFetch('/api/store/product?productId=' + route.params.product_id)
</script>

<template>
	<div v-if="pending">Loading...</div>
	<div v-else-if="error">Error: {{ error }}</div>
	<div v-else-if="!Array.isArray(data?.body) && typeof data?.body === 'object'">
		{{ JSON.stringify(data.body) }}
	</div>
</template>
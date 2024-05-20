<script lang="ts" setup>
	const { data, pending, error, refresh } = await useFetch('/api/store/product')
</script>

<template>
	<div v-if="pending">Loading...</div>
	<div v-else-if="error">Error: {{ error }}</div>
	<div v-else-if="Array.isArray(data?.body)">
		<div v-for="product in data.body" :key="product.id">
			<ProductCard 
				:product="product"
			/>
		</div>
	</div>
</template>
<script setup>
const props = defineProps({
	product: {
		type: Object,
		required: true
	}
})
const { product } = props
</script>
<template>
	<div>
		<h2>{{ product.title }}</h2>
		<p>{{ product.description }}</p>
		<NuxtLink :to="'/product/' + product.id" class="btn w-64 rounded-full">{{ product.id }}</NuxtLink>
	</div>
</template>
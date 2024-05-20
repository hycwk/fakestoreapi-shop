<script lang="ts" setup>
const props = defineProps<{width: string, height: string}>()
const { width, height } = props;
</script>
<template>
	<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" :height="height" :width="width" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112 184 256l144 144"></path></svg>
</template>
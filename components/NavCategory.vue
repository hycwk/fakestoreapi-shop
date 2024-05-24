<script setup lang="ts">
import type { CategoryAPIResponse } from '~/types/store';
import { LAYOUT } from '~/types/store';
const { data, pending, error, refresh } = await useFetch<CategoryAPIResponse>('/api/store/category');
const props = defineProps<{ layout: LAYOUT }>();
const { layout = LAYOUT.VERTICAL } = props;
const wrapperClasses = layout === LAYOUT.VERTICAL ? 'flex flex-col' : 'flex flex-row';
const buttonClasses = layout === LAYOUT.VERTICAL ? 'btn btn-link w-full' : 'btn btn-link';
</script>

<template>
  <div v-if="pending">Loading...</div>
  <div v-else-if="error">Error: {{ error }}</div>
  <div v-else-if="Array.isArray(data?.body)">
    <div :class="wrapperClasses">
      <NuxtLink :to="'/store/category/' + item" :class="buttonClasses" v-for="(item, index) in data.body" :key="index">{{ item }}</NuxtLink>
    </div>
  </div>
</template>

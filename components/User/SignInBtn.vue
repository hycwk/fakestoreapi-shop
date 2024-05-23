<!-- file: ~/pages/login.vue -->
<template>
  <button class="btn btn-outline w-full mt-4" @click="signIn(provider)">{{ label }}</button>
</template>

<script setup lang="ts">
const { signIn } = useAuth();
const props = defineProps<{ label: string; provider: string }>();
const { label, provider } = props;
</script>

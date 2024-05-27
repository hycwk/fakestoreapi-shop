<!-- file: ~/pages/login.vue -->
<template>
  <div>
    <p>Sign-In Options:</p>
    <div>
      <UserSignInBtn label="Auth0" provider="auth0" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { signIn } = useAuth();
</script>

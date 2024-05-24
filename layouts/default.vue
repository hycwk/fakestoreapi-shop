<script setup lang="ts">
import { LAYOUT } from '~/types/store';
</script>

<template>
  <!-- You can open the modal using ID.showModal() method -->
  <dialog id="my_modal_3" class="modal">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <UserSignIn />
    </div>
  </dialog>
  <div class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <div class="w-full flex justify-end py-2">
        <button class="btn btn-link flex items-center text-sm" onclick="my_modal_3.showModal()">
          Account
          <IconsUser width="16px" height="16px" class="mx-2" />
        </button>
        <button class="btn btn-link flex items-center text-sm">
          Cart
          <IconsCart width="16px" height="16px" class="mx-2" />
        </button>
      </div>
      <!-- Navbar -->
      <div class="w-full navbar bg-base-300">
        <div class="flex-none lg:hidden">
          <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
        </div>
        <div class="flex-1 px-2 mx-2">
          <IconsLogo />
        </div>
        <div class="flex-none hidden lg:block">
          <ul class="menu menu-horizontal">
            <!-- Navbar menu content here -->
            <NavCategory :layout="LAYOUT.HORIZONTAL" />
          </ul>
        </div>
      </div>
      <div class="mx-auto py-10 px-10">
        <slot />
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 min-h-full bg-base-200">
        <!-- Sidebar content here -->
        <NavCategory :layout="LAYOUT.VERTICAL" />
      </ul>
    </div>
  </div>
</template>

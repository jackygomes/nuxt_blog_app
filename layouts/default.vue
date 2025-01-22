<template>
  <div class="layoutContainer">
    <LayoutAppHeader />
    <v-container>
      <slot />
    </v-container>
    <LayoutAppFooter />
  </div>
</template>

<style>
html {
  font-family: "Inter";
  color: #222222;
}
</style>

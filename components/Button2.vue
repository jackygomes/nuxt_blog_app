<template>
  <!-- <div class="button px-2 py-3"</div> -->
  <v-btn class="button px-2 py-3" size="x-large" elevation="0" rounded="lg">{{
    props.name
  }}</v-btn>
</template>

<script setup>
const props = defineProps(["name"]);
</script>

<style lang="scss" scoped>
.button {
  color: rgba(34, 34, 34, 0.7);
  font-size: 16px;
  font-weight: 600;
  background-color: rgba(41, 107, 255, 0.05);
}
</style>

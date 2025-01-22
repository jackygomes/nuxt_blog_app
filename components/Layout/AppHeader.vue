<template>
  <div class="headerWrapper">
    <v-container class="d-flex justify-space-between">
      <div class="left d-flex justify-space-between">
        <nuxt-link to="/"
          ><img class="logo" src="/Logo.png" alt=""
        /></nuxt-link>
        <div class="contact pl-10">
          <img src="~/assets/images/icons/call.png" alt="" /><span
            >+1 (628) 587-3235</span
          >
        </div>
      </div>
      <div class="right d-flex justify-space-between align-center ga-4">
        <h3>Top Vendors, Apply Now!</h3>
        <div
          class="menu d-flex justify-space-between align-center py-2 px-4 ga-4"
        >
          <img
            class="menu_icon"
            src="~/assets/images/icons/menu_icon.png"
            alt=""
          />
          <img class="avatar" src="~/assets/images/icons/avatar.png" alt="" />
        </div>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  ogImage: "/Logo.png",
});
</script>

<style lang="scss" scoped>
.headerWrapper {
  box-shadow: 0px 1px 4px 0px rgba(12, 12, 13, 0.05);
  box-shadow: 0px 1px 4px 0px rgba(12, 12, 13, 0.1);

  .left {
    .logo {
      width: 107px;
    }
    .contact {
      display: flex;
      align-items: center;
      font-size: 14px;
      img {
        margin-right: 10px;
        width: 20px;
      }
    }
  }
  .right {
    h3 {
      font-size: 14px;
      font-weight: 600;
    }
    .menu {
      border-radius: 40px;
      background-color: rgba(41, 107, 255, 0.05);
      .menu_icon {
        width: 24px;
      }
      .avatar {
        width: 32px;
      }
    }
  }
}
</style>

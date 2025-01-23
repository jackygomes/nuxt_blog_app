<template>
  <div class="wrapper mt-8 pt-12 pb-8">
    <v-container>
      <div class="d-flex justify-space-between">
        <div cols="8">
          <div class="logo">
            <img src="/logo.png" alt="" />
          </div>
          <div class="menus">
            <v-list class="d-flex justify-start" bg-color="transparent">
              <v-list-item
                v-for="(item, i) in menus"
                :key="i"
                class="px-0 mr-6 menuItem"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </div>
        </div>
        <div class="contactSection">
          <p class="title pb-3">Contacts</p>
          <div class="contact pb-3">
            <img src="~/assets/images/icons/envelope.png" alt="" /><span
              >contact@eventsinminutes.com</span
            >
          </div>
          <div class="contact">
            <img src="~/assets/images/icons/call.png" alt="" /><span
              >+1 (628) 587-3235</span
            >
          </div>
        </div>
      </div>
      <v-divider :thickness="1" class="mt-8 mb-7" color="#6A6A6A"></v-divider>
    </v-container>
  </div>
</template>

<script setup>
const menus = [
  {
    title: "About Us",
    path: "/",
  },
  {
    title: "Corporate Events",
    path: "/",
  },
  {
    title: "Personal Events",
    path: "/",
  },
  {
    title: "List Your Service",
    path: "/",
  },
  {
    title: "How it Works",
    path: "/",
  },
];
</script>

<style lang="scss" scoped>
.wrapper {
  border-top: 1px solid rgba(106, 106, 106, 0.1);
  background-color: rgba(249, 249, 249, 1);

  .logo {
    img {
      width: 107px;
    }
  }

  .menus {
    .menuItem {
      cursor: pointer;
    }
  }

  .contactSection {
    font-size: 14px;
    .title {
      font-weight: 600;
      color: rgba(34, 34, 34, 1);
    }
    .contact {
      display: flex;
      align-items: center;
      img {
        width: 20px;
        margin-right: 8px;
      }
    }
  }
}
</style>

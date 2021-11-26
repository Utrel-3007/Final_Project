<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-info">
      <a href="/info" class="navbar-brand fas fa-cat">Share Anime</a>

      <div v-if="currentUser">
        <li class="nav-item navbar-nav mr-auto">
          <router-link to="/add" class="nav-link">
            Thêm phim <i></i>
          </router-link>
        </li>
      </div>
      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/register" class="nav-link"> Đăng ký </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link"> Đăng nhập </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="logout"> Đăng xuất </a>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters({
      currentUser: "loggedInUser",
    }),
  },
  methods: {
    ...mapMutations(["initAuthState"]),
    logout() {
      this.$store.commit("logout");
      this.$router.push("info");
    },
  },
  mounted() {
    this.initAuthState();
  },
};
</script>
<style>
body {
  background-image: url(https://wallpaperbat.com/img/208192-anime-4k-wallpaper-for-your-desktop-or-mobile-screen-free.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button :disabled="isLoading" @click="getNews">
      Get News
    </button>
    {{ news }}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  computed: mapState({
    news: (state) => state.news.news,
    isLoading: (state) => state.news.isLoading,
  }),
  methods: mapActions("news", ["getNews"]),
};
</script>

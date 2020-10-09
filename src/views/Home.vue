<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="getNews">Get News</button>
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
    news: (state) => state.news.newItems,
  }),
  methods: mapActions("news", ["getNews"]),
};
</script>

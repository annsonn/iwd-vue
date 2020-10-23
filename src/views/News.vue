<template>
  <div class="news">
    <h1>News Updates</h1>
    <div v-if="isLoading">
      <span uk-spinner="ratio: 4.5"></span>
    </div>
    <div v-if="!isLoading" class="uk-child-width-1-3@m uk-grid-small" uk-grid>
      <div
        class="uk-card uk-card-hover uk-card-body uk-card-default"
        v-for="(newsItem, index) in newItems"
        :key="index"
      >
        <h3 class="uk-card-title">{{ newsItem.text }}</h3>
        <a v-bind:href="newsItem.url">Here</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "News",
  mounted() {
    this.getNews();
  },
  computed: {
    ...mapGetters("news", ["newItems", "isLoading"]),
  },
  methods: { ...mapActions("news", ["getNews"]) },
};
</script>

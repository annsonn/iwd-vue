import newsApi from "../apis/News.api";

const state = () => ({
  isLoading: false,
  news: [],
});

// getters aka React Selecters
const getters = {
  newItems: (state) => state.news,
  isLoading: (state) => state.isLoading,
};

// actions aka React-Saga + React Action
const actions = {
  async getNews({ commit }) {
    commit("setLoading", true);
    try {
      const news = await newsApi.fetchNews();
      commit("setNews", news);
    } catch (e) {
      console.error("Error loading news");
    }
    commit("setLoading", false);
  },
};

// mutations aka React Reducer
const mutations = {
  setLoading(state, isLoading) {
    state.isLoading = isLoading;
  },
  setNews(state, news) {
    state.news = news;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

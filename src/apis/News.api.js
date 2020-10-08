const fetchNews = async () =>
  await fetch("https://us-central1-iwd-sandbox.cloudfunctions.net/news");

export default {
  fetchNews,
};

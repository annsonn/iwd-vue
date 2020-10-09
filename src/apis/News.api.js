const fetchNews = async () => {
  const response = await fetch(
    "https://us-central1-iwd-sandbox.cloudfunctions.net/news"
  );
  console.log("fetchNews", response);
  return response;
};

export default {
  fetchNews,
};

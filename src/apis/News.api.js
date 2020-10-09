import Axios from "axios";

const fetchNews = async () => {
  const response = await Axios.get(
    "https://us-central1-iwd-sandbox.cloudfunctions.net/news"
  );
  return response.data;
};

export default {
  fetchNews,
};

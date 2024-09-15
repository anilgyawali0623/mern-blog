import axios from "axios";

const BASE_URL = "https://newsapi.org/v2";
const NEWS_API_TOKEN = import.meta.env.VITE_APP_NEWS_TOKEN;

const headers = {
  Authorization: NEWS_API_TOKEN,
};

export const fetchDataFromApi = async (url, params = {}) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const axios = require("axios");
const BASE_URL = "https://pixabay.com/api/";
const PER_PAGE = 12;
const KEY = "22453348-6986f932e651dfab56ec0e491";

function fetchImg(quary, page) {
  const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${quary}&page=${page}&per_page=${PER_PAGE}&key=${KEY}`;
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`Нет картинок с названием ${quary}`));
    })
    .then((response) => response.hits);
}

function fechAxiosImg(quary, page) {
  const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${quary}&page=${page}&per_page=${PER_PAGE}&key=${KEY}`;
  return axios.get(url).then((response) => response.data.hits);
}

const api = { fetchImg, fechAxiosImg };

export default api;

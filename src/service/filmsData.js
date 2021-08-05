import axios from "axios";

const API_KEY = "e8e227add2a2e5c168f7c3845928d8db";
const API_URL = "https://api.themoviedb.org/3/";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

export function getAllMovies() {
  return axios
    .get(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`)
    .then((response) => response.data)
    .catch((err) => console.log(err));
}

export function getMoviesByPage(page) {
  return axios
    .get(
      `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    )
    .then((response) => response.data)
    .catch((err) => console.log(err));
}

export function getMovieById(id) {
  return axios
    .get(`${API_URL}movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export function getGenres() {
  return axios
    .get(`${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

export function getImgUrl(path) {
  return `${IMG_URL}${path}`;
}

export function getMovieByQuery(query) {
  return axios
    .get(`${API_URL}search/movie?api_key=${API_KEY}&query=${query}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

const baseUrl = "https://api.themoviedb.org/3/";
const API_KEY = "6fab25ff0caf268eac25ac765ffc2f5a";

export const apiConfig = {
  baseUrl: baseUrl,
  API_KEY: API_KEY,
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export const category = {
  movie: "movie",
  tv: "tv",
};

export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};

export const tmdbApi = {
  getMoviesList: async (type, params) => {
    const url = `${baseUrl}movie/${movieType[type]}?api_key=${API_KEY}${
      params ? `&${params}` : ""
    }`;
    return fetch(url).then((response) => response.json());
  },
  getTvList: async (type, params) => {
    const url = `${baseUrl}tv/${tvType[type]}?api_key=${API_KEY}${
      params ? `&${params}` : ""
    }`;
    return fetch(url).then((response) => response.json());
  },
  getVideos: async (cate, id, params) => {
    const url = `${baseUrl}${category[cate]}/${id}/videos?api_key=${API_KEY}${
      params ? `&${params}` : ""
    }`;
    return fetch(url).then((response) => response.json());
  },
  search: async (cate, params) => {
    const url = `${baseUrl}search/${category[cate]}?api_key=${API_KEY}${
      params ? `&${params}` : ""
    }`;
    return fetch(url).then((response) => response.json());
  },
  detail: async (cate, id, params) => {
    const url = `${baseUrl}${category[cate]}/${id}?api_key=${API_KEY}${
      params ? `&${params}` : ""
    }`;
    return fetch(url).then((response) => response.json());
  },
  credits: async (cate, id) => {
    const url = `${baseUrl}${category[cate]}/${id}/credits?api_key=${API_KEY}`;
    return fetch(url).then((response) => response.json());
  },
  similar: async (cate, id) => {
    const url = `${baseUrl}${category[cate]}/${id}/similar?api_key=${API_KEY}`;
    return fetch(url).then((response) => response.json());
  },
};

export default tmdbApi;

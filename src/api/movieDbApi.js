// export { axiosClient } from "./axiosClient";

export const category = {
  movie: "movie",
  tv: "tv",
};

export const tvType = {
  popular: "popular",
  topRated: "topRated",
  onTheAir: "onTheAir",
};

export const movieDbApi = {
  getMovieList: (type, params) => {
    const url = "movie/" + movieType[type];
    return axiosClient.get(url, params);
  },
  getTvList: (type, params) => {
    const url = "tv/" + tvType[type];
    return axiosClient.get(url, params);
  },
  getVideos: (cat, id) => {
    const url = category[cat] + "/" + id + "/videos";
    return axiosClient.get(url, { params: {} });
  },
  search: (cat, params) => {
    const url = "search/" + category[cat];
    return axiosClient.get(url, params);
  },
  detail: (cat, id, params) => {
    const url = category[cat] + "/" + id;
    return axiosClient.get(url, params);
  },
  credits: (cat, id) => {
    const url = category[cat] + "/" + id + "/credits";
    return axiosClient.get(url, { params: {} });
  },
  similar: (cat, id) => {
    const url = category[cat] + "/" + id + "/similar";
    return axiosClient.get(url, { params: {} });
  },
};

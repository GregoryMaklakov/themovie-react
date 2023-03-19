export const movieApi = {
  baseURL: "https://api.themoviedb.org/3/",
  apiKey: "6fab25ff0caf268eac25ac765ffc2f5a",
  originalImage: (imagePath) =>
    `https://image.tmdb.org/t/p/original/${imagePath}`,
  w500lImage: (imagePath) => `https://image.tmdb.org/t/p/w500/${imagePath}`,
};

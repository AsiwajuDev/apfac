import axios from "axios";

const api = axios.create({
  baseURL: "https://test.usapfac.org/wp-json/wp/v2",
});

// export const insertMovie = (payload) => api.post(`/movie`, payload);
export const getAllMovies = () => api.get(`/pages/2`);
// export const updateMovieById = (id, payload) =>
//   api.put(`/movie/${id}`, payload);
// export const deleteMovieById = (id) => api.delete(`/movie/${id}`);
// export const getMovieById = (id) => api.get(`/movie/${id}`);

const apis = {
  //   insertMovie,
  getAllMovies,
  //   updateMovieById,
  //   deleteMovieById,
  //   getMovieById,
};

export default apis;

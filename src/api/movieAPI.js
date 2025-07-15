import axios from "axios";

export default async function fetchMovies() {
  const response = await axios.get(process.env.REACT_APP_MOVIES_API_URL);
  const movies = response.data.sort((a, b) => b.rating - a.rating);
  return movies;
}

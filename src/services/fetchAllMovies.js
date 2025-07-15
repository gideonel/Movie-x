import { movieImages } from "../api/movies";  // your static array
import { extractImdbIdFromUrl } from "../api/utils";
import { fetchMovieDetailsById } from "../api/omdbAPI";

export const fetchAllMoviesDetails = async () => {
  const moviesDetails = [];

  for (const movie of movieImages) {
    const imdbId = extractImdbIdFromUrl(movie.imdb_url);
    if (imdbId) {
      const details = await fetchMovieDetailsById(imdbId);
      if (details) {
        moviesDetails.push(details);
      }
    } else {
      console.warn(`Invalid imdb_url for movie: ${movie.movie}`);
    }
  }

  return moviesDetails;
};

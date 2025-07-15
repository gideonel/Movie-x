import axios from "axios";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

export const fetchMovieDetailsById = async (imdbId) => {
  if (!imdbId) {
    console.error("fetchMovieDetailsById called without imdbId!");
    return null;
  }

  try {
    const BASE_URL = "https://www.omdbapi.com/";

    const response = await axios.get(BASE_URL, {
      params: {
        i: imdbId,
        apikey: API_KEY,
      },
    });

    if (response.data.Response === "True") {
      return response.data;
    } else {
      throw new Error(response.data.Error);
    }
  } catch (error) {
    console.error("OMDb fetch error:", error.message);
    return null;
  }
};

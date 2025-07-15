// src/components/SimilarMovies.jsx
import React, { useEffect, useState } from "react";
import { fetchMovieDetailsById } from "../api/omdbAPI";
import { Link } from "react-router-dom";

const SimilarMovies = ({ currentMovie }) => {
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    if (!currentMovie) return;

    const fetchSimilar = async () => {
      try {
        const genre = currentMovie.Genre?.split(",")[0].trim();
        const allMovieIds = [
          "tt0111161", "tt0068646", "tt0071562", "tt0468569", "tt0050083", 
          "tt0108052", "tt0167260", "tt0137523", "tt0120737", "tt0109830"
        ];

        const promises = allMovieIds
          .filter(id => id !== currentMovie.imdbID)
          .map(id => fetchMovieDetailsById(id));

        const movies = await Promise.all(promises);
        const similar = movies.filter(
          (movie) => movie.Genre?.includes(genre)
        );

        setSimilarMovies(similar.slice(0, 4)); // Show 4 similar movies
      } catch (err) {
        console.error("Failed to fetch similar movies", err);
      }
    };

    fetchSimilar();
  }, [currentMovie]);

  if (!similarMovies.length) return null;

  return (
    <div style={{ marginTop: "3rem" }}>
      <h2>Similar Movies</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {similarMovies.map((movie) => (
          <Link
            key={movie.imdbID}
            to={`/movie/${movie.imdbID}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div style={{ width: "150px", textAlign: "center" }}>
              <img
                src={movie.Poster}
                alt={movie.Title}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <p style={{ marginTop: "0.5rem", fontWeight: "bold" }}>{movie.Title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimilarMovies;

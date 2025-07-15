// src/pages/FavoriteMovies.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../redux/favoritesSlice";
import { Link } from "react-router-dom";

const FavoriteMovies = () => {
  // const favoriteMovies = useSelector((state) => state.favoriteMovies);
  const favoriteMovies = useSelector((state) => state.favorites.favoriteMovies || []);

  const dispatch = useDispatch();

  if (!favoriteMovies.length) {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>Favorite Movies</h1>
        <p>Your saved favorite movies will appear here.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Your Favorite Movies</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
        {favoriteMovies.map((movie) => (
          <div
            key={movie.imdbID}
            style={{
              width: "200px",
              border: "1px solid #ccc",
              padding: "1rem",
              borderRadius: "10px",
              textAlign: "center",
              background: "#f9f9f9",
            }}
          >
            <Link to={`/movie/${movie.imdbID}`} style={{ textDecoration: "none", color: "inherit" }}>
              <img
                src={movie.Poster}
                alt={movie.Title}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h4>{movie.Title}</h4>
              <p>{movie.Year}</p>
            </Link>
            <button
              onClick={() => dispatch(removeFavorite(movie.imdbID))}
              style={{
                marginTop: "0.5rem",
                background: "#e74c3c",
                color: "#fff",
                border: "none",
                padding: "0.4rem 0.8rem",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteMovies;

import React from "react";
import MovieCards from "../components/MovieCards";

const MovieList = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center" }} className="text-3xl p-3 m-3">Top Rated Movies</h1>
      <MovieCards />
    </div>
  );
};

export default MovieList;

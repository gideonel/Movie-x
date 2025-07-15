import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetailsById } from "../api/omdbAPI";
import Loading from "../components/Loading";
import SimilarMovies from "../components/SimilarMovies";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetchMovieDetailsById(imdbID);
      setMovie(data);
      setLoading(false);
    };
    fetchDetails();
  }, [imdbID]);

  if (loading) {
    return <Loading />;
  }
  
  if (!movie) return <div style={{ padding: "2rem", textAlign: "center" }}>Movie not found.</div>;

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "900px",
        margin: "2rem auto",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        color: "#333",
      }}
    >
      <h1 style={{ fontWeight: "700", marginBottom: "0.2rem" }}>
        {movie.Title} <span style={{ fontWeight: "400", color: "#666" }}>({movie.Year})</span>
      </h1>
      <div style={{ display: "flex", gap: "2rem", marginTop: "1rem", flexWrap: "wrap" }}>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
          alt={movie.Title}
          style={{
            width: "300px",
            borderRadius: "10px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            flexShrink: 0,
          }}
        />

        <div style={{ flex: "1 1 400px" }}>
          <p><strong>Rated:</strong> {movie.Rated}</p>
          <p><strong>Released:</strong> {movie.Released}</p>
          <p><strong>Runtime:</strong> {movie.Runtime}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Writer:</strong> {movie.Writer}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p style={{ marginTop: "1rem" }}><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>Language:</strong> {movie.Language}</p>
          <p><strong>Country:</strong> {movie.Country}</p>
          <p><strong>Awards:</strong> {movie.Awards}</p>

          <div style={{ marginTop: "1rem" }}>
            <strong>Ratings:</strong>
            <ul style={{ paddingLeft: "1.2rem", marginTop: "0.3rem" }}>
              {movie.Ratings && movie.Ratings.length > 0 ? (
                movie.Ratings.map((rating) => (
                  <li key={rating.Source} style={{ marginBottom: "0.2rem" }}>
                    <strong>{rating.Source}:</strong> {rating.Value}
                  </li>
                ))
              ) : (
                <li>No ratings available</li>
              )}
            </ul>
          </div>

          <p><strong>Metascore:</strong> {movie.Metascore}</p>
          <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
          <p><strong>IMDb Votes:</strong> {movie.imdbVotes}</p>
          <p><strong>Box Office:</strong> {movie.BoxOffice}</p>
          <p><strong>DVD Release:</strong> {movie.DVD}</p>
          <p><strong>Production:</strong> {movie.Production}</p>

          {movie.Website && movie.Website !== "N/A" && (
            <p>
              <strong>Website:</strong>{" "}
              <a
                href={movie.Website}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0077cc", textDecoration: "none" }}
                onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
                onMouseOut={(e) => (e.target.style.textDecoration = "none")}
              >
                {movie.Website}
              </a>
            </p>
          )}
        </div>
      </div>
      <SimilarMovies currentMovie={movie} />
    </div>
  );
};

export default MovieDetail;

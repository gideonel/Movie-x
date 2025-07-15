import React, { useEffect, useState } from "react";
import { movieImages } from "../api/movies";
import { extractImdbIdFromUrl } from "../api/utils";
import { fetchMovieDetailsById } from "../api/omdbAPI";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';
import "./MovieCards.css";
import Loading from "../components/Loading";
import MovieFilters from "../components/MovieFilters";  // Import the filter

const MovieCards = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [year, setYear] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [rating, setRating] = useState(0);

  const dispatch = useDispatch();
  const favoriteMovies = useSelector((state) => state.favorites?.favoriteMovies || []);

  // Extract genres from movies dynamically
  const genres = React.useMemo(() => {
    const genreSet = new Set();
    movies.forEach(movie => {
      if (movie.Genre) {
        movie.Genre.split(", ").forEach(g => genreSet.add(g));
      }
    });
    return Array.from(genreSet).sort();
  }, [movies]);

  const filteredMovies = movies.filter((movie) => {
    const matchYear = year ? movie.Year === year.toString() : true;

    const movieGenres = movie.Genre ? movie.Genre.split(", ").map(g => g.trim()) : [];
    const matchGenres = selectedGenres.length > 0
      ? selectedGenres.every((selected) => movieGenres.includes(selected))
      : true;

    const matchRating = rating ? parseFloat(movie.imdbRating) >= parseFloat(rating) : true;

    return matchYear && matchGenres && matchRating;
  });

  const years = React.useMemo(() => {
  const yearSet = new Set();
  movies.forEach(movie => {
    if (movie.Year) {
      yearSet.add(movie.Year);
    }
  });
  return Array.from(yearSet).sort((a, b) => b - a); // Sort descending (latest first)
}, [movies]);



  useEffect(() => {
    const fetchAll = async () => {
      try {
        const fetchPromises = movieImages.map(async (movie) => {
          const imdbId = extractImdbIdFromUrl(movie.imdb_url);
          if (imdbId) {
            const details = await fetchMovieDetailsById(imdbId);
            return details ? { ...movie, ...details } : null;
          }
          return null;
        });

        const results = await Promise.all(fetchPromises);

        // ✅ Remove duplicates based on imdbID
        const uniqueMoviesMap = new Map();
        results.filter(Boolean).forEach((movie) => {
          if (!uniqueMoviesMap.has(movie.imdbID)) {
            uniqueMoviesMap.set(movie.imdbID, movie);
          }
        });

        setMovies(Array.from(uniqueMoviesMap.values()));
      } catch (err) {
        console.error("Error loading movies:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);


  if (loading) {
    return <Loading />;
  }

  const handleFavoriteClick = (movie, isFavorite, e) => {
    e.preventDefault(); // Prevent navigation due to <Link>
    e.stopPropagation(); // Prevent bubbling
    if (isFavorite) {
      dispatch(removeFavorite(movie.imdbID));
    } else {
      dispatch(addFavorite(movie));
    }
  };


  return (
    <>
      <MovieFilters
  years={years}            // pass dynamic years here
  year={year}
  setYear={setYear}
  genres={genres}
  selectedGenres={selectedGenres}
  setSelectedGenres={setSelectedGenres}
  rating={rating}
  setRating={setRating}
/>

      <div className="movie-grid">
        {/* {movies.map((movie) => { */}
        {filteredMovies.map((movie) => {
          // const isFavorite = favoriteMovies.includes(movie.imdbID);
          const isFavorite = favoriteMovies.some(fav => fav.imdbID === movie.imdbID);


          return (
            <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`} className="movie-card-link">
              <div className="movie-card">
                <img
                  src={movie.Poster !== "N/A" ? movie.Poster : movie.img_url}
                  alt={movie.Title}
                />
                <div className="movie-info">
                  <h3>{movie.Title}</h3>
                  <p><strong>Genre:</strong> {movie.Genre}</p>
                  <p><strong>Year:</strong> {movie.Year}</p>
                  <p><strong>Rating:</strong> {movie.imdbRating}</p>
                  <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    View on IMDb
                  </a>

                  {/* Favorite star */}
                  <button
                    className={`favorite-btn ${isFavorite ? "favorite" : ""}`}
                    onClick={(e) => handleFavoriteClick(movie, isFavorite, e)}
                    aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                  >
                    {isFavorite ? "❤️" : "🤍"}
                  </button>

                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default MovieCards;

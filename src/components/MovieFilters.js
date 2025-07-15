// src/components/MovieFilters.jsx
import React from "react";
import Select from "react-select";

const MovieFilters = ({ years, year, setYear, genres, selectedGenres, setSelectedGenres, rating, setRating }) => {
  const genreOptions = genres.map((genre) => ({ label: genre, value: genre }));

  return (
    <div style={styles.container}>
      {/* Year Filter */}
      <div style={styles.filterGroup}>
        <label htmlFor="year">Year:</label>
        <select value={year} onChange={e => setYear(e.target.value)}>
        <option value="">All Years</option>
        {years.map((y) => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>
      </div>

      {/* Genre Multi-Select */}
      <div style={styles.filterGroup}>
        <label htmlFor="genres">Genres:</label>
        <Select
          id="genres"
          options={genreOptions}
          isMulti
          value={genreOptions.filter((opt) => selectedGenres.includes(opt.value))}
          onChange={(selected) => setSelectedGenres(selected.map((s) => s.value))}
          placeholder="Select genres..."
        />
      </div>

      {/* Rating Slider */}
      <div style={styles.filterGroup}>
        <label htmlFor="rating">Min Rating: {rating || 0}</label>
        <input
          type="range"
          id="rating"
          min="0"
          max="10"
          step="0.1"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    padding: "1rem",
    background: "#f9f9f9",
    borderRadius: "8px",
    marginBottom: "1rem",
  },
  filterGroup: {
    flex: "1 1 250px",
    display: "flex",
    flexDirection: "column",
  },
};

export default MovieFilters;

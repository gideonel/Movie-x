import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favoriteMovies: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const movie = action.payload;
      const exists = state.favoriteMovies.some(m => m.imdbID === movie.imdbID);
      if (!exists) {
        state.favoriteMovies.push(movie);
      }
    },
    removeFavorite: (state, action) => {
      const imdbID = action.payload;
      state.favoriteMovies = state.favoriteMovies.filter(
        (movie) => movie.imdbID !== imdbID
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieList from "./pages/MovieList";
import FavoriteMovies from "./pages/FavoriteMovies";
import MovieDetail from "./pages/MovieDetail";
import Layout from "./Layout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/favorite",
        element: <FavoriteMovies />,
      },
      {
        path: "/movie",
        element: <MovieList />,
      },
      {
        path: "/movie/:imdbID",
        element: <MovieDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

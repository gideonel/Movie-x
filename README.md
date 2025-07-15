# Movie-X - Your Ultimate Movie Companion

Welcome to Movie-X, a responsive React application designed to enhance your movie-watching experience. This project allows users to explore a vast collection of movies, mark their favorites, and easily navigate between a list of all movies and a list of their favorites.

## Table of Contents

- [Objective](#objective)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Data Scraping](#data-scraping)
- [Folder Structure](#folder-structure)
- [Contact](#contact)

## Objective

The objective of Movie-X is to create a user-friendly platform where users can:

1. Browse and view a list of movies.
2. Mark movies as favorites.
3. View their favorite movies on a separate page.

## Features

- **Movie List Page:** Displays a sorted list of movies fetched from an API, with options to mark/unmark favorites.
- **Favorite Movies Page:** Displays a list of favorite movies in the order they were added.
- **Responsive Design:** Ensures a seamless experience across desktop, tablet, and mobile devices.
- **Smooth Navigation:** Provides easy navigation between the movie list and favorite movies pages.

**Deployed Link:** _[Live Site URL](https://movie-x-live.vercel.app/)_


## Installation

To run Movie-X on your local system, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gideonel/Movie-x.git
   cd Movie-X
   ```
2. **Install the dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the necessary IDs 
 
4. **Run the application:**
   ```bash
   npm start
   ```
5. **Open your browser:**
   Go to http://localhost:3000 to view the application.

## Usage

- **Movie List Page:** Browse the list of movies sorted by rating. Click the favorite icon to add/remove movies from your favorites list. Click on a movie card to visit its IMDb page.
- **Favorite Movies Page:** View all the movies you have marked as favorites. The movies appear in the order they were added.

## Technologies Used

- **React:** For building the user interface.
- **Redux:** For state management.
- **CSS (Tailwind CSS/Custom):** For responsive design.
- **BeautifulSoup:** For scraping movie images from IMDb.

## Data Scraping

Due to faulty image links in the provided API, BeautifulSoup was used to scrape movie images from the IMDb website. The scraped images, was stored in a movies.js file, which is used to populate the movie's images in the application.

## Folder Structure

The folder structure of the project is as follows:

```bash
movies-app/
│
├── public/
│ ├── favicon.png
│ ├── index.html
│ ├── manifest.json
│ └── robots.txt
│
├── src/
│ ├── api/
│ │ ├── movieApi.js
│ │ └── movies.js
│ │
│ ├── components/
│ │ ├── MovieCard.js
│ │ └── Navbar.js
│ │
│ ├── pages/
│ │ ├── FavoriteMovies.js
│ │ └── MovieList.js
│ │
│ ├── redux/
│ │ ├── slices/
│ │ │ ├── favoriteSlice.js
│ │ │ └── movieSlice.js
│ │ └── store.js
│ │
│ ├── data/
│ │ └── movies.js
│ │
│ ├── App.js
│ ├── App.test.js
│ ├── Layout.js
│ ├── index.css
│ ├── index.js
│ └── setupTests.js
│
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── postcss.config.json
├── tailwind.config.json
└── README.md
```

## Contact

For any further clarification or issues, feel free to reach out:

- **[Lord Gideonel Robert](https://ng.linkedin.com/in/lordgideon-el)**
- **Email:** lordgideonel@gmail.com

Thank you for using Movie-X! Enjoy your movie-watching experience.

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders landing page with title and buttons', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/movie-x/i)).toBeInTheDocument();
  expect(screen.getByText(/browse movies/i)).toBeInTheDocument();
  expect(screen.getByText(/view favorites/i)).toBeInTheDocument();
});

test('navigates to /movie when "Browse Movies" is clicked', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const browseBtn = screen.getByText(/browse movies/i);
  fireEvent.click(browseBtn);

  // Expect filter section or movie grid to be present
  expect(screen.getByText(/filter/i)).toBeInTheDocument();
});

import React from "react";
import MovieCard from "./MovieCard";

function App() {
  // Define movie details using constants
  const movie = {
    title: "Mad Max",
    posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1OTYGz2GDC1XjA9tirh_1Rd571yE5UFIYsmZp4nACMd7CCHM",
    genres: ["Action", "Adventure", "Science Fiction", "Thriller"]
  };

  // Return the JSX structure of the App component
  return (
    <div className="app">
      {/* Render the MovieCard component with the provided data */}
      <MovieCard {...movie} />
    </div>
  );
}

export default App;

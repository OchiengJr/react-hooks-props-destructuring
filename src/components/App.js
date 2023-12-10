// Import React and the MovieCard component
import React from "react";
import MovieCard from "./MovieCard";

// Define the App component
function App() {
  // Define movie details using constants
  const title = "Mad Max";
  const posterURL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1OTYGz2GDC1XjA9tirh_1Rd571yE5UFIYsmZp4nACMd7CCHM";
  const genresArr = ["Action", "Adventure", "Science Fiction", "Thriller"];

  // Return the JSX structure of the App component
  return (
    <div className="App">
      {/* Render the MovieCard component with the provided data */}
      <MovieCard title={title} genres={genresArr} posterURL={posterURL} />
    </div>
  );
}

// Export the App component
export default App;


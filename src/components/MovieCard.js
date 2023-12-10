import React from "react";

// Define the MovieCard component
function MovieCard({ title, posterSrc, genres }) {
  return (
    <div className="movie-card">
      {/* Display the movie poster */}
      <img src={posterSrc} alt={title} />

      {/* Display the movie title */}
      <h2>{title}</h2>

      {/* Display the movie genres */}
      <small>{genres.join(", ")}</small>
    </div>
  );
}

// Set default values for props to handle cases where they are not provided
MovieCard.defaultProps = {
  posterSrc: "https://m.media-amazon.com/images/M/MV5BOTJjNzczMTUtNzc5MC00ODk0LWEwYjgtNzdiOTEyZmQxNzhmXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_UY268_CR1,0,182,268_AL_.jpg",
};

// Export the MovieCard component
export default MovieCard;


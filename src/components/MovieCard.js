import React from "react";
import PropTypes from "prop-types";

function MovieCard({ title, posterSrc, genres }) {
  return (
    <div className="movie-card">
      {/* Display the movie poster */}
      <img className="movie-poster" src={posterSrc} alt={title} />

      {/* Display the movie title */}
      <h2 className="movie-title">{title}</h2>

      {/* Display the movie genres */}
      <small className="movie-genres">{genres.join(", ")}</small>
    </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  posterSrc: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

MovieCard.defaultProps = {
  posterSrc: "https://via.placeholder.com/150",
};

export default MovieCard;

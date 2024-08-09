import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MovieDetails.css'; // Import the CSS file

const MovieDetails = ({ movieId, onClose }) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
          params: {
            api_key: '135e136141b46b86fb82c13cc27be47b', // Replace with your TMDb API key
            language: 'en-US',
          },
        });
        setMovie(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error.message}</div>;

  if (!movie) return null;

  return (
    <div className="movie-details">
      <button onClick={onClose} className="close-button">Close</button>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={300}
      />
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Overview:</strong> {movie.overview}</p>
      <p><strong>Rating:</strong> {movie.vote_average} / 10</p>
    </div>
  );
};

export default MovieDetails;

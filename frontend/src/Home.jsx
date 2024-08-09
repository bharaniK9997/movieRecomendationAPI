import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css'; // Import the CSS file
import MovieDetails from './MovieDetails'; // Import the MovieDetails component

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
          params: {
            api_key: '135e136141b46b86fb82c13cc27be47b', // Replace with your TMDb API key
            language: 'en-US',
            page: 1,
          },
        });
        setMovies(response.data.results);
        setFilteredMovies(response.data.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [searchTerm, movies]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleMovieClick = (id) => {
    setSelectedMovieId(id);
  };

  const handleCloseDetails = () => {
    setSelectedMovieId(null);
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error.message}</div>;

  return (
    <div className="container">
      {selectedMovieId && <MovieDetails movieId={selectedMovieId} onClose={handleCloseDetails} />}
      {!selectedMovieId && (
        <>
          <h1>Popular Movies</h1>
          <input
            type="text"
            placeholder="Search for movies..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          <ul>
            {filteredMovies.length > 0 ? (
              filteredMovies.map(movie => (
                <li key={movie.id} onClick={() => handleMovieClick(movie.id)}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    width={200}
                  />
                  <div>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                  </div>
                </li>
              ))
            ) : (
              <p>No movies found</p>
            )}
          </ul>
        </>
      )}
    </div>
  );
};

export default Home;

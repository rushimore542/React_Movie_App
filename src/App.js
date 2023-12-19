import React, { useEffect, useState } from "react";
import './App.css';
import MovieCard from "./MovieCard";
import Searchicon from './search.svg';
const API_URL=' http://www.omdbapi.com/?i=tt3896198&apikey=161b7bf7';
 const App=()=>{
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      searchMovies("joker");
    }, []);
  
    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
  
      setMovies(data.Search);
    };
    return(
        <div className="app">
      <h1>Moviemarathon</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={Searchicon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
    ); 
};
export default App;
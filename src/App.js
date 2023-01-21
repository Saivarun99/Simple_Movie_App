import React, {useEffect, useState} from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
//a9e8c9da

const API_URL = 'https://www.omdbapi.com?apikey=a9e8c9da'

// const movie = {
//     "Title": "The Prestige",
//     "Year": "2006",
//     "imdbID": "tt0482571",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_SX300.jpg"
// }

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search)

    }
   
    useEffect(() => {
        searchMovies('prestige')

    }, []);
    return (
        <div className="app">
            <h1>KSV MOVIES</h1>

            <div className="search">
                <input 
                placeholder="search for movies"
                value = {searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                //onClick={() => placeholder}
                />
                <img
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                ? (
                 <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie = {movie}/>
                    ))}
                 </div>
                ) :(
                   <div className="empty">

                    <h2>No moives found</h2> 

                   </div> 
                )
            }

        </div>
    );
}


export default App; 









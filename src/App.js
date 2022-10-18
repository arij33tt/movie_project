
import {useEffect, useState} from 'react'
import './App.css';
import MovieCard from './MovieCard.jsx'

import SearchIcon from './search.svg'
const API_URL = 'http://www.omdbapi.com?apikey=caa9a87e'

// const movie1={
//     "Title": "Spider-Man: Homecoming",
//     "Year": "2017",
//     "imdbID": "tt2250912",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg"
// }

const App = () => {
const [movies,setMovies]= useState([]);
const[searchTerm,setSearchTerm]=useState('');
const searchMovies = async (title)=>{
const response =await fetch(`${API_URL}&s=${title}`)
    
    const data = await response.json()
    setMovies(data.Search);
}
    useEffect(()=>{
searchMovies('')
    },[]);
  return (
   <div className='app'>
<h1>Movies World</h1>

<div className='search'>
    <input placeholder='Search for movies' value={searchTerm}onChange={(e)=>setSearchTerm(e.target.value)}
    />
    <img src={SearchIcon}
    alt="search"
    onClick={()=>searchMovies(searchTerm)}
    />
</div>
{movies?.length> 0
    ?(<div className='container'>
{movies.map((movie)=>(
    <MovieCard movie={movie}/>
))}
  </div>): (<div className='empty'>
    <h2 >No movies found</h2>
  </div>)
}
</div>

  );
}

export default App
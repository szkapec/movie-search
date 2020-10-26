import React, {useEffect, useState} from 'react';
import Movies from './Movies';
const featuredApi = `https://api.themoviedb.org/3/discover/movie?/sort_by=popularity.desc&api_key=b90fbbfe5fd1089b1a1d3b945fda5cca`
const searchApi = `https://api.themoviedb.org/3/search/movie?api_key=b90fbbfe5fd1089b1a1d3b945fda5cca&query=`


console.log(process.env.REACT_APP_DB_KEY)
console.log(process.env)

function MoviesContainer() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    getMovies(featuredApi)
  },[])

  useEffect(() => {
    if(searchTerm.length==0) {
      getMovies(featuredApi)
    }
  }, [])
  const getMovies = (API) => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setMovies(data.results);
      })
  }


const handleSubmit = (e) => {
  e.preventDefault();
  if(searchTerm.length>1) {
    console.log(searchTerm)
    getMovies(searchApi + searchTerm)
  }
  else if(movies.results.length === 0) {
    return "BLEDY"
  }

}

const handleInput = (e) => {
  setSearchTerm(e.target.value)
}

  return (
    <>
    <header>
      
      <form onSubmit={handleSubmit}>
        <input className="search" type="text" placeholder="search.." value={searchTerm} onChange={handleInput} />
      </form>
    </header>
    <div className="top">Top 20</div>
    <div className="movie-container">
      {movies.length>0&&movies.map((item) => (
          <Movies key={item.id} {...item}/>
      ))}
    </div>
    <div>
      
    </div>
    </>
  );
}

export default MoviesContainer;

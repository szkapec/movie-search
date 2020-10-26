import React from 'react'
import {NavLink} from 'react-router-dom';
export default function Movies({poster_path, title, vote_average, overview}) {
    const imgApi = "https://image.tmdb.org/t/p/w1280"

    const setVoteClass = (vote) => {
        if(vote>=8){
            return 'green'
        } else if (vote>=6) {
            return 'orange'
        } else {
            return 'red'
        }
    }

    return (
       
        <div className="movie">
          
                <img src={poster_path ? (imgApi + poster_path ): "https://images.unsplash.com/photo-1601753657684-cefd5aa6f284?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"} alt={title}/>
                <div className="movie-info">
                    <h3>{title?title.substr(0,15):null}</h3>
                    <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
                </div>
         
                <NavLink to={`/search/${title}`} propsa={title}>
            <div className="movie-over">
                <h2>Overview</h2>
                <p>{overview}</p>
                <button>Click</button>
            </div>
            </NavLink>
        </div>
       
    )
}

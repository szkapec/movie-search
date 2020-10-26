import React, { useEffect, useState } from 'react'
import {StyledArticle} from './MoviesSearch.css.js';
import star from '../../assets/star.png';
import play from '../../assets/play.png';
import {NavLink, useHistory} from 'react-router-dom';

export default function MoviesSearch(props) {
    const searchApi = `https://api.themoviedb.org/3/search/movie?api_key=b90fbbfe5fd1089b1a1d3b945fda5cca&query=`
    const imgApi = "https://image.tmdb.org/t/p/w1280";

    const [movie, setMovie] = useState({})

    const setVoteClass = (vote) => {
        if(vote>=8){
            return 'green'
        } else if (vote>=6) {
            return 'orange'
        } else {
            return 'red'
        }
    }

    useEffect(() => {
        fetch(searchApi+props.match.params.id)
            .then(res => res.json())
            .then(item => {
             
                console.log(item.results[0])
                setMovie(item.results[0])
            })
            .catch(err => console.log(err))
    },[])
    const {backdrop_path, overview, vote_average, title, release_date, adult} = movie;
    const history = useHistory()
    const handleHistory = () => history.goBack();
    return (
        <StyledArticle adult={adult} >
           {/* <span> */}
           <h2>{title}</h2>
           <div className="data"> {release_date}</div>
           <img src={imgApi+backdrop_path} alt="movies"/>
           <p className="description">Description: {overview} </p>
           
           <div className="star">
               <p><img src={star} alt="star"/></p>
               <p className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</p>
            </div>
           <div className="play">
             <a href={`https://www.filmweb.pl/film/${title}`}> <img src={play} alt="play"/> </a>  See the <span>{title}</span> trailer
           </div>
           <button onClick={handleHistory} className="return">
                    return
           </button>
           {/* </span> */}
        </StyledArticle>
    )
}

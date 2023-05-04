import React from 'react';
import './moviecarte.css';
import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom'

const MovieCard = ({movie}) => {
  return (
    <div class="movie_card" id="bright">
    <div class="info_section">
      <div class="movie_header">
        <img class="locandina" src={movie.mainimage}/>
        <h1>{movie.title}</h1>
        <h4>{movie.date}</h4>
        <span class="minutes">{movie.duration}</span>
        <p class="type">{movie.genre}</p>
      </div>
      <div class="movie_desc">
        <p class="text">
          {movie.description} 
        </p>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rate}
          
        />
        <Link to={`/movie/${movie.id}`}>Detail</Link>
      </div>
     
      <div class="movie_social">
        <ul>
          <li><i class="material-icons">share</i></li>
          <li><i class="material-icons"></i></li>
          <li><i class="material-icons">chat_bubble</i></li>
        </ul>
      </div>
    </div>
    <div class="blur_back bright_back"></div>
  </div>
  )
}
export default MovieCard

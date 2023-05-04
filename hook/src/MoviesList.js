import React,{} from 'react';
import MovieCard from './MovieCard';


export const MoviesList =({movies}) => {
 
  return (
    <div>
      
      {movies.map((el)=> <MovieCard  movie={el}/>)}
   
    
    </div>
  )
}


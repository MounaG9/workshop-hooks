import React from 'react';
import StarRatingComponent from 'react-star-rating-component';


const Search = ({search, getRate,rating}) => {
    
   const onStarClick=(nextValue)=>{
    getRate(nextValue)

   }
   
  return (
    <div>
        <input type="text" placeholder='search a movie' onChange={(el)=> search(el.target.value)}></input>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={onStarClick}
        />
    </div>
  )
}

export default Search
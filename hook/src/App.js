import React from 'react';
import { useState } from 'react';
import Add from './Add';
import {Routes,Route} from 'react-router-dom'

import { MoviesList } from './MoviesList';
import Search from './Search';
import Trailer from './Trailer';

function App() {
      
  const[keyword,setkeyword]=useState('')
  const[rating,setRating]=useState(1)
  const[movies,setMovies]=useState([
        {
        id:1,
        mainimage:"https://en.wikipedia.org/wiki/Sing_%282016_American_film%29#/media/File:Sing_(2016_film)_poster.jpg" ,
        title:"batman",
        duration:"107minutes",
        date:"2016",
        rate:3.5,
        genre:"Musical,kids",
        description:"Sing tells the story of a koala named, Buster Moon(Matthew McConaughey). To save his theater from shutting down, Buster has a singing competition involving some ...",
        trailer:"https://www.youtube.com/watch?v=DiSvq5SgLMI"
        },{
          id:2,
          mainimage:"https://en.wikipedia.org/wiki/Sing_%282016_American_film%29#/media/File:Sing_(2016_film)_poster.jpg" ,
          secondimage: "",
          title:"superman",
          duration:"107minutes",
          date:"2016",
          rate:3.5,
          genre:"Musical,kids",
          description:"Sing tells the story of a koala named, Buster Moon(Matthew McConaughey). To save his theater from shutting down, Buster has a singing competition involving some ...",
          
        },
        ])


    const search=(keyword)=>{
      setkeyword(keyword)
    }
    const getRate=(rate)=>{
      setRating(rate) }

      const handleAdd = (newMovie)=>{
        setMovies([...movies,newMovie]);
      }
    return (
      <div className="App">
        <Search search={search} getRate={getRate} />
        <Add handleAdd={handleAdd} />
        <Routes>
        <Route path='/' element={ <MoviesList  movies={ movies.filter((movie)=> movie.rate >= rating && movie.title.toLowerCase().includes(keyword.trim().toLowerCase()))}/>}/>
       <Route path='/movie/:id' element={<Trailer movie={movies}/>}/>

        </Routes>
        
        
       
      
    </div>

    )
    }
export default App;

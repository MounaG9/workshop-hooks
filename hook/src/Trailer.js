import React from "react";
import { useParams,Link  } from "react-router-dom";
import Button from 'react-bootstrap/Button';


const Trailer = ({movie}) => {
    const {id}= useParams()
    const foundMovie= movie.find((movie)=> movie.id === +id)
  return (
    <div>
        <h1> {foundMovie.title}</h1>
<p>{foundMovie.description}</p>
      <iframe
        width="560"
        height="315"
        src={foundMovie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
<Link to='/'><Button variant="primary">Home</Button></Link>


    </div>
  );
};

export default Trailer;

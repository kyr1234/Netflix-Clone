import React,{useState,useEffect} from 'react';
import './Row.css';
import axios from "./axios.js";
import Youtube from "react-youtube";


function Row({title,url,isLarge}) {

const [movies,setmovies]=useState();

const opts={

height:400px;
width:100%;
autoplay:1


}

useEffect(()=>{

const fetchdata=async()=>{

const request=await axios.get(url);
setmovies(request.data.results);
}
fetchdata();
},[url])

console.log(movies);


  return (
    <div className="Row">

<h2>{title}</h2>

<div className='hello'>
{
  movies && movies.map((movie)=>(
<img className={`poster ${isLarge && "Large_poster"}`} key={movie.id}  src={` https://image.tmdb.org/t/p/original${isLarge? movie.poster_path:movie.backdrop_path}`} alt={movie.original_name}/>

))}

<Youtube  videoId={targetUrl} opts={opts}    />



</div>

  </div>
  );
}

export default Row;

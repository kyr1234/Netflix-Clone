import React,{useEffect,useState} from 'react';
import './Banner.css';
import axios from "./axios";
import requests from "../MovieApi.js";

function Banner() {

const [movie,setmovies]=useState([]);

useEffect(()=>{


const fetchdata=async()=>{

const request= await axios.get(requests.NETFLIXORIGINALS);
let number=Math.floor(Math.random()*(request.data.results.length-1));
setmovies(request.data.results[number]);

}
fetchdata();
},[])

const truncate=(str,n)=>{
return str?.length>n? str.substr(0,n-1)+"...": str;
}

  return (
<div className="Banner_img"

style={{
  backgroundSize:"100% 100%",
  backgroundRepeat:"non-repeat",
  backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
  backgroundPosition:"center center"
}}

> 
  <div className='Banner_content'>
    <h1 className='title'>{movie.name}</h1>
<div className='button'>
    <button>Play It</button> 
    <button>My List</button>
  </div> 
<h1 className='desc'> {truncate(movie.overview,100)}</h1>

  </div>
  <div className='fade-bottom'>
  
  </div>

</div>
  );
}

export default Banner;

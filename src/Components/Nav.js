import React,{useState,useEffect} from 'react';
import './Nav.css';
import {Avatar} from "@material-ui/core";

function Nav() {

const [color,colorshow]=useState(false);


useEffect(()=>{

window.addEventListener("scroll",()=>{
  if(window.scrollY>200)
  {
    colorshow(true);
  }
  else{
    colorshow(false);
  }
  return ()=>window.removeEventListner("scroll");
})

},[])


  return (
    <div className={`Nav ${!color && "notshow"}`}>

<img src="https://img.freepik.com/free-photo/netflix-logo-realistic-cpu-technology-background-3d_327483-315.jpg?size=338&ext=jpg" className='logo'/>

<Avatar className='nav_avatar'  src="https://material-ui.com/static/logo.png"/>


    </div>
  );
}

export default Nav;

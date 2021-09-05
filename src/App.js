import React from 'react';
import './App.css';
import Row from "./Components/Row";
import request from "./MovieApi.js";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">

<Nav/>



<Banner/>

<Row title="NETFLIX ORIGINALS"url={request.NETFLIXORIGINALS} isLarge/>
<Row title="TRENDING NOW"url={request.TRENDING} />
<Row title="TOPRATED" url={request.TOPRATED}/>
<Row title="UPCOMING"url={request.UPCOMING}/>
<Row title="HORROR" url={request.HORROR}/>
<Row title="ROMANCE"  url={request.ROMANCE}/>
    </div>
  );
}

export default App;

import axios from "axios";

const instance=axios.create({
  baseURL:"https://api.themoviedb.org/3",
});

//this instance just put the request text in the end of baseurl
//instance.get("/movies");

export default instance;
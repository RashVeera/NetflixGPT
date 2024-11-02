import { useDispatch } from "react-redux"
import { addnowPlayingmovies } from "../utils/moviesSlice"
import { useEffect } from "react"
import { options } from "../utils/constants"

const useMovieSlice = () =>{
    // const dispatch=useDispatch()
    // const nowplayingmovies1 = async ()=>{
    
    //   const movies= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    //   console.log(movies)
    //   const result = await movies.json()
    //   dispatch(addnowPlayingmovies(result.results))
    //   console.log(result,'now playing')
    
    // }
  
    // useEffect(() => {
    //   nowplayingmovies1();
    // }, []);
  
  
}

export default useMovieSlice;
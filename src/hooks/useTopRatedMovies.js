import { useDispatch } from "react-redux"
import { addTopRatedMovies } from "../utils/moviesSlice"
import { useEffect } from "react"
import { options } from "../utils/constants"

const useTopRatedMovies = () =>{
    const dispatch=useDispatch()
    const nowplayingmovies1 = async ()=>{
      const movies= await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
      const result = await movies.json()
      dispatch(addTopRatedMovies(result.results))
    
    }
  
    useEffect(() => {
      nowplayingmovies1();
    }, []);
  
  
}

export default useTopRatedMovies;
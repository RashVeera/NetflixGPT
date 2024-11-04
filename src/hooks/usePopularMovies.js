import { useDispatch } from "react-redux"
import { addPopularmovies } from "../utils/moviesSlice"
import { useEffect } from "react"
import { options } from "../utils/constants"

const usePopularMovies = () =>{
    const dispatch=useDispatch()
    const nowplayingmovies1 = async ()=>{
      const movies= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      const result = await movies.json()
      dispatch(addPopularmovies(result.results))
    
    }
  
    useEffect(() => {
      nowplayingmovies1();
    }, []);
  
  
}

export default usePopularMovies;
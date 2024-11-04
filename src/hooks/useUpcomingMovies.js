import { useDispatch } from "react-redux"
import { addUpcomingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"
import { options } from "../utils/constants"

const useUpcomingMovies = () =>{
    const dispatch=useDispatch()
    const nowplayingmovies1 = async ()=>{
      const movies= await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
      const result = await movies.json()
      dispatch(addUpcomingMovies(result.results))
    
    }
  
    useEffect(() => {
      nowplayingmovies1();
    }, []);
  
  
}

export default useUpcomingMovies;
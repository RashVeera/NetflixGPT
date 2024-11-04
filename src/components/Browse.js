import useMovieSlice from '../hooks/useMovieSlice';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';


const Browse = () => {
  useMovieSlice()
  usePopularMovies();
  useTopRatedMovies()
  useUpcomingMovies();

  return (
    <div className='h-screen   '>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
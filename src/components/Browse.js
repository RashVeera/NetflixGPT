import useMovieSlice from '../hooks/useMovieSlice';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
  useMovieSlice()

  return (
    <div className='h-screen   '>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
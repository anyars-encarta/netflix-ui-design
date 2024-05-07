import Featured from '../components/featured/Featured';
import Navbar from '../components/navbar/Navbar';
import './home.scss';

const Home = () => {
  return (
    <div className='homeContainer'>
      <Navbar />
      <Featured type='movie' />
    </div>
  )
}

export default Home
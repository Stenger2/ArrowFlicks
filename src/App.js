import Movies from './components/movies/movies.js';
import RatedMovies from './components/RatedMovies/RatedMovies.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={<Movies/>}/>
        <Route path="RatedMovies" element={<RatedMovies/>}/>
      </Routes>
    </div>
  );
}

export default App;

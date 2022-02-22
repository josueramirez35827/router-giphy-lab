
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Search from './components/Search';
import Trending from './components/Trending';

function App() {
  return (
    <div className="App">
      <div className='links'>
        <nav>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/search"}>Search</NavLink>
          <NavLink to={"/trending"}>Trending</NavLink>
        </nav>
      </div>
      <div>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="*" element={<NoMatch />} />

        </Routes>
      </div>
     
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import UpcomingGames from './pages/UpcomingGames';
import Genres from './pages/Genres';
import PlatformsPage from './pages/Platforms';
import TopRatedGames from './pages/TopRatedGames';



const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/upcoming" element={<UpcomingGames />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/platforms" element={<PlatformsPage />} />
        <Route path="/top-rated" element={<TopRatedGames />} />
      </Routes>
    </Router>
  );
};

export default App;

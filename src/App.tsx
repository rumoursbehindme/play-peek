import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Add Router here
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router> {/* Wrap the entire app inside Router */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;

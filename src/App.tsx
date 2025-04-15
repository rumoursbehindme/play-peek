import React from 'react';
import Home from './pages/Home';
import ThemeToggle from './components/ThemeToggle';
import './app.css';

const App: React.FC = () => {
  return (
    <div>
      <header>
        <ThemeToggle />
      </header>
      <Home />
    </div>
  );
};

export default App;

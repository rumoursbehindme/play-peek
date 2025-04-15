import React, { useEffect, useState } from 'react';
import { fetchGames } from '../services/api';
import GameCard from '../components/GameCard';
import { IGame } from '../types/game';

const Home: React.FC = () => {
  const [games, setGames] = useState<IGame[]>([]);

  useEffect(() => {
    fetchGames().then(setGames);
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Game Details</h1>
      <div className="d-flex flex-wrap gap-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Home;

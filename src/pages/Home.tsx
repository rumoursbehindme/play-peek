import React, { useEffect, useState } from 'react';
import { fetchGames } from '../services/api';
import GameCard from '../components/GameCard';
import { IGame } from '../types/game';
import TopGamesCarousel from '../components/TopGamesCarousel';
import SpinningLoader from '../components/SpinningLoader';

const Home: React.FC = () => {
  const [games, setGames] = useState<IGame[]>([]);
  const [topGames, setTopGames] = useState<IGame[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchGames()
      .then((data) => {
        setGames(data);
        const sortedGamesByRatings = [...data].sort((a, b) => b.rating - a.rating);
        setTopGames(sortedGamesByRatings.slice(0, 3));
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to fetch games.');
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <SpinningLoader />
  }
  return (
    <div className="container-fluid mt-4">
      <TopGamesCarousel topGames={topGames} />
      <h1 className="mb-4 text-center">Game Details</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="game-grid d-flex flex-wrap gap-4 justify-content-center">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
import { IGame } from '../types/game';
import { fetchUpcomingGames } from '../services/api';
import GameCard from '../components/GameCard';

const UpcomingGames: React.FC = () => {
    const [games, setGames] = useState<IGame[]>([]);

    useEffect(() => {
        fetchUpcomingGames().then(setGames);
    }, []);

    return (
        <div className="container-fluid mt-4">
            <h1 className="mb-4 text-center">Upcoming Games</h1>
            <div className="game-grid d-flex flex-wrap gap-4 justify-content-center">
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </div>
    );
};

export default UpcomingGames;

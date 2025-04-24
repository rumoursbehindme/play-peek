import React, { useEffect, useState } from 'react';
import { IGame } from '../types/game';
import { fetchUpcomingGames } from '../services/api';
import GameCard from '../components/GameCard';
import SpinningLoader from '../components/SpinningLoader';

const UpcomingGames: React.FC = () => {
    const [games, setGames] = useState<IGame[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUpcomingGames()
            .then(setGames)
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <SpinningLoader />
    }

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

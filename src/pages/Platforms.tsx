import React, { useEffect, useState } from 'react';
import { fetchPlatforms, fetchGamesByPlatform } from '../services/api';
import { IPlatform } from '../types/platform';
import { IGame } from '../types/game';
import GameCard from '../components/GameCard';
import SpinningLoader from '../components/SpinningLoader';

const PlatformsPage: React.FC = () => {
    const [platforms, setPlatforms] = useState<IPlatform[]>([]);
    const [selectedPlatform, setSelectedPlatform] = useState<IPlatform | null>(null);
    const [games, setGames] = useState<IGame[]>([]);
    const [loadingPlatforms, setLoadingPlatforms] = useState(true);
    const [loadingGames, setLoadingGames] = useState(false);

    useEffect(() => {
        fetchPlatforms()
            .then(setPlatforms)
            .finally(() => setLoadingPlatforms(false));
    }, []);

    useEffect(() => {
        if (!selectedPlatform) return;
        setLoadingGames(true);
        fetchGamesByPlatform(selectedPlatform.id)
            .then(setGames)
            .finally(() => setLoadingGames(false));
    }, [selectedPlatform]);

    if (loadingPlatforms) return <SpinningLoader message='Please Wait Platforms are Loading..' />;

    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center">Browse by Platform</h1>
            <div className="d-flex flex-wrap gap-2 justify-content-center mb-4">
                {platforms.map((platform) => (
                    <button
                        key={platform.id}
                        className={`btn ${selectedPlatform?.id === platform.id ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setSelectedPlatform(platform)}
                    >
                        {platform.name}
                    </button>
                ))}
            </div>

            {!selectedPlatform && <h1 className='text-center fw-semibold text-warning'> Please Choose any Patforms to Load The Games!</h1>}
            {loadingGames && <SpinningLoader />}
            {!loadingGames && selectedPlatform && (
                <>
                    <h2 className="text-center mb-3">
                        Showing games on "{selectedPlatform.name}"
                    </h2>
                    <div className="d-flex flex-wrap gap-1 justify-content-center mt-4">
                        {games.length > 0 ? (
                            games.map((game) => <GameCard key={game.id} game={game} />)
                        ) : (
                            <p>No games available for this platform.</p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default PlatformsPage;

import React, { useEffect, useState } from 'react';
import { IGame } from '../types/game';
import { IGenre } from '../types/genre';
import { fetchGenres, fetchGamesByGenre } from '../services/api';
import GameCard from '../components/GameCard';
import SpinningLoader from '../components/SpinningLoader';

const GenresPage: React.FC = () => {
    const [genres, setGenres] = useState<IGenre[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<IGenre | null>(null);
    const [games, setGames] = useState<IGame[]>([]);
    const [gamesLoading, setGamesLoading] = useState(true);
    const [genreLoading, setGenreLoading] = useState(true);
    const [genreError, setGenreError] = useState<string | null>(null);
    const [gamesError, setGamesError] = useState<string | null>(null);

    useEffect(() => {
        setGenreLoading(true);
        setGenreError(null);
        fetchGenres()
            .then(setGenres)
            .catch(err => {
                console.error(err);
                setGenreError('Failed to fetch genres.');
            })
            .finally(() => setGenreLoading(false));
    }, []);

    useEffect(() => {
        if (!selectedGenre) return;
        setGamesLoading(true);
        setGamesError(null);
        fetchGamesByGenre(selectedGenre.id)
            .then((data) => setGames(data))
            .catch(err => {
                console.error(err);
                setGamesError('Failed to fetch games.');
            })
            .finally(() => setGamesLoading(false));
    }, [selectedGenre]);

    if (genreLoading) {
        return <SpinningLoader />
    }
    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center">Browse by Genre</h1>
            {genreError && <div className="alert alert-danger">{genreError}</div>}
            <div className="d-flex flex-wrap gap-2 justify-content-center mb-4">
                {genres.map((g) => (
                    <button
                        key={g.id}
                        className={`btn ${selectedGenre?.id === g.id ? 'btn-primary' : 'btn-outline-primary'
                            }`}
                        onClick={() => setSelectedGenre(g)}
                    >
                        {g.name}
                    </button>
                ))}
            </div>

            {selectedGenre && gamesLoading && <SpinningLoader />}
            {gamesError && <div className="alert alert-danger">{gamesError}</div>}
            {!selectedGenre && (<p className="text-center"> Please select a genre above to see its games. </p>)}
            {!gamesLoading && selectedGenre && (
                <div className="container-fluid mt-4">
                    <h2 className="mb-3 text-center">
                        Showing &quot;{selectedGenre.name}&quot; Games
                    </h2>
                    <div className="d-flex flex-wrap gap-4 justify-content-center">
                        {games.length > 0 ? (
                            games.map((game) => <GameCard key={game.id} game={game} />)
                        ) : (
                            <p>No games found in this genre.</p>
                        )}
                    </div>
                </div>
            )}

        </div>
    );
};

export default GenresPage;

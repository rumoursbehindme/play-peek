import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { IGame } from '../types/game';
import GameCard from '../components/GameCard';
import './styles/SearchResults.css';
import SpinningLoader from '../components/SpinningLoader';

const SearchResults: React.FC = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q') || '';
    const [games, setGames] = useState<IGame[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchGames = async () => {
            try {
                setLoading(true);
                setError(null);
                const res = await axios.get(
                    `https://api.rawg.io/api/games?search=${query}&key=${import.meta.env.VITE_RAWG_API_KEY}`
                );
                setGames(res.data.results);
            } catch (err) {
                console.error('Search fetch error:', err);
                setError('Failed to fetch search results.');
            } finally {
                setLoading(false);
            }
        };

        if (query) fetchGames();
    }, [query]);

    return (
        <div className="container mt-4">
            <h2>Search Results for: <em>{query}</em></h2>
            {error && <div className="alert alert-danger">{error}</div>}
            {loading ? (
                <SpinningLoader />
            ) : games.length === 0 ? (
                <p>No results found.</p>
            ) : (
                <div className="game-grid">
                    {games.map((game) => (
                        <GameCard key={game.id} game={game} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchResults;

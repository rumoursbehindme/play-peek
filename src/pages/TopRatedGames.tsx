import React, { useState, useEffect } from "react";
import { IGame } from "../types/game";
import { fetchTopRatedGames } from "../services/api";
import SpinningLoader from "../components/SpinningLoader";
import GameCard from "../components/GameCard";

const TopRatedGames: React.FC = () => {

    const [games, setGames] = useState<IGame[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTopRatedGames()
            .then(setGames)
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="container-fluid mt4">
            <h1 className="mb-4 text-center">Top Rated Games</h1>
            {
                loading ? (<SpinningLoader />)
                    :
                    (<div className="d-flex flex-wrap gap-4 justify-content-center">
                        {games.map((game) => (
                            <GameCard key={game.id} game={game} />
                        ))}
                    </div>)
            }
        </div>
    )
}

export default TopRatedGames;
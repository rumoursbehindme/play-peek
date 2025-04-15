import React from 'react';
import { IGame } from '../types/game';

const GameCard: React.FC<{ game: IGame }> = ({ game }) => {
    return (
        <div className="game-card card mb-3 shadow-sm" style={{ width: '18rem' }}>
            {/* Game Image */}
            <img src={game.background_image} className="card-img-top" alt={game.name} />
            <div className="game-card-body card-body">
                {/* Game Name */}
                <h5 className="game-card-title card-title">{game.name}</h5>
                {/* Game Release Date */}
                <p className="game-card-release card-text">Released: {game.released}</p>
                {/* Game Rating */}
                <p className="game-card-rating card-text">Rating: {game.rating}</p>
                {/* Button or Action */}
                <button className="btn btn-primary">Details</button>
            </div>
        </div>
    );
};

export default GameCard;

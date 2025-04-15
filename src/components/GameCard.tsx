import React from 'react';
import { IGame } from '../types/game';

const GameCard: React.FC<{ game: IGame }> = ({ game }) => {
    return (
        <div className="card mb-3 shadow-sm" style={{ width: '18rem' }}>
            <img src={game.background_image} className="card-img-top" alt={game.name} />
            <div className="card-body">
                <h5 className="card-title">{game.name}</h5>
                <p className="card-text">Released: {game.released}</p>
                <p className="card-text">Rating: {game.rating}</p>
            </div>
        </div>
    );
};

export default GameCard;

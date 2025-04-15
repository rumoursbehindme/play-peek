import React from 'react';
import { IGame } from '../types/game';

const GameCard: React.FC<{ game: IGame }> = ({ game }) => {
    return (
        <div className="card border-0 shadow-sm" style={{ width: '18rem', borderRadius: '16px', overflow: 'hidden' }}>
            <img src={game.background_image} className="card-img-top" alt={game.name} />
            <div className="card-body">
                <h5 className="card-title fw-semibold">{game.name}</h5>
                <p className="card-text mb-1"><strong>Released:</strong> {game.released}</p>
                <p className="card-text"><strong>Rating:</strong> {game.rating}</p>
                <button className="btn btn-primary">Details</button>
            </div>
        </div>
    );
};

export default GameCard;

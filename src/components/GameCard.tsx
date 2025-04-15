import React, { useState } from 'react';
import { IGame } from '../types/game';
import './styles/GameCard.css';
import GameDetailsModal from './GameDetailsModal';

const GameCard: React.FC<{ game: IGame }> = ({ game }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="card border-0 shadow-sm game-card">
                <img src={game.background_image} className="card-img-top" alt={game.name} />
                <div className="card-body">
                    <h5 className="card-title fw-semibold">{game.name}</h5>
                    <p className="card-text mb-1"><strong>Released:</strong> {game.released}</p>
                    <p className="card-text"><strong>Rating:</strong> {game.rating}</p>
                    <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>Details</button>
                </div>
            </div>

            {isModalOpen && (
                <GameDetailsModal game={game} closeModal={() => setIsModalOpen(false)} />
            )}
        </>
    );
};

export default GameCard;

import React, { useState } from 'react';
import { IGame } from '../types/game';
import './styles/GameCard.css';
import GameDetailsModal from './GameDetailsModal';
import { FaStar } from 'react-icons/fa';

const GameCard: React.FC<{ game: IGame }> = ({ game }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="card border-0 shadow-sm game-card">
                <img
                    src={game.background_image || '/assets/svg/no-game-image.svg'}
                    className="card-img-top"
                    alt={game.background_image ? game.name : `No image available for ${game.name}`}
                    loading="lazy"
                />

                <div className="card-body">
                    <h5 className="card-title fw-semibold">{game.name}</h5>
                    <p className="card-text mb-1"><strong>Released:</strong> {game.released}</p>
                    <div className="rating-stars">
                        {Array.from({ length: Math.round(game.rating) }, (_, i) => (
                            <FaStar data-testid="star-icon" key={i} className="rating-star" />
                        ))}
                    </div>
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

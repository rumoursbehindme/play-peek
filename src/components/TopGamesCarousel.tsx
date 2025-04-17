import React, { useEffect } from 'react';
import { IGame } from '../types/game';
import { Carousel } from 'bootstrap';

interface Props {
    topGames: IGame[];
}

const TopGamesCarousel: React.FC<Props> = ({ topGames }) => {

    useEffect(() => {
        const carouselElement = document.getElementById('carouselExampleAutoplaying');
        if (carouselElement) {
            const carouselInstance = new Carousel(carouselElement, {
                interval: 3000,
                ride: 'carousel'
            });
            carouselInstance.cycle();
        }
    }, [topGames]);

    if (topGames.length === 0) return null;

    return (
        <div
            id="carouselExampleAutoplaying"
            className="carousel slide mb-5"
            data-bs-ride="carousel"
            data-bs-interval="3000"
        >
            <div className="carousel-indicators">
                {topGames.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide-to={index}
                        className={index === 0 ? 'active' : ''}
                        aria-current={index === 0 ? 'true' : undefined}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>
            <div className="carousel-inner">
                {topGames.map((game, index) => (
                    <div key={game.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img
                            src={game.background_image || '/assets/svg/no-game-image.svg'}
                            className="d-block w-100 rounded"
                            alt={game.name}
                            style={{ maxHeight: '450px', objectFit: 'cover' }}
                        />
                        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded px-3 py-2">
                            <h1>{`#${index + 1}`}</h1>
                            <h5>{game.name}</h5>
                            <p>Rating: {game.rating} | Released: {game.released}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default TopGamesCarousel;

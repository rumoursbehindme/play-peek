import React, { useEffect } from 'react';
import DOMPurify from 'dompurify';
import './styles/GameDetailsModal.css';
import { IGame } from '../types/game';
import { Badge, Card, ListGroup, Row, Col, ProgressBar } from 'react-bootstrap';

interface GameDetailsModalProps {
    game: IGame;
    closeModal: () => void;
}

const GameDetailsModal: React.FC<GameDetailsModalProps> = ({ game, closeModal }) => {
    const pcRequirements = game.platforms.find(p => p.platform.slug === 'pc')?.requirements_en;
    const sanitizedMinimum = pcRequirements?.minimum ? DOMPurify.sanitize(pcRequirements.minimum) : '';
    const sanitizedRecommended = pcRequirements?.recommended ? DOMPurify.sanitize(pcRequirements.recommended) : '';

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [closeModal]);

    return (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && closeModal()}>
            <div className="modal-box">
                <div className="modal-header">
                    <h5 className="modal-title">{game.name}</h5>
                    <button className="close-button" onClick={closeModal}>×</button>
                </div>
                <div className="modal-body">
                    <img src={game.background_image} alt={game.name} className="modal-image mb-3" />
                    <p><strong>Released:</strong> {game.released}</p>
                    <p><strong>Rating:</strong> {game.rating}</p>

                    <Row className="mb-3">
                        <Col md={6}>
                            <h5>Ratings</h5>
                            {game.ratings.map((r) => (
                                <div key={r.id}>
                                    <strong>{r.title}:</strong>
                                    <ProgressBar now={r.percent} label={`${r.percent}%`} className="mb-2" />
                                </div>
                            ))}
                        </Col>
                        <Col md={6}>
                            <h5>Platforms</h5>
                            <ListGroup>
                                {game.platforms.map((p) => (
                                    <ListGroup.Item key={p.platform.id}>{p.platform.name}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Col>
                    </Row>

                    {pcRequirements && (
                        <Row className="mb-3">
                            <Col>
                                <Card>
                                    <Card.Header><h5>PC Requirements</h5></Card.Header>
                                    <Card.Body>
                                        {pcRequirements.minimum && (
                                            <>
                                                <h6>Minimum</h6>
                                                <div dangerouslySetInnerHTML={{ __html: sanitizedMinimum }} />
                                            </>
                                        )}
                                        {pcRequirements.recommended && (
                                            <>
                                                <h6>Recommended</h6>
                                                <div dangerouslySetInnerHTML={{ __html: sanitizedRecommended }} />
                                            </>
                                        )}
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    )}

                    <Row>
                        <Col>
                            <h5>Genres</h5>
                            {game.genres.map((genre) => (
                                <Badge key={genre.id} bg="info" className="me-2">{genre.name}</Badge>
                            ))}
                        </Col>
                    </Row>

                    <Row className="mt-3">
                        <Col>
                            <h5>Available on Stores</h5>
                            {game.stores.map((s) => (
                                <Badge key={s.store.id} bg="secondary" className="me-2">
                                    {s.store.name}
                                </Badge>
                            ))}
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default GameDetailsModal;

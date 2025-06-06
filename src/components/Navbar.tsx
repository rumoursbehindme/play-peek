import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch, FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';
import './styles/NavBar.css';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();


    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery('');
        }
    };

    return (
        <div className={`navbar-wrapper ${collapsed ? 'collapsed' : ''}`}>
            <BSNavbar expand="lg" className="custom-navbar">
                <Container>
                    <BSNavbar.Brand as={Link} to="/">PlayPeek</BSNavbar.Brand>
                    <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
                    <BSNavbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto navbar-links justify-content-center">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/genres">Genres</Nav.Link>
                            <Nav.Link as={Link} to="/platforms">Platforms</Nav.Link>
                            <Nav.Link as={Link} to="/top-rated">Top Rated</Nav.Link>
                            <Nav.Link as={Link} to="/upcoming">Upcoming</Nav.Link>
                        </Nav>

                        <div className="navbar-tools d-flex align-items-center gap-2 mt-3 mt-lg-0 ms-lg-auto">
                            <form onSubmit={handleSearchSubmit} className="navbar-search-form">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search games..."
                                    className="navbar-search-input"
                                />
                                <button type="submit" className="navbar-search-button" aria-label="Search">
                                    <FiSearch size={18} />
                                </button>
                            </form>

                            <ThemeToggle />
                        </div>
                        <button
                            className="navbar-collapse-btn"
                            onClick={() => setCollapsed((c) => !c)}
                            aria-label={collapsed ? 'Expand menu' : 'Collapse menu'}
                        >
                            {collapsed ? <FiChevronDown /> : <FiChevronUp />}
                        </button>
                    </BSNavbar.Collapse>
                </Container>
            </BSNavbar>
        </div>
    );
};

export default Navbar;

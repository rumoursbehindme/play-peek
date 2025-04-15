import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NavBar.css';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar custom-navbar">
            <div className="container">
                <Link className="navbar-brand" to="/">PlayPeek</Link>
                <div className="navbar-links">
                    <Link className="nav-link" to="/genres">Genres</Link>
                    <Link className="nav-link" to="/platforms">Platforms</Link>
                    <Link className="nav-link" to="/top-rated">Top Rated</Link>
                    <Link className="nav-link" to="/upcoming">Upcoming</Link>
                </div>

                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;

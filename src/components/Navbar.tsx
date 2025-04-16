import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import './styles/NavBar.css';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery('');
        }
    };

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
        </nav>
    );
};

export default Navbar;

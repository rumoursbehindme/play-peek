import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar custom-navbar">
            <div className="container">
                <a className="navbar-brand" href="/">PlayPeek</a>
                <ThemeToggle />
            </div>
        </nav>

    );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './styles/ThemeToggle.css';

const ThemeToggle: React.FC = () => {
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        // If no theme saved, default to dark
        return savedTheme ? savedTheme === 'dark' : true;
    });

    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(prev => !prev);
    };

    return (
        <label className="switch">
            <input type="checkbox" checked={isDark} onChange={toggleTheme} />
            <span className="slider round">
                <span className="icon-left">
                    <FaSun size={15} />
                </span>
                <span className="icon-right">
                    <FaMoon size={15} />
                </span>
            </span>
        </label>
    );
};

export default ThemeToggle;

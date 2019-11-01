import React from "react";
import {useDarkMode} from './Hooks/useDarkMode';

const NavBar = () => {

    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return(
        <nav>
            <h1>
                Player Cards
            </h1>
            <div>
                <div
                    onClick={toggleMode}
                    className={darkMode? 'toggle toggled' : 'toggle'}
                />
            </div>
        </nav>
    )
}
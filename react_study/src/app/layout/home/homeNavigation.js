import React from "react";
import { Link } from 'react-router-dom';

const HomeNavigation = () => {

    let name = 'name'
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home{name}</Link>
                </li>
                <li>
                    <Link to="/mybooks">My Books</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites</Link>
                </li>
            </ul>
        </nav>
    )
}

export default HomeNavigation;
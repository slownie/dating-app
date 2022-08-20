import React from 'react';
import { Link } from 'react-router-dom';

function NewSidebar() {
    return (
        <div className = "sidebar-container">
            <div className="sidebar">
                <h2>MERN Dating App</h2>
                <ul>
                    <li className="nav-text">
                        <Link to="/profile">
                            Profile
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/matches">
                            Matches
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/chats">
                            Chats
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/">
                            Dashboard
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default NewSidebar;
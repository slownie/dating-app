import React from 'react';
import { useState, useEffect} from 'react';
import NewSidebar from '../components/Sidebar';

function SearchViewport() {
    const [user, setUser] = useState(null);



    const onMatch = (swipedUserId) => {
        //updateMatches(swipedUserId)
    }

    return (  
        <div className='search-screen'>
            <NewSidebar />

            <h1>Search Viewport</h1>

            <div className='search-container'>
                <h2>Dashboard</h2>
                <hr/>
                
                <div className='user-container'>

                </div>
                <hr/>
                <div className="selection-container">
                    <button className="left-button">X</button>
                    <button className="right-button">✓</button>
                </div>
            </div>
        </div>
    )
}
export default SearchViewport;
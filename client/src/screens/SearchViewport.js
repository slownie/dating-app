import React from 'react';
//import SearchBar from "material-ui-search-bar";
import { useState } from 'react';
import NewSidebar from '../components/Sidebar';

function SearchViewport() {
    return (  
        <div style={{display: 'flex'}}>
            <NewSidebar />

            <div className="search-container">
                <h1>Search for milfs in your area</h1>
            </div>
        </div>
    )
}
export default SearchViewport;
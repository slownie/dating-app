import React from 'react';
//import SearchBar from "material-ui-search-bar";
import { useState } from 'react';

import UserCard from '../components/UserCard';

export default function SearchViewport() {
    return (  
        <div style={{flex: 1, marginLeft: 170}}>
            <div className="search">
                <h1>Search for milfs in your area</h1>
                {/*
                    <SearchBar
                    value={useState}
                    onChange={(newValue) => this.setState({ value: newValue })}
                ></SearchBar>
                
                */}

                <UserCard />
                
            </div>
        </div>
    )
}
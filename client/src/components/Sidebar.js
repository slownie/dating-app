import React from 'react';
import { Link } from 'react-router-dom';

function NewSidebar() {
    const itemList=[
        {
            text: 'Profile',
            onClick:'/profile'
        },

        {
            text: 'Matches',
            onClick:'/matches'
        },

        {   
            text: 'Chats',
            onClick:'/chats'
        },  

        {
            text: 'Search',
            onClick:'/search'
        },
    ];
    return (
        <div className = "sidebar-container">
            <div className="sidebar">
                <h2>MERN Dating App</h2>
                {itemList.map((item, index)=> {
                    const {text,onClick} = item;
                    return (
                        <Link to={onClick}>{text}</Link>
                    )
                })}
            </div>
        </div>
    )
}
export default NewSidebar;
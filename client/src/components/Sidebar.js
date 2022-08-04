import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NewSidebar() {
    let navigate = useNavigate();
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
            {itemList.map((item, index)=> {
                const {text,onClick} = item;
                return (
                    <Link to={onClick}>{text}</Link>
                )
            })}
        </div>
    )
}
export default NewSidebar;
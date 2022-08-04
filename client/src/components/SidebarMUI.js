import React from 'react';
import {Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';



export default function Sidebar() {

    let navigate = useNavigate();

    const itemList=[
        {
            text: 'Profile',
            onClick: () => navigate('/profile'),
        },

        {
            text: 'Matches',
            onClick: () => navigate('/matches')
        },

        {   
            text: 'Chats',
            onClick: () => navigate('/chats')
        },  

        {
            text: 'Search',
            onClick: () => navigate('/search')
        },
    ];

    return(
        <Drawer variant="permanent" PaperProps={{sx:{width: '150px', 
        color: '#fff', backgroundColor: '#ea80fc'}}}>
            <List>
                {itemList.map((item, index) => {
                    const {text, onClick} = item;
                    return (
                        <ListItem button key={index} onClick={onClick}>
                            <ListItemText primary={text} sx={{alignContent: 'center'}} />
                        </ListItem>
                    )
                })}
            </List>
        </Drawer>
    );
}
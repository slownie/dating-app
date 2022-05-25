import React from 'react';
import {Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';



export default function Sidebar() {

    let navigate = useNavigate();

    const itemList=[
        {
            text: 'Profile',
            onClick: () => navigate('/'),
        },

        {
            text: 'Matches',
            onClick: () => navigate('/login')
        },

        {   
            text: 'Chats',
        },  

        {
            text: 'Browse'
        },
    ];

    return(
        <Drawer variant="permanent" PaperProps={{sx:{width: '150px', 
        color: '#fff', backgroundColor: '#ea80fc'}}}>
            <List>
                {itemList.map((item, index) => {
                    const {text, onClick} = item;
                    return (
                        <ListItem button key={text} onClick={onClick}>
                            <ListItemText primary={text} sx={{alignContent: 'center'}} />
                        </ListItem>
                    )
                })}
            </List>
        </Drawer>
    );
}
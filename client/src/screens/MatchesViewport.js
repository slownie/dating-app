import React from 'react';
import { useState } from 'react';
import {List, ListItem, ListItemText} from '@mui/material';

import Users from '../data/Users';

import Sidebar from '../components/SidebarMUI';


export default function MatchesViewport() {
    return (
        
        <div style={{flex: 1, marginLeft: 170}}>
            <Sidebar />
                <h1>Matches Viewport</h1>

            <List>
                {Users.map((item, index) => {
                    return (
                        <div style={{backgroundColor: 'red', marginBottom: 40}}>
                             <ListItem button key={item.id} sx={{flexDirection: 'column'}}
                                onClick>
                                <ListItemText primary={item.name} />
                                <ListItemText primary={item.age} />
                            </ListItem>
                        </div>
                    )
                })}
            </List>
        </div>
    )
    
}
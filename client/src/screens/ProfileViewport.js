import React from 'react';
import Profile from '../components/Profile';
import Sidebar from '../components/SidebarMUI';

export default function ProfileViewport() {
    return (
        <div style={{flex: 1, marginLeft: 170}}>
            <Sidebar />
            <h1>Profile Viewport</h1>
            <Profile />
        </div>
    )
}
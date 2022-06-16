import React from 'react';
import Profile from '../components/Profile';

export default function ProfileViewport() {
    return (
        <div style={{flex: 1, marginLeft: 170}}>
            <h1>Profile Viewport</h1>
            <Profile />
        </div>
    )
}
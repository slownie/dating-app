import React from 'react';
import MatchesViewport from './MatchesViewport';

export default function ChatsViewport() {
    return (
        <div>
            <div className='matchesWrapper'>
                <MatchesViewport/>
            </div>
        <div className='chatWrapper'>
            <div className='chatMessages'>
            </div>
                <div className="chatInput">
                    <textarea placeholder = "Say hello..." className='chatMessageInput'></textarea>
                    <button className='chatSendMessageButton'>Send</button>
                </div>
            </div>
        </div>  
        // Show all matches
    );
}
import React from 'react';
import { ImageList, ImageListItem, TextField } from '@mui/material';

const profileStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
}

const profileContainer = {
    backgroundColor: 'red',
    padding: 10
}

const photosContainer = {

}

const aboutMeContainer = {

}

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
];

export default function Profile() {
    return (
        <div style={profileStyle}>
            <div style={profileContainer}>
                {/* User Photos */}
                <div style={photosContainer}>
                    <h1>Photos</h1>
                    <div>
                        <ImageList sx = {{width:500, height:500}} cols={3} rowHeight='100px'>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rom||1}>
                                    <img
                                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading='lazy'
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>

                    </div>
                </div>

                {/* About Me */}
                <div style={aboutMeContainer}>
                    <h1>About Me</h1>
                        <div>
                            <TextField 
                                id='outlined-basic' 
                                label='Bio'
                                placeholder='Some text here'
                                multiline 
                                fullWidth='true'
                                rows='4'
                                variant='outlined'
                                inputProps={{maxLength:250}}
                                InputProps={{disableUnderLine: true}}
                            />
                        </div>
                </div>

                {/* Basics */}
                <div>
                    <h1>Your Basics</h1>
                </div>
                
            </div>
        </div>
    );
}
import React from 'react';
import { ImageList, ImageListItem, List, ListItemButton, ListItemText, TextField, Dialog } from '@mui/material';
import CurrentUser from '../data/User';

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
  marginBottom: 20
}

const basicsList = {
  backgroundColor: 'gray'
}

export default function Profile() {
    return (
        <div style={profileStyle}>
            <div style={profileContainer}>
                {/* User Photos */}
                <div style={photosContainer}>
                    <h1>Photos</h1>
                    <div>
                        <ImageList sx = {{width:500, height:500}} cols={3} rowHeight='100px'>
                            {CurrentUser.photos.map((item) => (
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
                                id='bio' 
                                label='Your Bio'
                                placeholder='Some text here'
                                multiline 
                                defaultValue={CurrentUser.bio}
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
                    <div style={basicsList}>
                      <List>
                        {/* Age */}
                        <ListItemButton>
                          <ListItemText primary="Age" 
                            secondary={CurrentUser.age}/>
                        </ListItemButton>
                        <Dialog>

                        </Dialog>

                        <ListItemButton>
                          <ListItemText primary="Gender"
                            secondary={CurrentUser.gender}/>
                        </ListItemButton>


                        <ListItemButton>
                          <ListItemText primary="Height" 
                            secondary={CurrentUser.height}/>
                        </ListItemButton>


                        <ListItemButton>
                          <ListItemText primary="Education Level" 
                            secondary={CurrentUser.education}/>
                        </ListItemButton>


                        <ListItemButton>
                          <ListItemText primary="Looking For"
                            secondary={CurrentUser.looking}/>
                        </ListItemButton>


                        <ListItemButton>
                          <ListItemText primary="Children"
                            secondary={CurrentUser.children}/>
                        </ListItemButton>


                        <ListItemButton>
                          <ListItemText primary="Drinking"
                            secondary={CurrentUser.drinking}/>
                        </ListItemButton>


                        <ListItemButton>
                          <ListItemText primary="Smoking" 
                            secondary={CurrentUser.smoking}/>
                        </ListItemButton>


                        <ListItemButton>
                          <ListItemText primary="Cannabis" 
                            secondary={CurrentUser.cannabis}/>
                        </ListItemButton>


                        <ListItemButton>
                          <ListItemText primary="Politics" 
                            secondary={CurrentUser.politics}/>
                        </ListItemButton>

                        
                        <ListItemButton>
                          <ListItemText primary="Religion" 
                            secondary={CurrentUser.religion}/>
                        </ListItemButton>
                      </List>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
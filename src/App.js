import './App.css';
import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

function App() {
  return (
    <Box sx={{display:'flex'}}>
      <div class="sidebar">
      <Drawer
        variant="permanent"
        PaperProps={{
          sx: {
            width: '15%',
            backgroundColor: '#00ffff'
          }
        }}
      >
        <div class="sidebarOptions">
          <Avatar/>
          <button>Profile</button>
          <button>Matches</button>
          <button>Chats</button>
          <button>Search</button>
        </div>
        
      </Drawer>
      </div>

      <Box component="main">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.</p>
      </Box>
    </Box>
  );
}

export default App;

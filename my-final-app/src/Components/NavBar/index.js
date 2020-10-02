import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import './styles.css'

const NavBar = () => {
    return(
      <Box>
        <AppBar position="static">
          <Toolbar disableGutters>
            <Box>
              <Typography variant="h6" align="center">
                Canciones
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default NavBar;
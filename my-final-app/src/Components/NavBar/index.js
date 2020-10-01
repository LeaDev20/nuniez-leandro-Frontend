import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import './styles.css'

const NavBar = () => {
    return(
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Canciones
          </Typography>
        </Toolbar>
      </AppBar>
    );
}

export default NavBar;
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import Logo from '../../images/Logo.png';
import './styles.css'

const NavBar = () => {
    return(
      <Box>
        <AppBar position="static">
          <Toolbar className="items-center">
            <Box mx="5px">
              <img src={Logo} alt="logo" className="img-logo" />
            </Box>
            <Box>
              <Typography variant="h4" align="center">
                Canciones
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default NavBar;
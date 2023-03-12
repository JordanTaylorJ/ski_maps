import React, {useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom";


const Navbar = () => {

    const {user, setUser} = useContext(UserContext);
    const nav = useNavigate();

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => setUser(""))
        nav("/login");
    }

    return(
        <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component={Link} to=''
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Arial',
                fontWeight: 1000,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Ski Colorado
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  component={Link} to='/resorts'
              >Resorts
              </Button>

            </Box>
            { user ? (
              <>
                <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  component={Link} to='/bookmarks'
                >Bookmarked Resorts
                </Button> 
                <Button
                  onClick={handleLogout}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                > Logout
                </Button>
              </>
              ) : (
                <Button
                component={Link} to='/login'
                sx={{ my: 2, color: 'white', display: 'block' }}
            > Login
            </Button>
              )}
            <Box sx={{ flexGrow: 0 }}>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
}

export default Navbar;
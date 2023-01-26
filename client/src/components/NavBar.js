import * as React from 'react'; 
import { useEffect, useState } from "react";
import {AppBar, Box, Button, Toolbar, IconButton, InputBase, Typography, Avatar} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'; 
import { styled, alpha } from '@mui/material/styles'; 
import { Link, useLocation, useNavigate } from "react-router-dom"; 



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

export default function NavBar() { 
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")))
  }, [location]) 

  const logout = () => {
    localStorage.clear()
    navigate("/SignIn")
  }


  return (
    <Box component="nav" sx={{ backgroundColor: "#63D40"}} >
      <AppBar >
        <Toolbar> 
            
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          > 
             <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </IconButton>
          <Button variant="h6" color="inherit" sx={{ flexGrow: 0.65 }} >Measurement</Button> 
          <Button variant="h6" color="inherit" sx={{ flexGrow: 0.65 }}>Calibration</Button> 
          {user ? 
          <>
          <Box>
            <Avatar alt={user.result.name} src={user.result.imageUrl}>{user?.result.name?.charAt(0)}</Avatar>
            <Typography
                variant="h6"
                style={{ marginLeft: "5px", marginTop: "3px" }}
              >
                {user?.result.name}
              </Typography>
              <Button onClick={logout}>Log out</Button>
          </Box>
          </> :
          <Button
          component={Link}
          variant="h4"
          to="/SignIn"
          sx={{ color: "#fff" }} 
          
        >
          Sign in
        </Button>
          }
        </Toolbar>
      </AppBar>
    </Box> 

  );
} 

//<Button variant="h6" color="inherit">Login</Button> 
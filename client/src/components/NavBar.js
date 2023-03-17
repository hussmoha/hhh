import * as React from "react";
import { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
 
  Typography,
  Avatar,
} from "@mui/material"; 
import { Link, useLocation, useNavigate } from "react-router-dom"; 



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
    <AppBar>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          
          position: "sticky",
          top: "-5px",
          zIndex: 2,
          height: "70px",
          minHeight: "70px",
          width: "calc(100% - 1.5rem)",
          backgroundColor: "#022c47",
          padding: "0 1rem",
          boxShadow: "0 0.125rem 0.25rem 0 rgb(0 0 0 / 11%)",
        }}
      >
        <Box
          component="nav"
          sx={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
            padding: ".25rem",
          }}
        > 
         <Typography 
          variant="h4" component={Link} to="/Form"
          sx={{ flexGrow: 0.5, display: "flex", justifyContent: "flex-start", color: "#fff", textDecoration: "none" }}
        >
          SPC Statistical Process Control
        </Typography>
         
          <Button component={Link} to="/MeasurementDatas" variant="h6" color="inherit">
            Measurements
          </Button>
          <Button variant="h6" color="inherit" >
            Calibrations
          </Button> 
          
          {user ? (
            <>
              <Box
                style={{
                  display: "flex",
                  float: "right",
                  justifyContent: "space-between",
                }}
              >
                <Avatar alt={user.result.name} src={user.result.imageUrl}>
                  {user?.result.name?.charAt(0)}
                </Avatar>
                <Typography
                  variant="h6"
                  style={{
                    marginLeft: "5px",
                    marginTop: "3px",
                    display: "block",
                  }}
                >
                  {user?.result.name}
                </Typography>
                <Button
                  style={{ marginLeft: "10px", display: "block" }}
                  color="inherit"
                  onClick={logout}
                >
                  Log out
                </Button>
              </Box>
            </>
          ) : null}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
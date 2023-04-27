import * as React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Search from "./Search";

export default function NavBar() {
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("profile"))
  );
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

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
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem component={Link} to="/Datas" onClick={handleMenuClose}>
              Measurement report
            </MenuItem>
            <MenuItem component={Link} to="/Chart" onClick={handleMenuClose}>
              SPC Chart
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>Calibrations</MenuItem>
            {user && (
              <>
                <MenuItem>
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
                </MenuItem>
                <MenuItem onClick={logout}>Log out</MenuItem>
              </>
            )}
          </Menu>

          <Typography
            variant="h4"
            component={Link}
            to="/Form"
            sx={{
              flexGrow: 0.5,
              display: "flex",
              justifyContent: "flex-start",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            SPC Statistical Process Control
          </Typography> 
          <Search />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

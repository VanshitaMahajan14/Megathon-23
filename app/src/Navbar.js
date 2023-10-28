import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import { color } from "@mui/system";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import List from '@mui/material/List';
import { Divider } from '@mui/material';
import PagesIcon from '@mui/icons-material/Pages';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


let theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#FFA500',
        },
        //   error: {
        //     main: red.A400,
        //   },
    },
});

export default function Navbar() {

    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/doctor');
    };

    const handleHome = () => {
       navigate('/');
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                {/* <div className="h-100 d-flex flex-column"> */}
                <div style={{ "height": "50px" }}>
                    <AppBar className="navbar navbar-expand-lg bg-light" style={{ backgroundColor: "#FFA500" }}>
                        <Container className="container-fluid">
                            <CssBaseline />
                            {/* <div style={{ display: "flex", alignItems: "center" }}>
                                <IconButton className="navbar-brand">
                                    <Typography variant="h4" fontFamily={["Aboreto", "cursive"].join(",")}>SLiMQ</Typography>
                                </IconButton>
                                <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </Button>
                            </div> */}
                            <Box className="collapse navbar-collapse" id="navbarScroll">
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <ListItemButton className="nav-item">
                                        <IconButton className="navbar-brand">
                                            <Typography variant="h4" fontFamily={["Aboreto", "cursive"].join(",")}>SLiMQ</Typography>
                                        </IconButton>
                                        <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </Button>
                                    </ListItemButton>

                                    <Box component="form" className="d-flex" role="search">
                                        <Button className="btn btn-outline" type="submit" align="center"><Typography variant="h5" fontFamily={["Lora", "serif"].join(",")} onClick={handleHome}>&nbsp;&nbsp;&nbsp;&nbsp;Home</Typography></Button>
                                    </Box>
                                    {/* <ListItemButton className="nav-item" > */}
                                    <Box component="form" className="d-flex" role="search">
                                        <Button className="btn btn-outline" type="submit" align="center"><Typography variant="h5" fontFamily={["Lora", "serif"].join(",")} onClick={handleLogout}>&nbsp;&nbsp;&nbsp;&nbsp;Logout</Typography></Button>
                                    </Box>
                                    {/* </ListItemButton> */}
                                </div>
                                {/* <div style={{ marginLeft: "auto" }}>
                                    <Box component="form" className="d-flex" role="search">
                                        <Button className="btn btn-outline" type="submit"><Typography variant="h6" fontFamily={["Lora", "serif"].join(",")}>Logout</Typography></Button>
                                    </Box>
                                </div> */}
                            </Box>
                        </Container>
                    </AppBar>

                </div>
                <Outlet />
            </ThemeProvider>
        </>
    );

}
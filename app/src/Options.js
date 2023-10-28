import * as React from 'react';
import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Navbar from './Navbar';
import AddData from './AddData';
import { useNavigate } from 'react-router-dom';

let theme = createTheme({
    palette: {
        primary: {
            main: '#000',
        },
        secondary: {
            main: '#FFA500',
        },
        background: {
            default: '#000', // Black background
        },
    },
});

export default function ProfilePage() {
    const navigate = useNavigate();
    
    const handleQuerySubmit = () => {
        navigate('/patient');
    }
    const handleAddSubmit = () => {
        navigate('/add');
    }

    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            {/* <Container component="main" backgroundColor="#000000"> */}
            <Container style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CssBaseline />
                <Box>
                    <Card style={{ 'borderRadius': '10px', 'padding': '50px', 'backgroundColor': '#ffffff' }}>
                        <CardActionArea className="text-center">
                            <div className="mt-3 mb-4" style={{ padding: '20px' }}>
                                <center><Avatar sx={{ width: 140, height: 140 }} /></center>
                            </div>
                            <div className='m-4'>
                                <center>
                                    <Typography variant="h3" component="div" fontFamily={["Lora", "serif"].join(",")}>Hello Doctor, Welcome Back!!</Typography>
                                </center>
                            </div>
                            <div className='m-4'>
                                <center>
                                    <Typography variant="h4" component="div" fontFamily={["Lora", "serif"].join(",")}>What do you wish to do today?</Typography>
                                </center>
                            </div>
                            <CardContent className="text-muted mb-4">
                                <div className="row" style={{ textAlign: "center" }}>
                                    <br />
                                    <div className="col">
                                        <Typography className="mb-1 h5" variant="h5" onClick={handleAddSubmit} fontFamily={["Lora", "serif"].join(",")}>Add to the Dataset</Typography>
                                        <div className="d-flex justify-content-center">
                                            <Button rounded size="large" className="m-2" style={{ backgroundColor: '#FFA500' }}>
                                                <Typography fontSize={20} fontFamily={["Lora", "serif"].join(",")} onClick={handleAddSubmit}>Add</Typography>
                                            </Button>
                                        </div>
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className="col">
                                        <Typography className="mb-1 h5" variant="h5" fontFamily={["Lora", "serif"].join(",")}>Query the database</Typography>
                                        <div className="d-flex justify-content-center">
                                            <Button rounded size="large" className="m-2" style={{ backgroundColor: '#FFA500' }}>
                                                <Typography fontSize={20} fontFamily={["Lora", "serif"].join(",")} onClick={handleQuerySubmit}>Query</Typography>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            </Container>
            {/* </Container> */}
        </ThemeProvider>
    );
}

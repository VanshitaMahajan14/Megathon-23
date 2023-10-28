import React from 'react';
import { Container, Paper, Typography, Button, Grid } from '@mui/material';
import Navbar from './Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#FFA500',
        },
    },
});

const Home = () => {
    const containerStyle = {
        display: 'flex',
        backgroundColor: 'black',
        height: '100vh',
    };

    const contentStyle = {
        flex: 1,
        padding: '40px 20px 20px 20px',
    };

    const buttonContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const handlePatient = () => {
        window.location.href = '/patient';
    };

    const handleDoctor = () => {
        window.location.href = '/doctor';
    };

    const textStyle = {
        fontFamily: 'Nunito, sans-serif',
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <Navbar />
                <Grid container style={containerStyle} sx={{'marginTop':'10px'}}>
                    <Grid item xs={12} style={contentStyle}>
                        <Paper style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
                            <center>
                            <Typography variant="h3" fontFamily={["Lora", "serif"].join(",")}>
                                <b>Welcome to SLiMQ - Your Smart Medical Query Companion</b>
                            </Typography>
                            <br />
                            <Typography variant="h6" style={{ padding: '1px' }} fontFamily={["Lora", "serif"].join(",")}>
                                At SLiMQ, we introduce a revolutionary concept in the world of healthcare technology. Our Smart Lightweight Medical Query System is a game-changer for doctors and patients alike. Designed to be incredibly lightweight and efficient, SLiMQ runs seamlessly on standard machines and edge devices, bringing healthcare right to your fingertips.
                            </Typography>
                            </center>
                        </Paper>
                        <br/>
                        <br/>
                        <br/>
                        <center>
                        <Button size="large" onClick={handlePatient} variant="contained" color="primary" style={{ backgroundColor: 'orange', color: 'white', margin: '10px' }}>
                            <Typography variant="h6" style={{ padding: '2px' }} fontFamily={["Lora", "serif"].join(",")}> Patient </Typography>
                        </Button>
                        <Button size="large" onClick={handleDoctor} variant="contained" color="primary" style={{ backgroundColor: 'orange', color: 'white', margin: '10px' }}>
                        <Typography variant="h6" style={{ padding: '2px' }} fontFamily={["Lora", "serif"].join(",")}> Doctor </Typography>
                        </Button>
                        </center>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    );
};

export default Home;

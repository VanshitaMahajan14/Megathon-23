import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { Formik } from "formik";

let theme = createTheme({
    palette: {
        primary: {
            main: '#FFA500',
        },
        secondary: {
            main: '#FFA500',
        },
        background: {
            default: '#000', // Black background
        },
        text: {
            primary: '#fff', // White text
        },
        error: {
            main: '#808080'
        }
    },
    typography: {
        htmlFontSize: 16,
        // fontFamily: ["Aboreto", "cursive"].join(",") 
    },
});

theme = responsiveFontSizes(theme);

const Login = () => {
    const navigate = useNavigate();

    const initialValuesLogin = {
        email: "",
        password: "",
    };

    const loginSchema = yup.object().shape({
        email: yup.string().email("Invalid email").required("Required"),
        password: yup.string().required("Required"),
    });

    const handleFormSubmit = (values) => {
        console.log(values);
        navigate('/options');
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Typography variant="h2" align="center" color="primary" fontFamily={["Aboreto", "cursive"].join(",")}>SLiMQ</Typography>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
                        color: '#fff', // White text
                        padding: '16px', // Add padding for better readability
                        borderRadius: '8px', // Add rounded corners
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Formik onSubmit={handleFormSubmit} initialValues={initialValuesLogin}>
                        {({
                            values,
                            errors,
                            touched,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                            setFieldValue,
                            resetForm,
                        }) => (
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.email}
                                    error={Boolean(touched.email) && Boolean(errors.email)}
                                    helperText={touched.email && errors.email}
                                    autoFocus
                                    InputProps={{
                                        style: { color: '#fff' }, // Set text color to white
                                    }}
                                    InputLabelProps={{
                                        style: { color: '#fff' }, // Set label text color to white
                                    }}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.password}
                                    error={Boolean(touched.password) && Boolean(errors.password)}
                                    helperText={touched.password && errors.password}
                                    InputProps={{
                                        style: { color: '#fff' }, // Set text color to white
                                    }}
                                    InputLabelProps={{
                                        style: { color: '#fff' }, // Set label text color to white
                                    }}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                </Grid>
                            </Box>
                        )}
                    </Formik>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Login;

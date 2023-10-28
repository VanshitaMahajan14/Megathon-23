import React, { useState } from 'react';
import { Container, Paper, Typography, Button, Grid, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './Navbar';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#FFA500',
        },
        background:{
            default: '#000', // change the caground color to black
        }
    },
});

const QueryForm = () => {
    const [queryQuestion, setQueryQuestion] = useState('');
    const [queryAnswer, setQueryAnswer] = useState('');
    const [outcome, setOutcome] = useState('');

    const handleQuerySubmit = () => {
        // You can perform your query processing here and update the 'outcome' state.
        // For this example, let's just set it to a placeholder string.
        setOutcome('Query result will be displayed here.');
    };

    return (
        <ThemeProvider theme={theme}>
            <Navbar/>
            <Container style={{ marginTop: '50px'}}>
                <Paper style={{ padding: '20px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Enter your question"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={20}
                                value={queryQuestion}
                                onChange={(e) => setQueryQuestion(e.target.value)}
                            />
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={handleQuerySubmit}
                                style={{ marginTop: '10px' }}
                            >
                                Submit Query
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                    label="Enter your answer to the question"   
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    rows={20}
                                    value={queryAnswer}
                                    onChange={(e) => setQueryAnswer(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </ThemeProvider>
    );
};

export default QueryForm;

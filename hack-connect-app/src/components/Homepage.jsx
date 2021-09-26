import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link, Redirect } from 'react-router-dom';
import { Checkbox } from '@material-ui/core';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import './css/Homepage.css'
import User from './User';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 20,
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

// const StyledInputBase = useStyles();

const Homepage = () => {

    const classes = useStyles();

    const [user, newUser] = useState([
        {
            id: 1,
            name: 'Eduardo',
        },
        {
            id: 2,
            name: 'Giang',
        },
        {
            id: 3,
            name: 'Giang',
        },
        {
            id: 4,
            name: 'Giang',
        },
        {
            id: 4,
            name: 'Giang',
        },
        {
            id: 4,
            name: 'Giang',
        },
        {
            id: 4,
            name: 'Giang',
        },
        {
            id: 4,
            name: 'Giang',
        },
    ]);

    return (
        <Container component="main"  className={classes.root}>
            <div>
                <button id="homeButton">
                    Filter
                </button>

                <Grid item xs={12}>
                    {user.map(user => (
                        <User title="Image goes here"/>
                    ))}
                </Grid>

            </div>
        </Container>
    )
}

export default Homepage;
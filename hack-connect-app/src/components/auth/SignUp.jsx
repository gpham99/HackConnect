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

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 30,
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

const SignUp = ({ setAlert, register, isAuthenticated }) => {
    const classes = useStyles();
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        description: ''
    })

    const { name, email, password, password2, description } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value})

    const onSubmit = async e => {
        e.preventDefault()
        register({ name, email, password })
    }

    // Redirect
    if ( isAuthenticated ) {
        if ( isAuthenticated ) {
            return < Redirect to="/login" />
        }
    }

    return (
    <Container component="main" maxWidth="xs" className={classes.root}>
        <CssBaseline />

        <div className={classes.paper}>    
            <Typography component="h1" variant="h5">
                Sign up
            </Typography>

            <form className={classes.form} onSubmit={e => onSubmit(e)}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                        autoComplete="name"
                        name="name"
                        variant="outlined"
                        // required
                        fullWidth
                        id="name"
                        label="Full Name"
                        autoFocus
                        value={name}
                        onChange = {e => onChange(e)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        // required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange = {e => onChange(e)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        value={password}
                        onChange = {e => onChange(e)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        fullWidth
                        name="password2"
                        label="Repeat Password"
                        type="password"
                        id="password2"
                        value={password2}
                        onChange = {e => onChange(e)}
                        />
                    </Grid>
                    
                    <Grid 
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                    >
                        <Typography component="h1" variant="h6">
                            Sign up
                        </Typography>
                    </Grid>

                    <Grid container rowSpacing={2} item xs={8}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Python" />
                            <FormControlLabel control={<Checkbox />} label="Node.js" />
                            <FormControlLabel control={<Checkbox />} label="Redis" />
                            <FormControlLabel control={<Checkbox />} label="Go" />
                            <FormControlLabel control={<Checkbox />} label="Java" />
                            <FormControlLabel control={<Checkbox />} label="C" />
                            <FormControlLabel control={<Checkbox />} label="C++" />
                            <FormControlLabel control={<Checkbox />} label="JavaScript" />
                        </FormGroup>
                    </Grid>

                    <Grid item xs={1}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Kotlin" />
                            <FormControlLabel control={<Checkbox />} label="Objecive-C" />
                            <FormControlLabel control={<Checkbox />} label="Swift" />
                            <FormControlLabel control={<Checkbox />} label="Rails" />
                            <FormControlLabel control={<Checkbox />} label="MySQL" />
                            <FormControlLabel control={<Checkbox />} label="AngularJS" />
                            <FormControlLabel control={<Checkbox />} label="React" />
                            <FormControlLabel control={<Checkbox />} label="PHP" />
                        </FormGroup>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        name="description"
                        label="Description"
                        type="text"
                        id="password2"
                        value={description}
                        onChange = {e => onChange(e)}
                        />
                    </Grid>

                </Grid>

                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                >
                Sign Up
                </Button>
                <Grid container justify="flex-end">
                <Grid item>
                    <Link to="/login" variant="body2">
                        Already have an account? Log in
                    </Link>
                </Grid>
                </Grid>
            </form>
        </div>
    </Container>
    );
}

export default SignUp
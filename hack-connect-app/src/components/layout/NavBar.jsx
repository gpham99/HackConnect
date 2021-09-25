import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from  '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    toolBar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    appBar: {
        position: "static",
        backgroundColor: '#3f51b5',
    }
}));

const NavBar = () => {
    const classes = useStyles()

    const authLinks = (
        <div>
            <Button component={Link} to="/edit-profile" color="inherit">Edit Profile</Button>
            <Button component={Link} to="/login" color="inherit">Logout</Button>
        </div>
    );

    return (
    <div className={classes.root}>
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" component={Link} to="/">
                    <Typography variant="h6" className={classes.title}>
                    HackConnect
                    </Typography>
                </IconButton>

                {/* { !loading && 
                    (<Fragment>{ isAuthenticated ? authLinks : null }</Fragment>)} */}
            </Toolbar>
        </AppBar>
    </div>
    )
}

export default NavBar
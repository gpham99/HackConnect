import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import profilepic from '../assets/profilepic.png';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import ProjectCard from './ProjectCard'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(5)
    },
    form: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: 20
    },
    title: {
        height: 50,
        backgroundColor: '#3f51b5',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 600
    },
    img: {
        width: '40%',
        maxHeight: 'auto',
        borderRadius: '50%'
    },
    textField: {
        width: '100%',
    },
    infoSection: {
        display: 'flex'
    },
    buttonsAndBiography: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    paper: {
        padding: 30,
    },
    bio: {
        fontStyle: 'italic',
    },
    skillsAndSocial: {
        fontWeight: 700,
        fontSize: '1rem'
    }
}))

const EditProfileSection = ({
}) => {
    const classes = useStyles();
    return (
        <Container className={classes.root} component="main" maxWidth="md">
            <CssBaseline></CssBaseline>

            <Grid container spacing={4} direction="column">

                <Grid item xs={12} sm={12}>
                    <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item className={classes.infoSection} xs={12} sm={5}>
                                    <Grid container>
                                        <Grid item>
                                            <img className={classes.img} src={profilepic} alt="Profile Pic"/>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item className={classes.infoSection} xs={12} sm={7}>
                                    <Grid container className={classes.buttonsAndBiography} spacing={2}>
                                        <Grid item>
                                            <Typography variant="h6" className={classes.bio} component="div">
                                                Biography of this person
                                            </Typography>
                                        </Grid>

                                        <Grid item>
                                            <Typography className={classes.skillsAndSocial}>Skills</Typography>
                                        </Grid>

                                        <Grid item>
                                            <Stack direction="row" spacing={1}>
                                                <Chip label="React" />
                                                <Chip label="HTML" />
                                                <Chip label="CSS" />
                                            </Stack>
                                        </Grid>

                                        <Grid item>
                                            <Typography className={classes.skillsAndSocial}>Socials</Typography>
                                        </Grid>

                                        <Grid item>
                                            {/* <LinkedInIcon></LinkedInIcon>
                                            <GitHubIcon></GitHubIcon> */}
                                        </Grid>

                                    </Grid>
                                </Grid>

                            </Grid>
                    </Paper>
                </Grid>

            <Grid item container spacing={3} className={classes.projectsHolder}>
                <Grid item xs={7} sm={4}>
                    <Typography className={classes.title}>PROJECTS</Typography>
                </Grid>

                <Grid item xs={12} sm={12} container spacing={2}>
                    <Grid item sm={4} xs={12}>
                        <ProjectCard>
                        </ProjectCard>
                    </Grid>

                    <Grid item sm={4} xs={12}>
                        <ProjectCard>
                        </ProjectCard>
                    </Grid>

                    <Grid item sm={4} xs={12}>
                        <ProjectCard>
                        </ProjectCard>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
            
        </Container>
    )
}

export default EditProfileSection
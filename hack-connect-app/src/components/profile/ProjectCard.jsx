import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import project_photo from '../assets/project_photo.jfif'

export default function ActionAreaCard() {
return (
<Card sx={{ }}>
    <CardActionArea>
    <CardMedia
        component="img"
        height="140"
        image={project_photo}
        alt="project photo"
    />
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Psychopathology Assistant
        </Typography>
        <Typography variant="body2" color="text.secondary">
        An intelligent assistant platform to track psychopathology patients responses during face-to-face and remote sessions, by facial expression tracking and emotions recognition on an embedded device.
        </Typography>
    </CardContent>
    </CardActionArea>
</Card>
);
}
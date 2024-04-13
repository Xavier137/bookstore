import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Book14() {
  return (
    <Card sx={{ maxWidth: 345, ml: '50px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image="https://a.storyblok.com/f/95452/2000x1000/b1234b33d1/things-fall-apart-cover.jpg/m/1000x1000"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Things Fall Apart
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Things Fall Apart is the debut novel of Nigerian author Chinua 
        Achebe first published in 1958. 
        It depicts the events of pre-colonial life in Igboland .
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
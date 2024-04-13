import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Book5() {
  return (
    <Card sx={{ maxWidth: 345, ml: '50px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZwkSs03XeYo9m016yeg-0oG82H6BLuJqzDhFDDhl0g&s"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Phrase Atose Book
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A phrase book or phrasebook is a collection of ready-made phrases, 
        usually for a foreign language along with a translation, 
        indexed and often in the form of questions and answers.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
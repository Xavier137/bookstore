import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Book4() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image="https://images.blinkist.io/images/books/51016e81e4b0991857b9260f/1_1/250.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ominivores Dilemma
        </Typography>
        <Typography variant="body2" color="text.secondary">
        In this groundbreaking book, one of America's most fascinating,
         original, and elegant writers turns his own omnivorous mind to
          the seemingly straightforward 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
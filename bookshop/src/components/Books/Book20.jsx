import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Book20() {
  return (
    <Card sx={{ maxWidth: 345, ml: '50px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347741128i/563722.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          TOGATHERNESS
        </Typography>
        <Typography variant="body2" color="text.secondary">
        In the small Nigerian village of Keti live Mamo and LaMamo, 
        twin sons of a domineering father
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Book2() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image="https://images.blinkist.io/images/books/5420831a63656400089f0000/1_1/250.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        The Immortal Life of Henrietta Lacks
        </Typography>
        <Typography variant="body2" color="text.secondary">
        NEW YORK TIMES BESTSELLER • “
        The story of modern medicine and bioethics—and, indeed,
         race relations—is refracted beautifully, and movingly.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
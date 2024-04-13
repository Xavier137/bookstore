import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Book15() {
  return (
    <Card sx={{ maxWidth: 345, ml: '50px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuWQNsufjD-YkU9fGc_WDq9qZQTmN_Zs4vvdAzB1YZwQ&s"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Kintu
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Kintu follows the misfortunes of the Kintu clan more than 250 years ago, 
        blending Ganda oral tradition, forms of myth,
         folktale and history with biblical elements
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
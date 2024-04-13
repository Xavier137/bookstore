import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Book10() {
  return (
    <Card sx={{ maxWidth: 345, ml: '50px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image="https://media.karousell.com/media/photos/products/2023/12/20/the_river_between_book_1703060647_47139b26.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          The River Between
        </Typography>
        <Typography variant="body2" color="text.secondary">
        It tells the story of the separation of two neighbouring 
        villages of Kenya caused by differences in faith set in the
         decades of roughly the early 20th century
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
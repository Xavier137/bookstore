import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Book6() {
  return (
    <Card sx={{ maxWidth: 345, ml: '50px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image="https://m.media-amazon.com/images/I/41w7pq5SNdL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_PIStarRatingFOURANDHALF%2CBottomLeft%2C360%2C-6_SR600%2C315_ZA298%2C445%2C290%2C400%2C400%2CAmazonEmberBold%2C12%2C4%2C0%2C0%2C5_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Wizard The Crow
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The story is set in the imaginary Free Republic of Aburĩria, 
        autocratically governed by one man, known only as the Ruler.        
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">buy</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
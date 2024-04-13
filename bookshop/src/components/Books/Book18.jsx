import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Book18() {
  return (
    <Card sx={{ maxWidth: 345, ml: '50px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6FdzajmS3CI-P53s7XCtLItoknDthP5j8mXjPUE-KTQ&s"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          OUR LAIDY OF THE NILE
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The story is about life at a Catholic boarding secondary school
         in Nyambinombe District, Rwanda, circa 1980, 
         prior to the Rwandan genocide of 1994.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">BUY</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
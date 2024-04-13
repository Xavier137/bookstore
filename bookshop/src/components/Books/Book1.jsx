import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Book1() {
  return (
    <Card sx={{ maxWidth: 345, ml: '50px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRI3E4nEGAA9byAz_7IOSi7G9xvPSzUYYApMKcNtV-Nw&s"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        DRY DESERTION
        </Typography>
        <Typography variant="body2" color="text.secondary">
        "The Dry Deserted Desert" ... A scientist studying the Sahara desert
         survives a sandstorm and cactus encounter,
          leading to a promotion and newfound knowledge. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Book7() {
  return (
    <Card sx={{ maxWidth: 345, ml: '50px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ZtITOp-roqJV6EcA0To-kF3WosKsNP6VsWoKsfep5Q&s"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          A Grain Of Wheat
        </Typography>
        <Typography variant="body2" color="text.secondary">
         A Grain of Wheat is a historical novel written by 
         Kenyan novelist Ngũgĩ wa Thiong'o, first published as part
         of the influential Heinemann African Writers
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
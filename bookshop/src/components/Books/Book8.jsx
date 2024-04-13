import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Book8() {
  return (
    <Card sx={{ maxWidth: 345, ml: '50px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvJOJnp-HlwJ--1MMawD3k8Zn4j8iNYlE_7USyjkoZdw&s"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Behold The Dreamers
        </Typography>
        <Typography variant="body2" color="text.secondary">
        This is a story of immigration, illegal trying to be legal. 
        It is a story that puts the reader in the awkward position 
        of caring about a person in a difficult 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
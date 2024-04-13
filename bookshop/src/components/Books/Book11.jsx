import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Book11() {
  return (
    <Card sx={{ maxWidth: 345, ml: '50px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image="https://m.media-amazon.com/images/I/51KS4TT8-0L._AC_UF1000,1000_QL80_.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Coming Soon
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Find Coming Soon Book stock images in HD and millions
         of other royalty-free stock photos, illustrations and
          vectors in the Shutterstock collection.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
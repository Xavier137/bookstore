import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Book13() {
  return (
    <Card sx={{ maxWidth: 345, ml: '50px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image="https://godsmercybookshop.com/uploads/images/202312/img_1920x_656b8f0fca0969-93578004-91474860.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Weep No Child
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Weep Not, Child is a 1964 novel by Kenyan author Ngũgĩ wa Thiong'o. 
        It was his first novel, published in 1964 
        under the name James Ngugi.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
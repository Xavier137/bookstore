import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Book16() {
  return (
    <Card sx={{ maxWidth: 345, ml: '50px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ98g2DYw77SyHZJ9MIFLwkKc9FcGdmm9qAJZ1KKndb4A&s"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          The Bride Price
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Buchi Emecheta's novel The Bride Price takes us back to Nigeria!
           It tells the tragic story of Aku-nna, a city girl,
            whose childhood in Lagos is cut short by the unexpected death of her father
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
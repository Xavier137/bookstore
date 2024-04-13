import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Book3() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYrVyFcUPjwaq-zhKn8yA1jiIvx15AUpiTN9RHnR-cGQ&s"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Desertion
        </Typography>
        <Typography variant="body2" color="text.secondary">
        “Desertion” by Clifford Simak. F O U R men, two by two, 
        had gone into the howling maelstrom that was. 
        Jupiter and had not returned.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
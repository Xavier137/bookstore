import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Book9() {
  return (
    <Card sx={{ maxWidth: 345, ml: '50px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF632zzym-BIKeF-c-9xgWALIU6OCaUrsBB_PvmZHKvA&s"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Gravel Heart
        </Typography>
        <Typography variant="body2" color="text.secondary">
         27 Mar 2022 — In Gravel Heart, Salim escapes from difficult domestic
         circumstances to London, his exodus funded by
          Uncle Amir who has made good in the gravel Heart
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
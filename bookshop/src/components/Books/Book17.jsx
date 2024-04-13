import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Book17() {
  return (
    <Card sx={{ maxWidth: 345, ml: '50px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image="https://dispatch.barnesandnoble.com/content/dam/ccr/bnstores/homeandgifts/topnav-promopod-images/2023/PROD-28562_Vday_YA_Flyout_12-26.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        A CURSE FOR TRUE LOVE
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Blood will be shed, hearts will be stolen,
         and true love will be put to the test in
          A Curse for True Love,
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
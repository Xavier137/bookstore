import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Book12() {
  return (
    <Card sx={{ maxWidth: 345, ml: '50px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image="https://kibangabooks.com/wp-content/uploads/2023/11/Petals-of-Blood-book-by-Ngugi-wa-Thiongo-Author-Chinua-Achebe-Moses-Isegawa1679945567.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Petals Of Blood
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Petals of Blood is a novel written by Ngũgĩ wa Thiong'o
         and first published in 1977. Set in Kenya just after independence,
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
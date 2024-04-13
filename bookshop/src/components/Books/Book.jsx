// ./Books/Book.js
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Book = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 345, ml: "50px" }}>
        <CardMedia
          component="img"
          alt="Book Cover"
          height="250"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq5RUbbw9l2qTQAPEE-lHNS-Hsk828vckVteo22WDFbw&s"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Book Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Book Description
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">buy</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Book;

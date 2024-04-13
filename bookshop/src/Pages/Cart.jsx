import React, { useState, useContext } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button, Grid } from '@mui/material';
import { CartContext } from './CartContext';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { addToCart, removeFromCart } = useContext(CartContext);

  const handleAddToCart = (book) => {
    addToCart(book);
    setCartItems([...cartItems, book]);
  };

  const handleRemoveFromCart = (index) => {
    removeFromCart(index);
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const handleCheckout = () => {
    // Here you can implement the checkout logic
    alert("Checkout completed. Thank you for your purchase!");
    setCartItems([]); // Clear the cart after checkout
  };

  const books = [
    { name: "Book 1", price: 10 },
    { name: "Book 2", price: 20 },
    { name: "Book 3", price: 30 },
    { name: "Book 4", price: 40 },
    { name: "Book 5", price: 50 },
    { name: "Book 6", price: 60 },
    { name: "Book 7", price: 70 },
    { name: "Book 8", price: 80 },
    { name: "Book 9", price: 90 },
    { name: "Book 10", price: 10 },
    { name: "Book 11", price: 100 },
    { name: "Book 12", price: 120 },
    { name: "Book 13", price: 130 },
    { name: "Book 14", price: 140 },
    { name: "Book 15", price: 150 },
    { name: "Book 16", price: 160 },
    { name: "Book 17", price: 170 },
    { name: "Book 18", price: 180 },
    { name: "Book 19", price: 190 },
    { name: "Book 20", price: 200 },
  ];

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Shopping List
      </Typography>
      <List>
        {books.map((book, index) => (
          <ListItem key={index}>
            <ListItemText primary={book.name} secondary={`Price: $${book.price}`} />
            <Button variant="contained" color="primary" onClick={() => handleAddToCart(book)}>
              Add to Cart
            </Button>
          </ListItem>
        ))}
      </List>
      <Typography variant="h6" gutterBottom>
        Cart
      </Typography>
      <List>
        {cartItems.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item.name} secondary={`Price: $${item.price}`} />
            <Button variant="contained" color="secondary" onClick={() => handleRemoveFromCart(index)}>
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
      <Grid container justifyContent="flex-end" spacing={2}>
        <Grid item>
          <Button variant="contained" color="primary" disabled={cartItems.length === 0} onClick={handleCheckout}>
            Checkout
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShoppingCart;

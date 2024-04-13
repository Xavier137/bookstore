import React, { useContext } from 'react';
import { Grid, Button } from '@mui/material';
import { CartContext } from '../Pages/CartContext';
import Book1 from './Books/Book1';
import Book2 from './Books/Book2';
import Book3 from './Books/Book3';
import Book4 from './Books/Book4';
import Book5 from './Books/Book5';
import Book6 from './Books/Book6';
import Book7 from './Books/Book7';
import Book8 from './Books/Book8';
import Book9 from './Books/Book9';
import Book10 from './Books/Book10';
import Book11 from './Books/Book11';
import Book12 from './Books/Book12';
import Book13 from './Books/Book13';
import Book14 from './Books/Book14';
import Book15 from './Books/Book15';
import Book16 from './Books/Book16';
import Book17 from './Books/Book17';
import Book18 from './Books/Book18';
import Book19 from './Books/Book19';
import Book20 from './Books/Book20';

const AllBooks = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const handleAddToCart = (itemName) => {
    addToCart(itemName);
  };

  const handleRemoveFromCart = (itemName) => {
    removeFromCart(itemName);
  };

  return (
    <div>
      <Grid container spacing={2} justifyContent="center">
        {/* Displaying 4 books per row */}
        <Grid item xs={6} sm={3}>
          <Book1 />
          <Button variant="contained" onClick={() => handleAddToCart('Book 1')}>
            Add to Cart
          </Button>
          <Button variant="contained" onClick={() => handleRemoveFromCart('Book 1')}>
            
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Book2 />
          <Button variant="contained" onClick={() => handleAddToCart('Book 2')}>
            Add to Cart
          </Button>
          <Button variant="contained" onClick={() => handleRemoveFromCart('Book 2')}>
            
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Book3 />
          <Button variant="contained" onClick={() => handleAddToCart('Book 3')}>
            Add to Cart
          </Button>
          <Button variant="contained" onClick={() => handleRemoveFromCart('Book 3')}>
          
          </Button>
          </Grid>
        <Grid item xs={6} sm={3}>
          <Book4 />
          <Button variant="contained" onClick={() => handleAddToCart('Book 4')}>
            Add to Cart
          </Button>
          <Button variant="contained" onClick={() => handleRemoveFromCart('Book 4')}>
            
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Book5 />
          <Button variant="contained" onClick={() => handleAddToCart('Book 5')}>
            Add to Cart
          </Button>
          <Button variant="contained" onClick={() => handleRemoveFromCart('Book 5')}>
            
          </Button>
          </Grid>
          <Grid item xs={6} sm={3}>
          <Book6 />
          <Button variant="contained" onClick={() => handleAddToCart('Book 6')}>
            Add to Cart
          </Button>
          <Button variant="contained" onClick={() => handleRemoveFromCart('Book 6')}>
            
          </Button>
      </Grid>
      <Grid item xs={6} sm={3}>
          <Book7 />
          <Button variant="contained" onClick={() => handleAddToCart('Book 7')}>
            Add to Cart
          </Button>
          <Button variant="contained" onClick={() => handleRemoveFromCart('Book 7')}>
            
          </Button>
     </Grid>
     <Grid item xs={6} sm={3}>
          <Book8 />
          <Button variant="contained" onClick={() => handleAddToCart('Book 8')}>
            Add to Cart
          </Button>
          <Button variant="contained" onClick={() => handleRemoveFromCart('Book 8')}>
          
          </Button>
      </Grid>
      <Grid item xs={6} sm={3}>
          <Book9 />
          <Button variant="contained" onClick={() => handleAddToCart('Book 9')}>
            Add to Cart
          </Button>
          <Button variant="contained" onClick={() => handleRemoveFromCart('Book 9')}>
            
          </Button>
      </Grid>
      <Grid item xs={6} sm={3}>
          <Book10 />
          <Button variant="contained" onClick={() => handleAddToCart('Book 10')}>
            Add to Cart
          </Button>
          <Button variant="contained" onClick={() => handleRemoveFromCart('Book 10')}>
            
          </Button>
      </Grid>
      <Grid item xs={6} sm={3}>
          <Book11 />
          <Button variant="contained" onClick={() => handleAddToCart('Book 11')}>
            Add to Cart
          </Button>
          <Button variant="contained" onClick={() => handleRemoveFromCart('Book 11')}>
            
          </Button>
      </Grid>
      <Grid item xs={6} sm={3}>
          <Book12 />
          <Button variant="contained" onClick={() => handleAddToCart('Book 12')}>
            Add to Cart
          </Button>
          <Button variant="contained" onClick={() => handleRemoveFromCart('Book 12')}>
            
          </Button>
      </Grid>
      <Grid item xs={6} sm={3}>
          <Book13 />
          <Button variant="contained" onClick={() => handleAddToCart('Book 13')}>
            Add to Cart
          </Button>
          <Button variant="contained" onClick={() => handleRemoveFromCart('Book 13')}>
            
          </Button>
      </Grid>
      <Grid item xs={6} sm={3}>
          <Book14 />
          <Button variant="contained" onClick={() => handleAddToCart('Book 14')}>
            add to cart
          </Button>
          <Button variant="contained" onClick={() => handleRemoveFromCart('Book 14')}>
            
          </Button>
      </Grid>
      <Grid item xs={6} sm={3}>
          <Book15 />
          <Button variant="contained" onClick={() => handleAddToCart('Book 15')}>
          Add to cart
          </Button>
          <Button variant="contained" onClick={() => handleRemoveFromCart('Book 15')}>
            Remove from Cart
          </Button>
      </Grid>
      <Grid item xs={6} sm={3}>
          <Book16 />
          <Button variant="contained" onClick={() => handleAddToCart('Book 16')}>
            Add to Cart
          </Button>
          <Button variant="contained" onClick={() => handleRemoveFromCart('Book 16')}>
          
          </Button>
      </Grid>
      <Grid item xs={6} sm={3}>
          <Book17 />
          <Button variant="contained" onClick={() => handleAddToCart('Book 17')}>
            Add to Cart
          </Button>
          <Button variant="contained" onClick={() => handleRemoveFromCart('Book 17')}>
            
          </Button>
      </Grid>
      <Grid item xs={6} sm={3}>
          <Book18 />
          <Button variant="contained" onClick={() => handleAddToCart('Book 18')}>
            Add to Cart
          </Button>
          <Button variant="contained" onClick={() => handleRemoveFromCart('Book 18')}>
            
          </Button>
      </Grid>
      <Grid item xs={6} sm={3}>
          <Book19 />
          <Button variant="contained" onClick={() => handleAddToCart('Book 19')}>
            Add to Cart
          </Button>
          <Button variant="contained" onClick={() => handleRemoveFromCart('Book 19')}>
            
          </Button>
      </Grid>
      <Grid item xs={6} sm={3}>
          <Book20 />
          <Button variant="contained" onClick={() => handleAddToCart('Book 20')}>
            Add to Cart
          </Button>
          <Button variant="contained" onClick={() => handleRemoveFromCart('Book 20')}>
            
          </Button>
      </Grid>
      </Grid>
    </div>
  );
};

export default AllBooks;

import React, { useContext } from 'react';
import { Grid, Typography } from '@mui/material';
import { CartContext } from '../Pages/CartContext';
import AllBooks from '../components/Allbooks'; // Corrected import
import './Product.css';

const Products = () => {
  const { cartItems } = useContext(CartContext);
  
  return (
    <div>
      <Typography variant="h1">Welcome To Our Products Page</Typography>
      <Typography variant="body1">Make Your Own Choice We're At Your Service</Typography>
      <AllBooks />
      <div>
        <Typography variant="h2">Shopping List</Typography>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

const Footer = () => {
  return (
    <div className="content">
      <footer style={{ marginTop: '50px', textAlign: 'center' }}>
        <div>
          <Typography variant="h3">About Us</Typography>
          <Typography variant="body1">Learn more about our company and what we offer.</Typography>
        </div>
        <div>
          <Typography variant="h3">Research</Typography>
          <Typography variant="body1">Explore our latest research findings.</Typography>
        </div>
        <div>
          <Typography variant="h3">References</Typography>
          <Typography variant="body1">Find references and resources related to our products.</Typography>
        </div>
        <div>
          <Typography variant="h3">Contact Us</Typography>
          <Typography variant="body1">Get in touch with us for any queries or feedback.</Typography>
        </div>
        <div>
          <Typography variant="h3">Social Media</Typography>
          <Typography variant="body1">Connect with us on social media:</Typography>
          {/* Social media links */}
        </div>
      </footer>
    </div>
  );
};

export default Products;

import React from 'react';
import { Container, Typography, Grid, TextField, Button } from '@mui/material';

const ContactUsPage = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        Adi Aristotle Bookshop is here to assist you. Whether you have a question about an order, need assistance finding a specific book, or want to inquire about our services for authors and publishers, feel free to reach out to us.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Contact Inforcmation
          </Typography>
          <Typography variant="body1" gutterBottom>
            Address: [Pamba, Soroti District,Uganda]
          </Typography>
          <Typography variant="body1" gutterBottom>
            Phone: +256414 343756, +256779550877, +256709144505
          </Typography>
          <Typography variant="body1" gutterBottom>
            Email: info@eBoks-EAc.com
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Send Us a Message
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label="Your Name" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Your Email" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Your Message"
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" fullWidth>
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUsPage;

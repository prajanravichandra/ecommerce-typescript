import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';
import "./navbar.css";

export const Home = () => {
  const products = [
    { title: 'Product 1', image: 'https://via.placeholder.com/300', description: 'Description of product 1' },
    { title: 'Product 2', image: 'https://via.placeholder.com/300', description: 'Description of product 2' },
    { title: 'Product 3', image: 'https://via.placeholder.com/300', description: 'Description of product 3' },
    { title: 'Product 4', image: 'https://via.placeholder.com/300', description: 'Description of product 4' },
    { title: 'Product 5', image: 'https://via.placeholder.com/300', description: 'Description of product 5' },
    { title: 'Product 6', image: 'https://via.placeholder.com/300', description: 'Description of product 6' },
  ];

  return (
    <div>
      <Carousel className='caro'>
        <div>
          <img className="carousel-img" src="https://th.bing.com/th/id/OIP.xung4mlBfvUR3RKzjnRY2AHaEK?w=303&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="carousel image 1" />
        </div>
        <div>
          <img className="carousel-img" src="https://th.bing.com/th/id/OIP.xung4mlBfvUR3RKzjnRY2AHaEK?w=303&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="carousel image 2" />
        </div>
        <div>
          <img className="carousel-img" src="https://th.bing.com/th/id/OIP.xung4mlBfvUR3RKzjnRY2AHaEK?w=303&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="carousel image 3" />
        </div>
      </Carousel>
      <h2>Products on Offer</h2>
      <Container>
        <Grid container spacing={4}>
          {products.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

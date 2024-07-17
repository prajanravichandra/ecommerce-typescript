import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import clothesdata from '../data/clothesdata.json';
const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = clothesdata.find((item) => item.id === parseInt(id!, 10));
  if (!product) {
    return <Typography variant="h4">Product not found</Typography>;
  }
  return (
    <Container>
      <Card>
        <CardMedia component="img" image={product.image} alt={product.name} />
        <CardContent>
          <Typography variant="h5">{product.name}</Typography>
          <Typography variant="body2" color="textSecondary">
            {product.description}
          </Typography>
          <Typography variant="h6">${product.price}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};
export default ProductDetails;

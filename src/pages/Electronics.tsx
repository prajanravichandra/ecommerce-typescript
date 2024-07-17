import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Container, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import electronics from '../data/electronics.json';
export {};
const Electronics: React.FC = () => {
  const navigate = useNavigate();

  const handleProductClick = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <Container>
      <Grid container spacing={4}>
        {electronics.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Card>
              <CardActionArea onClick={() => handleProductClick(item.id)}>
                <img src={item.image} alt={item.name} style={{ width: '100%' }} />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    ${item.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Electronics;

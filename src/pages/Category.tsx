import React from 'react';
import { Grid, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
export {};
const Root = styled('div')({
  flexGrow: 1,
  padding: '20px',
});

const StyledCard = styled(Card)({
  minHeight: '150px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
});

const StyledCardContent = styled(CardContent)({
  textAlign: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

const categories = [
  { name: 'Sports', image: 'https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg', route: '/sports' },
  { name: 'Clothes', image: 'https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg', route: '/clothes' },
  { name: 'Electronics', image: 'https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg', route: '/electronics' },
  { name: 'Shoes', image: 'https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg', route: '/shoes' },
];

const Category: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Root>
      <Grid container spacing={4}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={6} key={category.name}>
            <StyledCard style={{ backgroundImage: `url(${category.image})` }}>
              <CardActionArea onClick={() => navigate(category.route)}>
                <StyledCardContent>
                  <Typography variant="h5" component="div">
                    {category.name}
                  </Typography>
                </StyledCardContent>
              </CardActionArea>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Root>
  );
};

export default Category;

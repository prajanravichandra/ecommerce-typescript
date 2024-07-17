import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './navbar.css';
const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Ecommerce
        </Typography>
        <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
        <Button color="inherit" onClick={() => navigate('/category')}>Categories</Button>
        <Button color="inherit" onClick={() => navigate('/cart')}>Cart</Button>
        <Button color="inherit" onClick={() => navigate('/order')}>Order</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

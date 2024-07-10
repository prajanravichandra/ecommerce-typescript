import React from 'react';
import logo from './logo.svg';
import './App.css';

interface AppProps {
  name?: string;
}

export const App: React.FC<AppProps> = ({ name = "Gopal" }) => {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default App;

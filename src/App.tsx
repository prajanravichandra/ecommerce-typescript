import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
   <Home/>
   <Header/>
    </div>
  );
}

export default App;

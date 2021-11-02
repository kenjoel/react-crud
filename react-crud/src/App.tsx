import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Nav from "./components/Nav";
import { BrowserRouter, Route } from 'react-router-dom';
import Products from './admin/Products';
import Main from './main/Main';
BrowserRouter

function App() {
  return (
  
          <BrowserRouter>

          <Route path="/" component={Main}/>

          <Route path="admin/products" component={Products}/>

          </BrowserRouter>
          
     
  );
}

export default App;

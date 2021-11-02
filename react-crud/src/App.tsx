import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Products from './admin/Products';
import Main from './main/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Route path="/" exact component={Main}/>

      <Route path="/admin/products" component={Products}/>

    </BrowserRouter>
    </div>
          
     
  );
}

export default App;

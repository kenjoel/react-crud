import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Nav from "./components/Nav";
import { BrowserRouter, Route } from 'react-router-dom';
import Products from './admin/Products';
BrowserRouter

function App() {
  return (
    <div className="App">
      <Nav />
      <body>
    
    <div className="container-fluid">
      <div className="row">
        <Menu/>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <BrowserRouter>
          
          <Route path="admin/products" component={Products}/>

          </BrowserRouter>
          
        </main>
      </div>
    </div>
     
    </body>
    </div>
  );
}

export default App;

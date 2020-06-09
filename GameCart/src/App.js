import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <div className="container">
      <div className="row">
          <div className="col-md-12">
              <h1>React + Redux Game Cart Example</h1>
          </div>
      </div>

      <div className="row">
        <div className="col-md-8">
            <ProductList></ProductList>
        </div>

        <div className="col-md-4">
            <Cart></Cart>
        </div>
      </div>

      <footer>
          <small>
              made by <a href="">Md Julhas Hossain</a>, source code available on <a href="">github</a>
          </small>
      </footer>
    </div>
  );
}

export default App;

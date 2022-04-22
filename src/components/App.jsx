import React from 'react';
import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Wrapper from './containers/Wrapper';
import Card from './containers/Card';
import ProductList from './pages/home/ProductList';
import ShoppingCart from './pages/cart/ShoppingCart';

import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Card>
          <nav>
            <Link className="navigation-item" to="/">Home</Link>
            <Link className="navigation-item" to="/cart">Cart</Link>
            <Link className="navigation-item" to="/order">Order</Link>
            <Link className="navigation-item" to="/profile">Profile</Link>
          </nav>
        </Card>

        <Routes>
          <Route path="/" element={<Card><ProductList/></Card>}/>
          <Route path="/cart" element={<Card><ShoppingCart/></Card>}/>
          <Route path="/order" element={<Card>order</Card>}/>
          <Route path="/profile" element={<Card>profile</Card>}/>
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
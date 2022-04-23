import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import Wrapper from './containers/Wrapper';
import Card from './containers/Card';
import ProductList from './pages/home/ProductList';
import Cart from './pages/cart/Cart';
import Order from './pages/order/Order';
import Profile from './pages/profile/Profile';

import {
  createFetchProductsAction,
} from '../store/products/actions';

import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductsAction = createFetchProductsAction();
    dispatch(fetchProductsAction);
  }, []);

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
          <Route path="/cart" element={<Card><Cart/></Card>}/>
          <Route path="/order" element={<Card><Order/></Card>}/>
          <Route path="/profile" element={<Card><Profile/></Card>}/>
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
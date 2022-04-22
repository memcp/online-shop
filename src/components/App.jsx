import React from 'react';
import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Wrapper from './containers/Wrapper';
import Card from './containers/Card';

import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Card>
          <nav>
            <Link class="navigation-item" to="/">Home</Link>
            <Link class="navigation-item" to="/cart">Cart</Link>
            <Link class="navigation-item" to="/order">Order</Link>
            <Link class="navigation-item" to="/profile">Profile</Link>
          </nav>
        </Card>

        <Routes>
          <Route path="/" element={<Card>home</Card>}/>
          <Route path="/cart" element={<Card>cart</Card>}/>
          <Route path="/order" element={<Card>order</Card>}/>
          <Route path="/profile" element={<Card>profile</Card>}/>
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
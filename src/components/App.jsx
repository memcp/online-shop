import React from 'react';
import Wrapper from './containers/Wrapper';
import Card from './containers/Card';

import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Card>123</Card>
      </Wrapper>
    </div>
  );
}

export default App;
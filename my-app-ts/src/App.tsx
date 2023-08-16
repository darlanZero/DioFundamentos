import React from 'react';
import './App.css';
import { Card } from './components/Card';

function App() {
  return (
    <React.Fragment>
      <div>
        <h1>Hello World</h1>
        <Card />
        <Card />
        <Card />
      </div>

      <div>
        <h1>Footer</h1>
      </div>
    </React.Fragment>
  );
}

export default App;

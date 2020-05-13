import React from 'react';
import Routes from './routes';

import './global.css'

import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Routes></Routes>
    </div>
  );
}

export default App;

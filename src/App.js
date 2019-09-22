import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import HeaderLine from './HeaderLine/HeaderLine';

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderLine 
      header="HeaderLine"
      desc="This is the description of the Header that you are currently watching"
      />
    </div>
  );
}

export default App;

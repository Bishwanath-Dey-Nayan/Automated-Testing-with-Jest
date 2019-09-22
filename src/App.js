import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import HeaderLine from './HeaderLine/HeaderLine';


const tempArray = [{
  fName:'Joe',
  lName:'bloggs',
  email:'Joe@iubat.edu',
  age:24,
  onLineStatus:true
}]

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderLine 
      header="HeaderLine"
      desc="This is the description of the Header that you are currently watching"
      tempArray ={tempArray}
      />
    </div>
  );
}

export default App;

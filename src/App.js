import React from 'react';
import './App.css';
import Header from "./Header";
import Cards from "./Cards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    //BEM naming convention
    <div className="app">
     <Header />
     <Cards />
     <SwipeButtons />
    </div>
  );
}

export default App;

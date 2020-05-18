import React from 'react';

// components
// import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards"

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <div className="content">
        <Cards />
      </div>

      <Footer />
    </div>
  );
}

export default App;

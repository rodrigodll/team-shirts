import React, { Component } from 'react';

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards"

import './App.css';

class App extends Component {
  
  render() {

    return (
      <div className="App">
        <div className="container">
          <header className="App-header">
            <Header/>
          </header>
    
          <div className="content">
            <Cards data={this.props.data} />
          </div>
    
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

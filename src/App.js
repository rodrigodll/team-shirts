import React, { Component } from 'react';

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards"
import Search from "./components/Search";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: ''
    }
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }

  render() {

    return (
      <div className="App">
        <div className="container">
          <header className="App-header">
            <Header state={this}/>
            <Search
              filterText={this.state.filterText}
              filterUpdate={this.filterUpdate.bind(this)}
            />
          </header>
    
          <div className="content">
            <Cards 
              data={this.props.data} 
              filterText={this.state.filterText}
            />
          </div>
    
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

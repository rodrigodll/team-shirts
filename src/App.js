import React, { Component } from 'react';

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards"
import Search from "./components/Search";
import Details from "./components/Details";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      teamSelected: '',
      showDetails: false,
      colorPri: '',
      colorSec: ''
    }
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }

  selectTeam(id, boolean, colorPri, colorSec) {
    if(id !== '') {
      this.setState({
        teamSelected: [id - 1],
        colorPri: colorPri,
        colorSec: colorSec
      })
    }

    this.setState({
      showDetails: boolean
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
              selectTeam={this.selectTeam.bind(this)}
            />

            <Details 
              data={this.props.data}
              teamSelected={this.state.teamSelected}
              color={[
                this.state.colorPri,
                this.state.colorSec
              ]}
              showDetails={this.state.showDetails}
              selectTeam={this.selectTeam.bind(this)}
            />
          </div>
    
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

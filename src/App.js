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
        teamSelected: id,
        colorPri: colorPri,
        colorSec: colorSec
      })
    }

    this.setState({
      showDetails: boolean
    })
  }

  
  render() {
    console.log(this.state.teamSelected)

    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <Header state={this}/>
            <Search
              filterText={this.state.filterText}
              filterUpdate={this.filterUpdate.bind(this)}
            />
          </div>
        </header>

        <div className="banner-tv">
          <div className="container">
            <div className="banner-tv__anime">
              <div className="elem elem__2">Camisas</div>
              <div className="elem elem__1">
                <img src={process.env.PUBLIC_URL + '/soccer-player-blue.png'} alt="" width="250"/>
              </div>
              <div className="elem elem__3">De Time</div>
            </div>
          </div>
        </div>

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
    
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

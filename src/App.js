import React, { Component } from 'react';

// rotas
import { BrowserRouter as Router, Route }  from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';


// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Details from "./components/Details";

// pages
import Home from "./pages/home.js"

// css
import './style/App.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      theme: 'Dark'
    }
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }
  
  render() {
    console.log('this.state.teamSelected',this.state.teamSelected)

    const NoMatch = () => {
      alert()
    }

    // function NoMatch() {
    //   let location = useLocation();
    
    //   return (
    //     <div>
    //       <h3>
    //         No match for <code>{location.pathname}</code>
    //       </h3>
    //     </div>
    //   );
    // }
    

    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <Header
              state={this}
              filterText={this.state.filterText}
              filterUpdate={this.filterUpdate.bind(this)}
              ChangeTheme={this.state.theme}
            />
          </div>
        </header>

        <div className="container">
    
          <div className="content">
            <Router>
              <AnimatedSwitch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className="switch-wrapper"
              >

                <Route exact path='/team-shirts' component={() =>
                  <Home 
                    data={this.props.data}
                    filterText={this.state.filterText}
                  />} />

                <Route path='/:name' component={() => <Details data={this.props.data} />} />

                <Route path="*" component={() =>
                    <NoMatch />
                  } />
              </AnimatedSwitch>
            </Router>
          </div>
    
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

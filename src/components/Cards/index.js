import React, { Component } from "react";
import './Cards.scss';

import listTeams from './listTeams';
const list = listTeams

console.log(list)

export default class Cards extends Component {
    constructor(props) {
      super(props)

      // Define valores iniciais
      this.state = {
        name: '',
        data: list
      }
    }


    render() {
      const renderCard = this.state.data.map(item => {
        return(
          <div className="card">
            <h2>{item.shortName}</h2>
            <i className="fas fa-arrow-right"></i>
            <p>{item.material[0].name}</p>
            <img src={item.material[0].logo} alt={item.material[0].name} />
            <div className="pic" style={{backgroundImage: "url("+item.image+")"}}></div>
            <div className="social">
                {item.social[0].facebook ? <a href={item.social[0].facebook} target="_blank"><i className="fab fa-facebook-f"></i></a> : ''}
                {item.social[0].instagram ? <a href={item.social[0].instagram} target="_blank"><i className="fab fa-instagram"></i></a> : ''}
                {item.social[0].twitter ? <a href={item.social[0].twitter} target="_blank"><i className="fab fa-twitter"></i></a> : ''}
                {item.social[0].youtube ? <a href={item.social[0].youtube} target="_blank"><i className="fab fa-youtube"></i></a> : ''}
            </div>
            <button style={{backgroundColor: item.color}} onClick={() => alert('Mostrar detalhe da camisa')}>
            </button>
          </div>
        )
      })
  
      return (
        <div className="cards">
          {renderCard}
        </div>
      )
    }
}
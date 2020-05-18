import React, { Component } from "react";
import './Cards.scss';

import listTeams from './listTeams';
const list = listTeams

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
            <h2 className="card__name">{item.shortName}</h2>
            <button className="card__trigger" onClick={() => alert('Mostrar detalhe da camisa')}>
              <i className="fas fa-arrow-right"></i>
            </button>
            <p className="card__material">{item.material[0].name}</p>
            <img className="card__material-logo" src={item.material[0].logo} alt={item.material[0].name} />
            <div className="card__pic" style={{backgroundImage: "url("+item.image+")"}}></div>
            <div className="card__social">
                {item.social[0].facebook ? <a href={item.social[0].facebook} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a> : ''}
                {item.social[0].instagram ? <a href={item.social[0].instagram} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a> : ''}
                {item.social[0].twitter ? <a href={item.social[0].twitter} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a> : ''}
                {item.social[0].youtube ? <a href={item.social[0].youtube} target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a> : ''}
            </div>
            <button className="card__button" style={{backgroundColor: item.color}}>
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
import React from "react";
import { Link } from "react-router-dom";
import './Cards.scss';

// propriedas passadas ao component
// data: arquivo base de informações
// filterText: Parâmetro criado em App.js para uso em Search.js
export default ({ data, filterText}) => {
  console.log(data, filterText)
  const renderCard = data
  .filter(item => {
    // filtro na página com base no valor da busca
    // item.name: Fluminense | filterText: Fluminense 
    return  item.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 || 
            item.material.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 ||
            item.location.city.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
  })
  .map(item => {
    // Renderiza os cards na tela
    return(
      <div className="card" key={item.id}>
        <h2 className="card__name">{item.name}</h2>
        
        <Link to={`/${item.name.replace(/ /g, '-').toLowerCase()}`} className="card__trigger">
          <i className="fas fa-arrow-right"></i>
        </Link>

        <p className="card__material">{item.material.name}</p>
        <img className="card__logo" src={item.logo} alt={item.name} />
        {/* <img className="card__material-logo" src={item.material.logo} alt={item.material.name} /> */}
        <div className="card__pic" style={{backgroundImage: "url("+item.image+")"}}></div>
        <div className="card__social">
            {item.social.facebook ?
              <a href={item.social.facebook} target="_blank" rel="noopener noreferrer" style={{backgroundColor: item.color}}>
                <i className="fab fa-facebook-f">
                </i></a>: ''}
            {item.social.instagram ?
              <a href={item.social.instagram} target="_blank" rel="noopener noreferrer" style={{backgroundColor: item.color}}>
                <i className="fab fa-instagram"></i>
              </a>: ''}
            {item.social.twitter ?
              <a href={item.social.twitter} target="_blank" rel="noopener noreferrer" style={{backgroundColor: item.color}}>
                <i className="fab fa-twitter"></i>
              </a>: ''}
            {item.social.youtube ?
              <a href={item.social.youtube} target="_blank" rel="noopener noreferrer" style={{backgroundColor: item.color}}>
                <i className="fab fa-youtube"></i>
              </a>: ''}
        </div>
        <button
          className="card__button" 
          style={
            (item.colors.primary === "#000") ? {
              opacity: "0.8",
              backgroundColor: item.colors.primary
            } : { backgroundColor: item.colors.primary }
            }
          >
        </button>
      </div>
    )
  })

  return (
    <div className="cards">
      <div className="container">
        <div className="row">
          {renderCard}
        </div>
      </div>
    </div>
  )
}
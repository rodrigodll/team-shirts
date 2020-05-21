import React from "react";
import './Cards.scss';

// propriedas passadas ao component
// data: arquivo base de informações
// filterText: Parâmetro criado em App.js para uso em Search.js
export default ({ data, filterText, selectTeam }) => {

  const renderCard = data
  .filter(item => {
    // filtro na página com base no valor da busca
    // item.name: Fluminense | filterText: Fluminense 
    return item.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
  })
  .map(item => {
    // Renderiza os cards na tela
    return(
      <div className="card" key={item.id}>
        <h2 className="card__name">{item.name}</h2>
        <button className="card__trigger" onClick={() => selectTeam(item.id)}>
        {/* <button className="card__trigger"> */}
          <i className="fas fa-arrow-right"></i>
        </button>
        <p className="card__material">{item.material[0].name}</p>
        <img className="card__material-logo" src={item.material[0].logo} alt={item.material[0].name} />
        <div className="card__pic" style={{backgroundImage: "url("+item.image+")"}}></div>
        <div className="card__social">
            {item.social[0].facebook ?
              <a href={item.social[0].facebook} target="_blank" rel="noopener noreferrer" style={{backgroundColor: item.color}}>
                <i className="fab fa-facebook-f">
                </i></a>: ''}
            {item.social[0].instagram ?
              <a href={item.social[0].instagram} target="_blank" rel="noopener noreferrer" style={{backgroundColor: item.color}}>
                <i className="fab fa-instagram"></i>
              </a>: ''}
            {item.social[0].twitter ?
              <a href={item.social[0].twitter} target="_blank" rel="noopener noreferrer" style={{backgroundColor: item.color}}>
                <i className="fab fa-twitter"></i>
              </a>: ''}
            {item.social[0].youtube ?
              <a href={item.social[0].youtube} target="_blank" rel="noopener noreferrer" style={{backgroundColor: item.color}}>
                <i className="fab fa-youtube"></i>
              </a>: ''}
        </div>
        <button
          className="card__button" 
          style={
            (item.colors[0].primary === "#000") ? {
              opacity: "0.8",
              backgroundColor: item.colors[0].primary
            } : { backgroundColor: item.colors[0].primary }
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
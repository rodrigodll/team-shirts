import React from 'react'
import './Details.scss';

export default({data, teamSelected, selectTeam, showDetails, color}) => {

    if(teamSelected !== '') {
        // informações
        var renderInfos = teamSelected.map((id) => {
            const detail = data[id]

            return (
                <div className="shirt-info" key={id}>
                    <h4 className="shirt-info__material">
                        {detail.material[0].name}
                    </h4>
                    <h1 className="shirt-info__name">
                        {detail.fullName}
                    </h1>
                    <p className="shirt-info__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, iusto, aut harum voluptatibus voluptate blanditiis maxime ut, id necessitatibus architecto molestias delectus quod veritatis tempore atque iure unde nemo reprehenderit.
                    </p>
                </div>
            )
        })

        // Botões
        var renderActions = teamSelected.map((id) => {
            const detail = data[id]

            return (
                <div className="shirts-caltoaction" key={id}>
                    <a
                        href={detail.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{backgroundColor: detail.colors[0].secondary === '#fff' ? detail.colors[0].primary : detail.colors[0].secondary}}
                        className="shirts-caltoaction__button button--default">{detail.name}</a>
                    <a
                        href={detail.material[0].site}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{backgroundColor: detail.colors[0].secondary === '#fff' ? detail.colors[0].primary : detail.colors[0].secondary}}
                        className="shirts-caltoaction__button button--default">{detail.material[0].name}</a>
                </div>
            )
        })

        // Logos
        var renderLogos = teamSelected.map((id) => {
            const detail = data[id]

            // console.log()
            return (
                <div key={id} className="datail-logos">
                    {/* clube */}
                    <img className="datail-logos__logo" src={detail.logo} height="60" alt={detail.material[0].name} />
                    
                    {/* patrocinador */}
                    <img className="datail-logos__logo" src={detail.material[0].logo} height="60" alt={detail.material[0].name} />
                </div>
            )
        })

        // Camisa principal
        var renderShirt = teamSelected.map((id) => {
            const detail = data[id]

            // console.log()
            return (
                <div 
                    key={id} 
                    className="principal-shirt" 
                    style=
                        {{backgroundColor: 
                        detail.colors[0].secondary === "#fff" || detail.colors[0].secondary === "#000" ? 
                            detail.colors[0].primary: detail.colors[0].secondary,
                        }}
                >
                    <img className="principal-shirt__image" src={detail.shirt[0].home[0].principal} width="500" alt="" />
                    <div 
                        className={detail.colors[0].primary === '#000' ? 'principal-shirt__background opacity' : 'principal-shirt__background' } 
                        style={{ backgroundImage: "url("+detail.fans+")" }}
                    />
                </div>
            )
        })

        // camisas
        var renderShirts = teamSelected.map(id => {
            const detail = data[id].shirt[0]

            return (
                <div className="shirts-list d-flex flex-wrap" key={id}>
                    <div className="shirts-list__box active">
                        <div className="shirts-list__image">
                            <img src={detail.home[0].thumb} width="100" alt="" />
                        </div>
                        <span className="shirts-list__name">
                            {detail.home[0].name}
                        </span>
                    </div>
                    <div className="shirts-list__box">
                        <div className="shirts-list__image">
                            <img src={detail.homeaway[0].thumb} width="100" alt="" />
                        </div>
                        <span className="shirts-list__name">
                            {detail.homeaway[0].name}
                        </span>
                    </div>
                    <div className="shirts-list__box">
                        <div className="shirts-list__image">
                            <img src={detail.third[0].thumb} width="100" alt="" />
                        </div>
                        <span className="shirts-list__name">
                            {detail.third[0].name}
                        </span>
                    </div>
                </div>
            )
        })
    }
    console.log('color', color)

    return (
        <div>
            {/* {renderEffect} */}
            <div className="details__effects" onClick={() => selectTeam('', false, 'white', 'white')}>
                <div 
                    className={`effect__polygon effect__polygon--one ${showDetails ? 'show' : ''}`}
                    style={{background: `${color[1] === '#fff' ? color[0] : color[1]}`}}
                />
                <div
                    className={`effect__polygon effect__polygon--two ${showDetails ? 'show' : ''}`}
                />
            </div>

            <div className={showDetails ? 'details show' : 'details'}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="details__brands">
                                <button className="details__close" onClick={() => selectTeam('', false, 'white', 'white')}>
                                    <i className="fas fa-arrow-left"></i>
                                </button>
                                {/* {renderLogos} */}
                                {renderShirt}
                            </div>
                        </div>
                        <div className="col-lg-2"></div>
                        <div className="col-lg-5">
                            <div className="details__infos">
                                {renderInfos}
                            </div>
                            
                            <div className="details__calltoaction">
                                {renderActions}
                            </div>

                            <div className="details__shirts">
                                {renderShirts}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

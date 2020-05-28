import React from 'react'
import './Details.scss';

export default({data, teamSelected, selectTeam, showDetails, color}) => {

    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode === 27) {
            selectTeam('', false, 'white', 'white')
        }
    };
    
    if(teamSelected === '') {
        return(
            <div>
                <div className="details__effects">
                    <div className="effect__polygon effect__polygon--one "></div>
                    <div className="effect__polygon effect__polygon--two "></div>
                </div>
                <div className="details "></div>
            </div>
        )
    }

    // const findId = data.filter(item => item.id === teamSelected )

    // camisas
    var renderShirts = teamSelected.shirt.map((item, index) => {
        return (
            <div className={`shirts-list__box ${index === 0 ? 'active' : ''}`} key={index}>
                <div className="shirts-list__image">
                    <img src={item.thumb} width="100" alt="" />
                </div>
                <span className="shirts-list__name">
                    {item.name}
                </span>
            </div>
        )
    })

    var renderShirts2 = teamSelected.shirt.filter(item => item.model === 'home').map((item, index) => {
        return(
            <img 
                key={index}
                className="principal-shirt__image"
                src={item.principal}
                width="500"
                alt={item.name} />
        )
    })


    return (
        <>
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
                                <div
                                    className="principal-shirt" 
                                    style=
                                        {{backgroundColor: 
                                        teamSelected.colors.secondary === "#fff" || teamSelected.colors.secondary === "#000" ? 
                                            teamSelected.colors.primary: teamSelected.colors.secondary,
                                        }}>
                                        {renderShirts2}
                                    <div 
                                        className={teamSelected.colors.primary === '#000' ? 'principal-shirt__background opacity' : 'principal-shirt__background' } 
                                        style={{ backgroundImage: "url("+teamSelected.fans+")" }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2"></div>
                        <div className="col-lg-5">
                            <div className="details__infos">
                                <h4 className="shirt-info__material">
                                    {teamSelected.material.name}
                                </h4>
                                <div className="d-flex">
                                    <img src={teamSelected.logo} width="40" alt={teamSelected.logo} />
                                    <h1 className="shirt-info__name">
                                        {teamSelected.fullName}
                                    </h1>
                                </div>
                                <p className="shirt-info__description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, iusto, aut harum voluptatibus voluptate blanditiis maxime ut, id necessitatibus architecto molestias delectus quod veritatis tempore atque iure unde nemo reprehenderit.
                                </p>
                            </div>
                            
                            <div className="details__calltoaction">
                                <a
                                    href={teamSelected.site}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{backgroundColor: teamSelected.colors.secondary === '#fff' ? teamSelected.colors.primary : teamSelected.colors.secondary}}
                                    className="shirts-caltoaction__button button--default">{teamSelected.name}</a>
                                <a
                                    href={teamSelected.material.site}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{backgroundColor: teamSelected.colors.secondary === '#fff' ? teamSelected.colors.primary : teamSelected.colors.secondary}}
                                    className="shirts-caltoaction__button button--default">{teamSelected.material.name}</a>
                            </div>

                            <div className="details__shirts">
                                <div className="shirts-list d-flex flex-wrap">
                                    {renderShirts}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

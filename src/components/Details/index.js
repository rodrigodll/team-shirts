import React from 'react'
import { Link } from "react-router-dom";
import './Details.scss';

export default({data, selectTeam}) => {

    const nameTeam = window.location.pathname.toLowerCase().split('/')[1].replace(/-/g, ' ')
    const filterTeam = data.filter(item => item.name.toLowerCase() === nameTeam)
    
    if (filterTeam.length === 0) {
        return (
            <h1>Nenhum time encontrado</h1>
        )
    }
    

    const renderShirts = filterTeam[0].shirt.map((item, index) => {
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

    const renderShirts2 = filterTeam[0].shirt.filter(item => item.model === 'home').map((item, index) => {
        return(
            <img 
                key={index}
                className="principal-shirt__image"
                src={item.principal}
                width="500"
                alt={item.name} />
        )
    })

    setTimeout(() => {
        // alert()
        document.querySelector('.effect__polygon--one').classList.add('show');
        document.querySelector('.effect__polygon--two').classList.add('show');
        document.querySelector('.details').classList.add('show');
    }, 400);
    
    function close() {
        document.querySelector('.effect__polygon--one').classList.remove('show');
        document.querySelector('.effect__polygon--two').classList.remove('show');
        document.querySelector('.details').classList.remove('show');
    }

    return (
        <>
            <Link className="details__effects" to={{ pathname:'/team-shirts', state: filterTeam[0].id}}>
                <div 
                    className={`effect__polygon effect__polygon--one `}
                    style={{
                        background: `${filterTeam[0].colors.secondary === '#fff' ? filterTeam[0].colors.primary : filterTeam[0].colors.secondary}`}}
                />
                <div
                    className={`effect__polygon effect__polygon--two `}
                />
            </Link>

            <div className='details '>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="details__brands">
                                <Link to={{ pathname:'/team-shirts', state: filterTeam[0].id}} className="details__close">
                                    <i className="fas fa-arrow-left"></i>
                                </Link>
                                <div
                                    className="principal-shirt" 
                                    style=
                                        {{backgroundColor: 
                                        filterTeam[0].colors.secondary === "#fff" || filterTeam[0].colors.secondary === "#000" ? 
                                            filterTeam[0].colors.primary: filterTeam[0].colors.secondary,
                                        }}>
                                        {renderShirts2}
                                    <div 
                                        className={filterTeam[0].colors.primary === '#000' ? 'principal-shirt__background opacity' : 'principal-shirt__background' } 
                                        style={{ backgroundImage: "url("+filterTeam[0].fans+")" }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2"></div>
                        <div className="col-lg-5">
                            <div className="details__infos">
                                <h4 className="shirt-info__material">
                                    {filterTeam[0].material.name}
                                </h4>
                                <div className="d-flex">
                                    <img src={filterTeam[0].logo} width="40" alt={filterTeam[0].logo} />
                                    <h1 className="shirt-info__name">
                                        {filterTeam[0].fullName}
                                    </h1>
                                </div>
                                <p className="shirt-info__description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, iusto, aut harum voluptatibus voluptate blanditiis maxime ut, id necessitatibus architecto molestias delectus quod veritatis tempore atque iure unde nemo reprehenderit.
                                </p>
                            </div>
                            
                            <div className="details__calltoaction">
                                <a
                                    href={filterTeam[0].site}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{backgroundColor: filterTeam[0].colors.secondary === '#fff' ? filterTeam[0].colors.primary : filterTeam[0].colors.secondary}}
                                    className="shirts-caltoaction__button button--default">{filterTeam[0].name}</a>
                                <a
                                    href={filterTeam[0].material.site}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{backgroundColor: filterTeam[0].colors.secondary === '#fff' ? filterTeam[0].colors.primary : filterTeam[0].colors.secondary}}
                                    className="shirts-caltoaction__button button--default">{filterTeam[0].material.name}</a>
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

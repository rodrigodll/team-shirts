import React from 'react'
import './Details.scss';

export default({data, teamSelected}) => {
    
    // var renderDetails
    if(teamSelected !== '') {
        var renderDetails = teamSelected.map((id,abv) => {
            const detail = data[id]
            return (
            <div className="details" key={id}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="details__brands">
                                <img src={detail.shirt[0].home[0].principal} width="500" alt="" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="details__infos">
                                <h4 className="details__material--name">
                                    {detail.material[0].name}
                                </h4>
                                <h1 className="details__name">
                                    {detail.shortName}
                                </h1>
                                <p className="details__description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, iusto, aut harum voluptatibus voluptate blanditiis maxime ut, id necessitatibus architecto molestias delectus quod veritatis tempore atque iure unde nemo reprehenderit.
                                </p>
    
                                <div className="details__caltoaction">
                                    <a href={detail.site} className="details__button button--default">
                                        {detail.shortName}
                                    </a>
                                    <a href={detail.material[0].site} className="details__button button--default">
                                        {detail.material[0].name}
                                    </a>
                                </div>
    
                                <div className="list-shirts d-flex">
                                    <div className="list-shirts__box">
                                        <div className="list-shirts__image">
                                            <img src={detail.shirt[0].home[0].thumb} width="100" alt="" />
                                        </div>
                                        <span className="list-shirt__name">
                                            {detail.shirt[0].home[0].name}
                                        </span>
                                    </div>
                                    <div className="list-shirts__box">
                                        <div className="list-shirts__image">
                                            <img src={detail.shirt[0].homeaway[0].thumb} width="100" alt="" />
                                        </div>
                                        <span className="list-shirt__name">
                                            {detail.shirt[0].homeaway[0].name}
                                        </span>
                                    </div>
                                    <div className="list-shirts__box">
                                        <div className="list-shirts__image">
                                            <img src={detail.shirt[0].third[0].thumb} width="100" alt="" />
                                        </div>
                                        <span className="list-shirt__name">
                                            {detail.shirt[0].third[0].name}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        })
    }

    return (
        <div>
            <br/>
            {renderDetails}
        </div>
    )
}

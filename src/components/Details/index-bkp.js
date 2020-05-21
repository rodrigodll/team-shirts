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
                                    <div className="shirt-info">
                                        <h4 className="shirt-info__material">
                                            {detail.material[0].name}
                                        </h4>
                                        <h1 className="shirt-info__name">
                                            {detail.name}
                                        </h1>
                                        <p className="shirt-info__description">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, iusto, aut harum voluptatibus voluptate blanditiis maxime ut, id necessitatibus architecto molestias delectus quod veritatis tempore atque iure unde nemo reprehenderit.
                                        </p>
                                    </div>
            
                                    <div className="shirts-caltoaction">
                                        <a href={detail.site} className="shirts-caltoaction__button button--default">
                                            {detail.name}
                                        </a>
                                        <a href={detail.material[0].site} className="shirts-caltoaction__button button--default">
                                            {detail.material[0].name}
                                        </a>
                                    </div>
            
                                    <div className="shirts-list d-flex">
                                        <div className="shirts-list__box active">
                                            <div className="shirts-list__image">
                                                <img src={detail.shirt[0].home[0].thumb} width="100" alt="" />
                                            </div>
                                            <span className="shirts-list__name">
                                                {detail.shirt[0].home[0].name}
                                            </span>
                                        </div>
                                        <div className="shirts-list__box">
                                            <div className="shirts-list__image">
                                                <img src={detail.shirt[0].homeaway[0].thumb} width="100" alt="" />
                                            </div>
                                            <span className="shirts-list__name">
                                                {detail.shirt[0].homeaway[0].name}
                                            </span>
                                        </div>
                                        <div className="shirts-list__box">
                                            <div className="shirts-list__image">
                                                <img src={detail.shirt[0].third[0].thumb} width="100" alt="" />
                                            </div>
                                            <span className="shirts-list__name">
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

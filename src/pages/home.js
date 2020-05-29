import React from 'react';

// components
import Cards from "../components/Cards"

export default ({ data, filterText}) => {

    return (
        <>
            <div className="banner-tv">
                <div className="container">
                    <div className="banner-tv__anime">
                        <div className="elem elem__2">Camisas</div>
                            <div className="elem elem__1">
                                <img src={process.env.PUBLIC_URL + '/soccer-player-blue.png'} alt="" width="250"/>
                            </div>
                        <div className="elem elem__3">De Time</div>
                    </div>
                </div>
            </div>

            <p>{filterText}</p>
            <p>Busca por estados
                <button
                    className="filter__button"
                    onClick={() => filterText='Rio de Janeiro' }
                >Rio de Janeiro</button>
            </p>
            
            <div className="content">
                <Cards data={data} filterText={filterText} />
            </div>
        </>
    );
}

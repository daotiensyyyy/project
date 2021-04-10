import React from 'react';
import Banner from '../../../../components/Banner';
import ProductList from '../../components/ProductList';

Main.propTypes = {

};

function Main(props) {
    return (
        <div>
            <Banner />

            <div id="vegetable" className="vegetable">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage">
                                <h2> Our <strong className="llow">products</strong> </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <ProductList />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
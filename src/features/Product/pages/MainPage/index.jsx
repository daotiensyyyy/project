import React from 'react';
import { useSelector } from 'react-redux';
import Banner from '../../../../components/Banner';
import ProductList from '../../components/ProductList';
import './MainPage.scss';

function Main(props) {
    const products = useSelector(state => state.products);
    // console.log('list of products:', products);
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

                    <ProductList
                        productList={products}
                    />

                </div>
            </div>
        </div>
    );
}

export default Main;
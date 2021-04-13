import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Banner from '../../../../components/Banner';
import ProductList from '../../components/ProductList';
import './MainPage.scss';

function Main(props) {
    const products = useSelector(state => state.products);
    // console.log('list of products:', products);
    const history = useHistory();
    const handleOrderClick = (product) => {
        const productUrl = `/products/order/${product.id}`;
        // console.log("product url", productUrl);
        history.push(productUrl);
    }
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
                        onProductOrderClick={handleOrderClick}
                    />

                </div>
            </div>
        </div>
    );
}

export default Main;
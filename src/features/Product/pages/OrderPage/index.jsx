import React from 'react';
import PropTypes from 'prop-types';
import './OrderPage.scss';
import ProductForm from '../../components/ProductForm';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';


OrderPage.propTypes = {

};

function OrderPage(props) {
    const handleSubmit = (values) => {
        console.log("submit", values);
    };
    const { productId } = useParams();
    console.log("product id", productId);
    const orderedProduct = useSelector(state => {
        const foundProduct = state.products.find(x => x.id === +productId);
        return foundProduct;
    });

    const initialValues = orderedProduct;
    return (
        <div className="container">
            <div className="wrapper">
                <ProductForm onSubmit={handleSubmit}
                    initialValues={initialValues}
                />
            </div>
        </div>
    );
}

export default OrderPage;
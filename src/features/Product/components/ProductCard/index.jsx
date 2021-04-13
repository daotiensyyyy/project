import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.scss';
import { PRODUCT_CATEGORY } from '../../../../constants/global';

ProductCard.propTypes = {
    product: PropTypes.object,
};

ProductCard.defaultProps = {
    product: {},
}

function ProductCard(props) {
    const { product } = props;
    return (
        <div className="product-card">
            <img src={product.photo} className="card-img-top" alt={product.name} />
            <div className="product-card__body">
                <h5 className="product-card__title">{product.name}</h5>
                <p className="product-card__text">{product.categoryId}</p>
                <h5 className="product-card__price">{product.price}</h5>
                <a href="/#" className="product-card__btn btn btn-light">Order</a>
            </div>

        </div>
    );
}

export default ProductCard;
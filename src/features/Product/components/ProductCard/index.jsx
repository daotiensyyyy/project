import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.scss';
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
            <img src="" className="card-img-top" alt="#" />
            <div className="product-card__body">
                <h5 className="product-card__title">Card title</h5>
                <p className="product-card__text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <h5 className="product-card__price">15000000</h5>
                <a href="#" className="product-card__btn btn btn-light">Go somewhere</a>
            </div>

        </div>
    );
}

export default ProductCard;
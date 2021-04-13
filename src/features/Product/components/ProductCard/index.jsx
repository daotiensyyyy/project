import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.scss';

ProductCard.propTypes = {
    product: PropTypes.object,
    onOrderClick: PropTypes.func,
};

ProductCard.defaultProps = {
    product: {},
    onOrderClick: null
}

function ProductCard(props) {
    const { product, onOrderClick } = props;
    const handleOrderClick = () => {
        if (onOrderClick) {
            onOrderClick(product);
        }
    }
    return (
        <div className="product-card">
            <img src={product.photo} className="card-img-top" alt={product.name} />
            <div className="product-card__body">
                <h5 className="product-card__title">{product.name}</h5>
                <p className="product-card__text">{product.categoryId}</p>
                <h5 className="product-card__price">{product.price}</h5>
                <button className="product-card__btn btn btn-light"
                    onClick={handleOrderClick}
                >Order</button>
            </div>

        </div>
    );
}

export default ProductCard;
import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';

ProductList.propTypes = {
    productList: PropTypes.array,
    onProductEditClick: PropTypes.func,
    onProductRemoveClick: PropTypes.func,
};

ProductList.defaultProps = {
    productList: [],
    onProductEditClick: null,
    onProductRemoveClick: null,
}

function ProductList(props) {
    const { productList } = props;
    return (
        <div className="row">
            {productList.map(product => (
                <div key={product.id} className="col-xl-4 col-lg-4 col-md-4 col-sm-12 ">
                    <div className="vegetable_shop">
                        <ProductCard
                            product={product}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
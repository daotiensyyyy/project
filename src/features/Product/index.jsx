import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router';
import MainPage from './pages/MainPage';

Product.propTypes = {

};

function Product(props) {
    const match = useRouteMatch();
    // console.log('match', match);
    return (
        <Switch>
            <Route exact path={match.url} component={MainPage} />
        </Switch>
    );
}

export default Product;
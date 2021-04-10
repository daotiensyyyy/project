import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import NotFound from './components/NotFound';

const Product = React.lazy(() => import('./features/Product'));
function App() {
  return (
    <>
      <Suspense fallback={<div className="loader_bg">
        <div className="loader"><img src="images/loading.gif" alt="#" />....Please wait!</div>
      </div>}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/products" />
            <Route path="/products" component={Product} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;

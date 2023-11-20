import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Error from '../pages/Error'
import Imovel from '../pages/Imovel';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Perfil from '../pages/Perfil';
import PrivateRoute from '../components/PrivateRoute';
import ScrollToTop from '../components/StartTop';

const RouterApp = () => {

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Header />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/imovel/:slug' component={Imovel} />
                <Route path='/login' component={Login} />
                <Route path='/cadastro' component={Cadastro} />
                <PrivateRoute path='/perfil' component={Perfil} />
                <Route path='*' component={Error} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default RouterApp;

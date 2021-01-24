import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Auth from './containers/Auth/Auth';
import ProductList from './components/ProductList/ProductList';
import Ordering from './containers/Ordering/Ordering';
import Nawbar from './components/Nawbar/Nawbar';
import Profile from './components/Profile/Profile';
import './App.css';

const App = () => {
  return (
    <Layout>
      <Nawbar />
      <Switch>
        <Route path="/productList" component={ProductList} />
        <Route path="/ordering" component={Ordering} />
        <Route path="/profile" component={Profile} />
        <Route path="/" component={Auth} />
      </Switch>
    </Layout>
  );
};

export default App;

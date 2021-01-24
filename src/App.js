import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Auth from './containers/Auth/Auth';
import ProductList from './components/ProductList/ProductList';
import './App.css';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/productList" component={ProductList} />
        <Route path="/" component={Auth} />
      </Switch>
    </Layout>
  );
}

export default App;

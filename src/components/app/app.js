import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import AppHeader from '../appHeader';
import AppFooter from '../appFooter';
import {MainPage, GoodsPage, CoffeePage, ContactPage, CoffeeSinglePage} from '../pages';

import './app.sass';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/coffee' exact component={CoffeePage} />
          <Route path='/coffee/:id' render={
            ({ match }) => {
              const { id } = match.params;
              return <CoffeeSinglePage menuListItemId={id} />
            }
          } />
          <Route path='/goods/' exact component={GoodsPage} />
          <Route path='/coffee/' exact component={CoffeePage} />
          <Route path='/contacts/' exact component={ContactPage} />
        </Switch>
  
        <AppFooter />
      </div>
    );
  }
}

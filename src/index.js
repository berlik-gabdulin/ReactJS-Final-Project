import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './components/errorBoundry';
import {CoffeeService} from './services';
import CoffeeServiceContext from './components/coffeeServiceContext';
import store from './store';

import './index.sass';

const coffeeService = new CoffeeService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <CoffeeServiceContext.Provider value={coffeeService}>
                <Router>
                    <App />
                </Router>
            </CoffeeServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
, document.getElementById('react-root'));
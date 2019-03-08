import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom'
import history from './infra/history'
import './index.css';
import App from './App';
import Consulta from './components/consulta'
import * as serviceWorker from './serviceWorker';
import Login from './pages/login';

ReactDOM.render(
    (
        <Router history={history}>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/app" component={App}/>
                <Route path="/consulta" component={Consulta}/>
            </Switch>
        </Router>
    ),
    document.getElementById('root')
);
serviceWorker.unregister();

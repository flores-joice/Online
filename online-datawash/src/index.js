import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom'
import {history} from './infra/history'
import './index.css';
import * as serviceWorker from './serviceWorker';
import Login from './pages/login';
import App from './App';

ReactDOM.render(
    ( 
        <Router history={history}>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/" component={App}/>
                {/* <Route path="/consulta" component={ViewConsulta}/> */}
            </Switch>
        </Router>
    ),
    document.getElementById('root')
);
serviceWorker.unregister();
/**
 * app.jp
 * @author yukiusa
 */

import React from "react";
import ReactDOM from "react-dom";
import Layout from './pages/Layout'
import Archives from './pages/Archives'
import Feature from "./pages/Feature"
import PropTypes from 'prop-types';

import { BrowserRouter as Router , Route , Link } from "react-router-dom"

const app = document.getElementById('app');
ReactDOM.render(
    <Router>
        <div>
            <Route exact={true} path="/" component={Layout} />
            <Route path="/about" component={Archives} />
            <Route path="/feature" component={Feature} />
        </div>
    </Router> , app );
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

import { BrowserRouter , Route , Link } from "react-router-dom"

const app = document.getElementById('app');
ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact={true} path="/" component={Layout} />
            <Route path="/about/:id" component={Archives} />
            <Route path="/feature" component={Feature} />
        </div>
    </BrowserRouter> , app );
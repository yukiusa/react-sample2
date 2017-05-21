/**
 * app.jp
 * @author yukiusa
 */

import React from "react";
import ReactDOM from "react-dom";
import Layout from './pages/Layout'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app );
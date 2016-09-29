import React from "react";
import ReactDOM from "react-dom";

import Layout from "./pages/Layout";

import {Router, Route, IndexRoute, hashHistory} from 'react-router';

const app = document.getElementById('app');
ReactDOM.render(
	<Router history={hashHistory}>
	  <Route path="/" component={Layout}>
	  </Route>
	</Router>,
app);

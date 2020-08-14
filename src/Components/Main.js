import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import Home from './Home';
import Articles from './Articles';
import Footer from './Footer';
import MobileNavbar from './MobileNavbar';


const Main = () =>(
	<Router>
	<Switch>
	<Route exact path = "/" component={Home} />
	<Route exact path = "/Articles" component={Articles} />
	<Route exact path = "/MobileNavbar" component={MobileNavbar} />
	<Route path = "/Home" component={Home} />
	<Route path = "/Footer" component={Footer} />
	
	</Switch>
	</Router>
)

export default Main;

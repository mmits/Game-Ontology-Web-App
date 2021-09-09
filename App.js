import React from 'react';
import './index.css';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	withRouter
} from "react-router-dom";

import Top from './common/Top';
import GameMain from './game/GameMain';
import HomeMain from './home/HomeMain';
import Footer from './common/Footer';

class App extends React.Component{
	render(){
		return (
		<div>
			<Router>
				<div id = "body">
					<Top />
					<Switch>
						<Route exact path="/" component={HomeMain} />
						<Route exact path="/game" component={GameMain}  />
					</Switch>
					<Footer />
				</div>
			</Router>
		</div>
		);
	}
}

// ========================================

export default App;
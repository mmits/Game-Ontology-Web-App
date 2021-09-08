import React from 'react';
import './index.css';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import Top from './common/Top';
import GameMain from './game/GameMain';
import HomeMain from './home/HomeMain';
import Footer from './common/Footer';

class App extends React.Component{
	render(){
		return (
			<Router>
				<div id = "body">
					<Top />
					<Switch>
						<Route exact path="/"><HomeMain /></Route>
					</Switch>
					<Footer />
				</div>
			</Router>
		);
	}
}

// ========================================

export default App;
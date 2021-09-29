import React from 'react';
import './index.css';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import Top from './common/Top';
import SideNav from './common/SideNav';
import SideBlank from './common/SideBlank';
import GameMain from './game/GameMain';
import HomeMain from './home/HomeMain';
import SearchMain from './search/SearchMain';
import ListsMain from './lists/ListsMain';
import PlatformMain from './platform/PlatformMain';
import GenreMain from './genre/GenreMain';
import FrameworkPage from './static/FrameworkPage';
//import AboutPage from './static/AboutPage';
//import AdvSearchMain from './search/SearchMain';
import Footer from './common/Footer';

class App extends React.Component{
	componentDidMount(){
		document.body.style.backgroundColor = "#453769";
		document.title = "Game Documentation Ontology Official Web App"
  }
  //<Route exact path="/about" component={AboutPage}  />
	
	render(){
		return (
		<Router>

			<div id = "body">
				<Top />
				<div className = "main">
					<SideNav />
					<Switch>
						<Route exact path="/" component={HomeMain} />
						<Route exact path="/game/:id" component={GameMain}  />
						<Route exact path="/platform/:id" component={PlatformMain}  />
						<Route exact path="/genre/:id" component={GenreMain}  />
						<Route exact path="/search" component={SearchMain}  />
						<Route exact path="/lists" component={ListsMain}  />
						<Route exact path="/lists/:id" component={ListsMain}  />
						<Route exact path="/framework" component={FrameworkPage}  />
					</Switch>
					<SideBlank />
				</div>
				<Footer />
			</div>
		</Router>
		);
	}
}

// ========================================

export default App;
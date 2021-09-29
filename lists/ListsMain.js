import React from 'react';
import '../index.css';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import ListsHome from './ListsHome';
import ListsResults from './ListsResults';
import SearchResults from '../search/SearchResults';

class ListsMain extends React.Component{
	
	render(){
		return (
			<div className="page-background">
				<div className="block extra page-title">
					Lists
				</div>
				<div className="block extra">
					<Switch>
						<Route exact path="/lists">
							<ListsHome />
						</Route>
						<Route path="/lists/games">
							<SearchResults searchInput=".*" searchOption="Game" />
						</Route>
						<Route path="/lists/genres">
							<SearchResults searchInput=".*" searchOption="Genre" />
						</Route>
						<Route path="/lists/platforms">
							<SearchResults searchInput=".*" searchOption="Platform" />
						</Route>
					</Switch>
				</div>
			</div>
		);
	}
}

// ========================================

export default ListsMain;
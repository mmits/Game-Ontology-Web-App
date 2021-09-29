import React from 'react';
import '../index.css';

import {
	Switch,
	Route
} from "react-router-dom";

import SearchOptions from './SearchOptions';
import SearchResults from './SearchResults';

class SearchMain extends React.Component{
	
	render(){
		return (
			<div className="page-background">
				<Switch>
					<Route exact path="/search" component={SearchOptions}  />
					<Route exact path="/results" component={SearchResults}  />
				</Switch>				
			</div>
		);
	}
}

// ========================================

export default SearchMain;
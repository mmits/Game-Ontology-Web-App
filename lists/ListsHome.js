import React from 'react';
import '../index.css';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import ListsResults from './ListsResults';
import SearchResults from '../search/SearchResults';

class ListsHome extends React.Component{
	
	render(){
		return (
			<div>
				<Link to={"/lists/games"}>All Games</Link><br />
				<Link to={"/lists/genres"}>All Genres</Link><br />
				<Link to={"/lists/platforms"}>All Platforms</Link><br />
			</div>
		);
	}
}

// ========================================

export default ListsHome;
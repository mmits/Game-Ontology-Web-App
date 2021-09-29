import React from 'react';
import '../index.css';

import CategoryLink from './CategoryLink'

class SideNav extends React.Component{
	render(){
		var categories = [];
		for (var i = 0; i < 3; i++) {
			categories.push(<CategoryLink name = "Category" />);
		}
		
		return (
			<div className = "side">
				<CategoryLink name = "All Games" link = "/lists/games"/>
				<CategoryLink name = "All Genres" link = "/lists/genres"/>
				<CategoryLink name = "All Platforms" link = "/lists/platforms"/>
			</div>
		);
	}
}

// ========================================

export default SideNav;
import React from 'react';
import '../index.css';

import {
	//BrowserRouter as Router,
	Link
} from "react-router-dom";

class CategoryLink extends React.Component{
	render(){
		let link = this.props.link;
		let name = this.props.name;
		return (
			<div className = "side-link">
				<Link to={`${link}`}>{name}</Link>
			</div>
		);
	}
}

// ========================================

export default CategoryLink;
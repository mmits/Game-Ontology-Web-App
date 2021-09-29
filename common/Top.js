import React from 'react';
import '../index.css';

import {
	NavLink
} from "react-router-dom";

class Top extends React.Component{
	/*
	<li className="topnav-text">
		<label for="site-search">Search the site: </label>
		<input type="search" id="site-search" name="q" aria-label="Search through site content"></input>
		<button>Search</button>
	</li>
	*/
	render(){
		return (
			<React.Fragment>
				<div className = "top">
					<div className = "logo">
						<NavLink to="/">
							<p style={{fontSize:"20px"}}>The</p>GDO
						</NavLink>
					</div>

					<ul className = "top-nav">
						<li className="topnav-item"><NavLink to="/search">Search</NavLink></li>
						<li className="topnav-item"><NavLink to="/lists">Lists</NavLink></li>
						<li className="topnav-item"><NavLink to="/recent">Recent</NavLink></li>
					</ul>

					<ul className = "top-nav">
						<li className="extranav-item"><NavLink to="/about">About</NavLink></li>
						<li className="extranav-item"><NavLink to="/framework">Framework</NavLink></li>
					</ul>
				</div>
			</React.Fragment>
		);
	}
}

// ========================================

export default Top;
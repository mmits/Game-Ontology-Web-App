import React from 'react';
import '../index.css';

import {
	BrowserRouter as Router,
	Route,
	Link,
	NavLink
} from "react-router-dom";

class Top extends React.Component{
	render(){
		return (
			<React.Fragment>
				<div className = "top">
					<div className = "logo">
						<NavLink to="/">LOGO</NavLink>
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
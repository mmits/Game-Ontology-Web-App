import React from 'react';
import '../index.css';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

class Top extends React.Component{
	render(){
		return (
			<Router>
				<div className = "top">
					<div className = "logo">
						<Link to="/">LOGO</Link>
					</div>

					<ul className = "top-nav">
						<li className="topnav-item"><Link to="/search">Search</Link></li>
						<li className="topnav-item"><Link to="/lists">Lists</Link></li>
						<li className="topnav-item"><Link to="/recent">Recent</Link></li>
					</ul>

					<ul className = "top-nav">
						<li className="extranav-item"><Link to="/about">About</Link></li>
						<li className="extranav-item"><Link to="/framework">Framework</Link></li>
					</ul>
									
				</div>
			</Router>
		);
	}
}

// ========================================

export default Top;
import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

class Top extends React.Component{
	render(){
		return (
			<div className = "top">
				<div className = "logo">
					LOGO
				</div>
				<ul className = "top-nav">
					<li className="topnav-item"><a href="#">Search</a></li>
					<li className="topnav-item"><a href="#">Lists</a></li>
					<li className="topnav-item"><a href="#">Recent</a></li>
				</ul>
				<ul className = "top-nav">
					<li className="extranav-item"><a href="#">About</a></li>
					<li className="extranav-item"><a href="#">Framework</a></li>
				</ul>
			</div>
		);
	}
}

export default Top;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import image from './image.jpg';
import cover from './cover.jpg';

class GamePage extends React.Component{
	render(){
		return (
			<div id = "body">
				<Top />
				<Main />
				<Footer />
			</div>
		);
	}
}

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

class Main extends React.Component{
	render(){
		return (
			<div className = "main">
				<SideList />
				<Entry />
			</div>
		);
	}
}

class SideList extends React.Component{
	render(){
		return (
			<div className = "side">
				<ul>
					<li>Category 1</li>
					<li>Category 2</li>
					<li>Category 3</li>
					<li>Category 4</li>
					<li>Category 5</li>
					<li>etc etc</li>
				</ul>
			</div>
		);
	}
}

class SideBlank extends React.Component{
	render(){
		return (
			<div className = "side">
				<p></p>
			</div>
		);
	}
}

class Entry extends React.Component{
	render(){
		return (
			<div className = "entry-bg">
				<Contents />
				<div style={{clear:'both'}}>
					<RandGamesLeft /><RandGamesLeft />
				</div>
				<div style={{clear:'both'}}>
					<RandGamesRight /><RandGamesRight />
				</div>
			</div>
		);
	}
}

class Contents extends React.Component{
	render(){
		return(
			<div>
				<div className = "entry entry-container">
					<div className="entry">
						
					</div>
					<div className = "entry entry-data">
						
					</div>
				</div>
			</div>
		);
	}
}

class RandGamesLeft extends React.Component{
	render(){
		return(
			<div className = "entry entry-data" style={{float:'left'}}>
				<img src={cover} style={{float:'left'}}></img>
				<p style={{float:'left'}}>Info stuffs</p>
			</div>
		);
	}
}
class RandGamesRight extends React.Component{
	render(){
		return(
			<div className = "entry entry-data" style={{float:'right'}}>
				<img src={cover} style={{float:'right'}}></img>
				<p style={{float:'right'}}>Info stuffs</p>
			</div>
		);
	}
}

class Suggestions extends React.Component{
	render(){
		return(
			<div>
				<div className = "suggestion-items">
					<img src={image}></img>
				</div>
				<div className = "suggestion-items">
					<img src={image}></img>
				</div>
				<div className = "suggestion-items">
					<img src={image}></img>
				</div>
			</div>
		);
	}
}	

class Footer extends React.Component{
	render(){
		return (
			<div className = "footer">
				Copyrights etc etc
			</div>
		);
	}
}

// ========================================

ReactDOM.render(
  <GamePage />,
  document.getElementById('root')
);
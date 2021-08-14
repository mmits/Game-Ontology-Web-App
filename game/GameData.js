import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

import cover from '../images/cover.jpg';

class GameData extends React.Component{
	render(){
		return(
			<div>
				<div className="entry entry-title">
					<p>Metroid</p>
				</div>
				<div className = "entry entry-container">
					<div className="entry">
						<img src={cover}></img>
					</div>
					<div className = "entry data">
						<ul>
							<li>Genre: Platformer</li>
							<li>Release Date: June 8, 1986</li>
							<li>Platform: Nintendo Entertainment System</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default GameData;
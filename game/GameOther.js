import React from 'react';
import '../index.css';

import Suggestions from './Suggestions';

class GameOther extends React.Component{
	render(){
		return(
			<div className = "entry extra">
				<p style={{textAlign:'center'}}>Games in the category [Category]</p>
				<div className = "entry suggestions-container">
					<Suggestions />
					<Suggestions />
					<Suggestions />
				</div>
			</div>
		);
	}
}

export default GameOther;
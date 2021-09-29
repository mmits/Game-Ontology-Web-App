import React from 'react';
import '../index.css';

import Suggestions from './Suggestions';

class GameOther extends React.Component{
	render(){
		var suggestionsBlocks = [];
		for (var i = 0; i < 5; i++) {
			suggestionsBlocks.push(<Suggestions />);
		}
		console.log(this.props.category);
		return(
			<div className = "block extra">
				<p style={{textAlign:'center'}}>Games in the category {this.props.category}<br/><span style={{fontSize:"12px"}}>Images are placeholder!!</span></p>
				<div className = "suggestions-container">
					{suggestionsBlocks}
				</div>
			</div>
		);
	}
}

// ========================================

export default GameOther;
import React from 'react';
import '../index.css';

import Suggestions from './Suggestions';
import RandGameContent from '../home/RandGameContent';

class GameOther extends React.Component{
	render(){
		var suggestionsBlocks = [];
		for (var i = 0; i < 5; i++) {
			suggestionsBlocks.push(<Suggestions categoryID={this.props.categoryID} categoryName = {this.props.categoryName} type={this.props.type}/>);
		}		
		return(
			<div className = "block extra">
				<div style={{textAlign:'center'}}>
					Games in the category {this.props.categoryName}
				</div>
				<div className = "suggestions-container">
					{suggestionsBlocks}
				</div>
			</div>
		);
	}
}

// ========================================

export default GameOther;
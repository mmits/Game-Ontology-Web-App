import React from 'react';
import '../index.css';

import RandGameLeft from './RandGameLeft';
import RandGameRight from './RandGameRight';

class HomeRands extends React.Component{
	render(){
		var itemsLeft = [];
		var itemsRight = [];
		for (var i = 0; i < 3; i++) {
			itemsLeft.push(<RandGameLeft />);
			itemsRight.push(<RandGameRight />);
		}
		
		return (
			<div style={{paddingTop:"10px"}}>
				<div className = "block extra" style={{textAlign:"center", fontSize:"22px"}}>
					Various games to check out
				</div>
				<div className = "clear-flex" style={{marginTop:"-10px"}}>
					{itemsLeft}
				</div>
				<div className = "clear-flex">
					{itemsRight}
				</div>
			</div>
		);
	}
}

// ========================================

export default HomeRands;
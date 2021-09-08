import React from 'react';
import '../index.css';

import HomeDesc from './HomeDesc';
import RandGameLeft from './RandGameLeft';
import RandGameRight from './RandGameRight';

class HomeContent extends React.Component{
	render(){
		var itemsLeft = [];
		var itemsRight = [];
		for (var i = 0; i < 3; i++) {
			itemsLeft.push(<RandGameLeft />);
			itemsRight.push(<RandGameRight />);
		}
		
		return (
			<div className = "entry-bg">
				<HomeDesc />
				<div className = "entry-container">
					{itemsLeft}
				</div>
				<div className = "entry-container">
					{itemsRight}
				</div>
			</div>
		);
	}
}

// ========================================

export default HomeContent;
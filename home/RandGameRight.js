import React from 'react';
import '../index.css';

import RandGameContent from './RandGameContent';

class RandGameRight extends React.Component{
	
	/*state = {
		sideFlex : "row-reverse",
		sideFloat: "left"
	};*/
	render(){
		return(
			<RandGameContent flexDirection = "row-reverse" />
		);
	}
	
	/*
	render(){
		return(
			<div className = "block randgame-blocks" style={{float:'right'}}>
				<img alt="" src={cover} style={{float:'right'}}/>
				<div className = "block" style={{float:'left'}}>
					<RandGameContent />
				</div>
			</div>
		);
	}
	*/
}

// ========================================

export default RandGameRight;
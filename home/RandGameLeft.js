import React from 'react';
import '../index.css';

import RandGameContent from './RandGameContent';

class RandGameLeft extends React.Component{
	
	/*state = {
		sideFlex : "row",
		sideFloat: "left"
	};*/
	
	render(){
		return(
			<RandGameContent flexDirection = "row" />
		);
	}
	
	/*
	render(){
		return(
			<div className = "block randgame-blocks" style={{float:'left'}}>
				<img alt="" src={cover} style={{float:'left'}}/>
				<div className = "block" style={{float:'left'}}>
					<RandGameContent />
				</div>
			</div>
		);
	}
	*/
}

// ========================================

export default RandGameLeft;
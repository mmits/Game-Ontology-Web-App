import React from 'react';
import '../index.css';

import RandGameContent from './RandGameContent';

class RandGameRight extends React.Component{
	
	state = {
		sideFlex : "row-reverse",
		sideFloat: "right"
	};
	render(){
		return(
			<RandGameContent flexDirection = {this.state.sideFlex} floatDirection = {this.state.sideFloat}/>
		);
	}
	
	/*
	render(){
		return(
			<div className = "entry randgame-blocks" style={{float:'right'}}>
				<img alt="" src={cover} style={{float:'right'}}></img>
				<div className = "entry" style={{float:'left'}}>
					<RandGameContent />
				</div>
			</div>
		);
	}
	*/
}

// ========================================

export default RandGameRight;
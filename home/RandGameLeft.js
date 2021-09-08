import React from 'react';
import '../index.css';

import RandGameContent from './RandGameContent';

class RandGameLeft extends React.Component{
	
	state = {
		sideFlex : "row",
		sideFloat: "left"
	};
	render(){
		return(
			<RandGameContent flexDirection = {this.state.sideFlex} floatDirection = {this.state.sideFloat} />
		);
	}
	
	/*
	render(){
		return(
			<div className = "entry randgame-blocks" style={{float:'left'}}>
				<img alt="" src={cover} style={{float:'left'}}></img>
				<div className = "entry" style={{float:'left'}}>
					<RandGameContent />
				</div>
			</div>
		);
	}
	*/
}

// ========================================

export default RandGameLeft;
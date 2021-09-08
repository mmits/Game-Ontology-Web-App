import React from 'react';
import '../index.css';

import GameData from './GameData';
import GameOther from './GameOther';

class GameEntry extends React.Component{
	render(){
		return (
			<div className = "entry-bg">
				<GameData />
				<GameOther />
				<GameOther />
			</div>
		);
	}
}

// ========================================

export default GameEntry;
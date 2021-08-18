import React from 'react';
import '../index.css';

import SideList from '../common/SideList';
import GameEntry from './GameEntry';
import SideBlank from './SideBlank';

class GameMain extends React.Component{
	render(){
		return (
			<div className = "main">
				<SideList />
				<GameEntry />
				<SideBlank />
			</div>
		);
	}
}

export default GameMain;
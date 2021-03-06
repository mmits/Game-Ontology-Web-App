import React from 'react';
import {useParams } from "react-router-dom";
import '../index.css';

import GameData from './GameData';

function GameMain(){
	
	const { id } = useParams();
	
	return (
		<div className = "page-background">
			<GameData gameID = {id}/>
		</div>
	);
}

// ========================================

export default GameMain;
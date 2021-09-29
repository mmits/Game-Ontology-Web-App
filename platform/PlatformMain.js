import React from 'react';
import {useParams } from "react-router-dom";
import '../index.css';

import PlatformData from './PlatformData';
import PlatformGames from './PlatformGames';

function PlatformMain(){
	
	const { id } = useParams();
	
	return (
		<div className = "page-background">
			<PlatformData platformID = {id}/>
			<PlatformGames platformID = {id}/>
		</div>
	);
}

// ========================================

export default PlatformMain;
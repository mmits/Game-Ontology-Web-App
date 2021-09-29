import React from 'react';
import '../index.css';

import HomeRands from './HomeRands';
import HomeDesc from './HomeDesc';

class HomeMain extends React.Component{
	render(){
		return (
			<div className = "page-background">
				<HomeDesc />
				<HomeRands />
			</div>
		);
	}
}

// ========================================

export default HomeMain;
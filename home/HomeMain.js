import React from 'react';
import '../index.css';

import SideList from '../common/SideList';
import HomeContent from './HomeContent';

class HomeMain extends React.Component{
	render(){
		return (
			<div className = "main">
				<SideList />
				<HomeContent />
			</div>
		);
	}
}

// ========================================

export default HomeMain;
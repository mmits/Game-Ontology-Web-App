import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Top from './common/Top';
import GameMain from './game/GameMain';
import Footer from './common/Footer';

class App extends React.Component{
	render(){
		return (
			<div id = "body">
				<Top />
				<GameMain />
				<Footer />
			</div>
		);
	}
}

export default App;
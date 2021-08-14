import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

import image from '../images/image.jpg';

class Suggestions extends React.Component{
	render(){
		return(
			<div className = "suggestion-items">
				<img src={image}></img>
				Game Name
			</div>
		);
	}
}

export default Suggestions;
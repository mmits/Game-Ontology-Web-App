import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

class SideList extends React.Component{
	render(){
		return (
			<div className = "side">
				<ul>
					<li>Category 1</li>
					<li>Category 2</li>
					<li>Category 3</li>
					<li>Category 4</li>
					<li>Category 5</li>
					<li>etc etc</li>
				</ul>
			</div>
		);
	}
}

export default SideList;
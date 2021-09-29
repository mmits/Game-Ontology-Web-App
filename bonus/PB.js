import React from 'react';
import '../index.css';

import {
	Link
} from "react-router-dom";

import pimg from "../images/p.png";

class PB extends React.Component{
	componentDidMount() {
		document.body.style.backgroundColor = "black"
	}
	componentWillUnmount() {
		document.body.style.backgroundColor = "#453769"
	}
	render(){
		return(
			<div className = "ebg">
				<div className="et">
					<div className="pl"><Link to={`/`}>Polybius</Link></div>
				</div>
				<div className = "pbl clear-flex">
					<div className = "pbl">
						<img className = "img-large" alt="" src={pimg}/>
					</div>
					<div className = "pbl padded">
						Genre: S҉hoǫ%̵#la͡tfo̵(!̷$z̨le͡<br/>
						Release Date: 1́9̨81͢<br/>
						Platforms: A͢rc̕ade͟ ͟Mąc̷h̨i̸ne
					</div>
				</div>
				<div className = "pbl">
					In the twelfth volume of his Histories, Polybius defines the historian's job as the analysis of documentation, the review of relevant geographical information, and political experience. Polybius held that historians should only chronicle events whose participants the historian was able to interview, and was among the first to champion the notion of factual integrity in historical writing. In Polybius' time, the profession of a historian required political experience (which aided in differentiating between fact and fiction) and familiarity with the geography surrounding one's subject matter to supply an accurate version of events. 
				</div>
			</div>
			
		);
	}
}

// ========================================

export default PB;
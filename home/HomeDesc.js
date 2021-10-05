import React from 'react';
import '../index.css';

class HomeDesc extends React.Component{
	render(){
		return(
			<div>
				<div className = "block extra">
					<div className = "page-title" style={{textAlign:"center"}}>
						Welcome to the Game Documentation Ontology website!
					</div>
				</div>
				<div className = "block extra">
					<div className = "block">
						<p>This is an interactive web tool, made for the public archival and indexing for a variety of information realting to Video Games. As the name suggests, it's also powered entirely by an ontology, comprised of semantic data. <span style={{fontSize:"12px"}}>How modern!</span></p>
					</div>
					<div className = "block">
						To get started, you may use the tool's search function, or take a look at the randomized assortment of entries below.
					</div>
					
				</div>
			</div>
		);
	}
}

// ========================================

export default HomeDesc;
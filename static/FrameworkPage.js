import React from 'react';
import '../index.css';

class FrameworkPage extends React.Component{
	render(){
		return(
			<div className = "page-background">
				<div className = "block extra">
					<div className = "page-title" style={{textAlign:"center"}}>
						Framework information
					</div>
				</div>
				<div className = "block extra">
					<div className = "block">
						<p style={{marginBottom:"30px"}}><b>Quick version:</b> The application you're viewing right now was made possible thanks to the <b><a href="https://reactjs.org/">ReactJS</a></b> web app framework, and Apache Jena's SPARQL library <b><a href="https://jena.apache.org/documentation/fuseki2/">Apache Fuseki</a></b>.</p>
						
						<p><b>Long version:</b> At its base, this application runs on an <b>ontology</b> made from scratch. An ontology, in simple words, is a condensed network of data, with the purpose of documenting and connecting scattered knowledge, where the end result is a thorough explanation of a piece of information.</p>
						<p>The current ontology was dubbed <b>Game Documentation Ontology</b>, or GDO for short, as its contents comprise of various types of information regarding video games, ones that serve as identifiers for each video game that has been released since the beginning of computer-based entertainment. This information may be the name of a certain video game, its content genre, the platform where it was released, among others.</p>
						<p>This ontology was then uploaded as a SPARQL database to be used by <b>Apache Fuseki</b>, running on a Jena server, for running various queries and extract information. However, in order to create a more user-friendly approach to this query service, an online application front-end was to be constructed.</p>
						<p>This front-end was build from scratch (just like its linked ontology) using the popular web framework <b>ReactJS</b>. The application was built using an organized component structure, where every component serves as a single building block for each page. Pages presenting data extracted from the Apache Fuseki back-end use functions with <b>fetch</b> calls, using a saved SPARQL query, handled by the component internally.</p>
						<p>At its core, this application was made to be as simple to build and deploy as possible, to present an example of how anyone with intermediate coding experience can build their own ontology-based web application quickly. The application's source code package is also structured to be reusable with few changes, so if you the reader would like to try their hand at making a web app like this, the repo is available <b><a href="https://github.com/mmits/Game-Ontology-Web-App">here</a></b>.</p>
					</div>
				</div>
			</div>
		);
	}
}

// ========================================

export default FrameworkPage;
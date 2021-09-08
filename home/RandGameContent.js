import React from 'react';
import '../index.css';

import cover from '../images/cover.jpg';

class RandGameContent extends React.Component{
	
	constructor(props) {
		super(props);
		this.state = {
			name: []
		};
	}
	
	componentDidMount(){
	
		//var query ='PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>prefix MyOntology: <http://purl.org/net/MyOntology#>SELECT DISTINCT ?game ?x ?y ?label ?typeWHERE {?game rdf:type MyOntology:Game ;	?x ?y.	OPTIONAL{?y rdfs:label ?label.	?y rdf:type ?type.}}ORDER BY RAND()'
		var query ='PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>	PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>	PREFIX MyOntology: <http://purl.org/net/MyOntology#>	SELECT DISTINCT ?game ?label WHERE{?game rdf:type MyOntology:Game ;	rdfs:label ?label .	BIND(RAND() AS ?randomGame)}ORDER BY ?randomGame	LIMIT 1'

		var url = "http://localhost:3030/Test/query";
		var queryUrl = url + '?query=' + encodeURIComponent(query);
		
		var options = {
			method: 'POST',
			headers: {
				'Accept': 'application/sparql-results+json'
			}
		};
		
		var parsedObject;
		const response = fetch(queryUrl,options)
			.then(response => {
				return response.json();
			})
			.then(data => {
				parsedObject = data['results']['bindings'];
				console.log(data);
				console.log(parsedObject);
				for (var i = 0; i < parsedObject.length; i++) {
					var name = parsedObject[i]['label']['value'];
				}
				
				this.setState({
					name: name
				});
			})
			.catch(error => {
				console.log("Something went wrong!", error);
			});

		return response;
	}	
	
	render(){
		let gameName = <b>{this.state.name}</b>;
		
		let sideFlex = this.props.flexDirection;
		let sideFloat = this.props.floatDirection;
		return(
			<div className = "entry randgame-blocks" style={{flexDirection:sideFlex}}>
				<div className = "entry" style={{flexDirection:sideFlex}}>
					<img className = "img-thumb" alt="" src={cover}></img>
				</div>
				<div className = "entry" style={{float:'left'}}>
					{gameName}
				</div>
			</div>
		);
		
		/*
		return(
			<div className = "entry">
				<ul>{gameName}</ul>
			</div>
		);
		*/
	}
}

// ========================================

export default RandGameContent;
import React from 'react';
import '../index.css';

import {
	Link
} from "react-router-dom";

import image from '../images/image.jpg';

class Suggestions extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			id: "",
			name: "",
			cover: ""
		};
	}
	
	componentDidMount(){
		var type = this.props.type;
		var categoryID = this.props.categoryID;
		
		var query ='PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>	PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>	PREFIX schema: <http://schema.org/> PREFIX MyOntology: <http://purl.org/net/MyOntology#>	SELECT DISTINCT ?game ?label ?cover WHERE{?game MyOntology:'+type+' MyOntology:'+categoryID+'. ?game rdf:type MyOntology:Game ;	rdfs:label ?label ; schema:image ?cover .	BIND(RAND() AS ?randomGame)}ORDER BY ?randomGame	LIMIT 1'
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
					var gameURI = parsedObject[i]['game']['value'];
					var sub = gameURI.split("MyOntology#");
					var id = sub[1];
					var name = parsedObject[i]['label']['value'];
					var cover = parsedObject[i]['cover']['value'];
				}
				
				this.setState({
					id: id,
					name: name,
					cover: cover
				});
			})
			.catch(error => {
				console.log("Something went wrong!", error);
			});

		return response;
	}
	
	render(){
		let gameName = <b>{this.state.name}</b>;
		let gameID = this.state.id;
		
		let flexDirection = this.props.flexDirection;
		//let floatDirection = this.props.floatDirection;
		return(
			<React.Fragment>
				<div className = "suggestion-items">
					<img className = "img-thumb" alt="" src={this.state.cover}/>
					<Link to={`/game/${gameID}`}>{gameName}</Link>
				</div>
			</React.Fragment>
		);
	}
}

// ========================================

export default Suggestions;
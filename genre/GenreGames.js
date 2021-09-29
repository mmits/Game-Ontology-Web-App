import React from 'react';
import '../index.css';

import {
	//BrowserRouter as Router,
	Link
} from "react-router-dom";

class GenreGames extends React.Component{
	
	constructor(props) {
		super(props);
		this.state = {
			id: [],
			name: []
		};
	}

	componentDidMount(){
		//var query = 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> prefix MyOntology: <http://purl.org/net/MyOntology#> SELECT ?name ?genre ?platform ?date WHERE {MyOntology:Metroid rdfs:label ?name ;	MyOntology:hasGameGenre ?g ;	MyOntology:isReleasedOn ?p ;	MyOntology:releaseDate ?date .	?g	rdfs:label ?genre .	?p rdfs:label ?platform .}LIMIT 1';
		
		let URI = this.props.genreID;
		
		var query ='PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>prefix MyOntology: <http://purl.org/net/MyOntology#>SELECT DISTINCT ?x ?y ?label ?type WHERE {  ?x MyOntology:hasGameGenre MyOntology:' + URI +'. OPTIONAL{?x rdfs:label ?label. }}'


		var url = "http://localhost:3030/Test/query";
		var queryUrl = url + '?query=' + encodeURIComponent(query);
		
		var options = {
			method: 'POST',
			headers: {
				'Accept': 'application/sparql-results+json'
			}
		};
		
		var name = [];
		var id = [];
		var parsedObject;
		const response = fetch(queryUrl,options)
			.then(response => {
				return response.json();
			})
			.then(data => {
				parsedObject = data['results']['bindings'];
				for (var i = 0; i < parsedObject.length; i++) {
					var gameURI = parsedObject[i]['x']['value'];
					var sub = gameURI.split("MyOntology#");
					id.push(sub[1]);
					name.push(parsedObject[i]['label']['value']);
					
					console.log(parsedObject);
				}
				
				console.log(data);
				console.log(parsedObject);
				this.setState({
					id: id,
					name: name
				});
				/*
					console.log(data)
					data['results']
					data['results']['bindings'][0]
					a['platform']['value']
				*/
			})
			.catch(error => {
				console.log("Something went wrong!", error);
			});

		return response;
	}
	
	render(){
		/*
		the values here could be used as variables for the SPARQL query, as in
		"SELECT ?game ?label	WHERE{?game MyOntology:isDevelopedBy MyOntology:"+devname+" .}"
		*/
		/*let catalogue = this.state.items.map((item, key) => (
			<li key={key}>{item}</li>
		));*/
		let gameName = this.state.name;
		let gameID = this.state.id;
		var listResults = [];
		for (var i = 0; i < this.state.id.length; i++) {
			listResults.push(<div><Link to={`/game/${gameID[i]}`}><b>{gameName[i]}</b></Link></div>)
		}
		
		return(
			<React.Fragment>
				<div className = "block extra">
					Games released on this platform:
					<div style={{marginTop:"10px"}}>
						{listResults}
					</div>
				</div>
			</React.Fragment>
			
		);
	}
}

// ========================================

export default GenreGames;
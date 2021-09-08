import React from 'react';
import '../index.css';

import cover from '../images/cover.jpg';

class GameData extends React.Component{
	
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			name: [],
			platforms: []
			//gameObject: []
		};
	}

	componentDidMount(){
		//var query = 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> prefix MyOntology: <http://purl.org/net/MyOntology#> SELECT ?name ?genre ?platform ?date WHERE {MyOntology:Metroid rdfs:label ?name ;	MyOntology:hasGameGenre ?g ;	MyOntology:isReleasedOn ?p ;	MyOntology:releaseDate ?date .	?g	rdfs:label ?genre .	?p rdfs:label ?platform .}LIMIT 1';
		
		var query ='PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>prefix MyOntology: <http://purl.org/net/MyOntology#>SELECT DISTINCT ?x ?y ?label ?typeWHERE {MyOntology:Metroid ?x ?y.	OPTIONAL{?y rdfs:label ?label.	?y rdf:type ?type.}}'

		var url = "http://localhost:3030/Test/query";
		var queryUrl = url + '?query=' + encodeURIComponent(query);
		
		var options = {
			method: 'POST',
			headers: {
				'Accept': 'application/sparql-results+json'
			}
		};
		
		var labels=[];
		var platforms=[];
		var parsedObject;
		const response = fetch(queryUrl,options)
			.then(response => {
				return response.json();
			})
			.then(data => {
				parsedObject = data['results']['bindings'];
				for (var i = 0; i < parsedObject.length; i++) {
					if (parsedObject[i]['y']['type']==="literal"){
						switch (parsedObject[i]['x']['value']) {
							case ("http://www.w3.org/2000/01/rdf-schema#label"):
								var name = parsedObject[i]['y']['value'];
								break;
							case ("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"):
								break;
							case ("http://purl.org/net/MyOntology#isReleasedOn"):
								platforms.push(parsedObject[i]['y']['value']);
								break;
							default:
								labels.push(parsedObject[i]['y']['value']);
								break;
						}
					}
					else if((typeof parsedObject[i]['label'] !== 'undefined') && (parsedObject[i]['label']['type']==="literal")){
						switch (parsedObject[i]['x']['value']) {
						case ("http://www.w3.org/2000/01/rdf-schema#label"):
							name = parsedObject[i]['label']['value'];
							break;
						case ("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"):
							break;
						case ("http://purl.org/net/MyOntology#isReleasedOn"):
							platforms.push(parsedObject[i]['label']['value']);
							break;
						default:
							labels.push(parsedObject[i]['label']['value']);
							break;
						}
					}
				}
				console.log(data);
				console.log(parsedObject);
				console.log(labels);
				console.log(platforms);
				this.setState({
					items: labels,
					name: name,
					platforms: platforms
					//gameObject: data['results']['bindings'][0]
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
		let catalogue = this.state.items.map((item, key) => (
			<li key={key}>{item}</li>
		));
		let platformsList = this.state.platforms.join(", ");
		return(
			<div>
				<div className="entry entry-title">
					<div><p>{this.state.name}</p></div>
				</div>
				<div className = "entry entry-container">
					<div className="entry">
						<img alt="" src={cover}></img>
					</div>
					<div className = "entry data">
						<ul>{catalogue}</ul>
						Platforms: {platformsList}
					</div>
				</div>
				<div className = "entry extra">
					Extra info goes here
				</div>
			</div>
		);
	}
}

// ========================================

export default GameData;
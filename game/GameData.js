import React from 'react';
import '../index.css';

import {
	Link
} from "react-router-dom";

import GameOther from './GameOther';

class GameData extends React.Component{
	
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			name: "",
			cover: "",
			genre: "",
			genreID: "",
			release: "",
			platformID: "",
			platforms: [],
			mainPlatform: "",
			comment: ""
		};
	}

	componentDidMount(){
		//var query = 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> prefix MyOntology: <http://purl.org/net/MyOntology#> SELECT ?name ?genre ?platform ?date WHERE {MyOntology:Metroid rdfs:label ?name ;	MyOntology:hasGameGenre ?g ;	MyOntology:isReleasedOn ?p ;	MyOntology:releaseDate ?date .	?g	rdfs:label ?genre .	?p rdfs:label ?platform .}LIMIT 1';
		
		let URI = this.props.gameID;
		
		var query ='PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>prefix MyOntology: <http://purl.org/net/MyOntology#>SELECT DISTINCT ?x ?y ?label ?type WHERE {MyOntology:' + URI +' ?x ?y.	OPTIONAL{?y rdfs:label ?label.	?y rdf:type ?type.}}'

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
							case ("http://schema.org/image"):
								var cover = parsedObject[i]['y']['value'];
								break;
							case ("http://purl.org/net/MyOntology#releaseDate"):
								var release = parsedObject[i]['y']['value'];
								break;
							case ("http://www.w3.org/2000/01/rdf-schema#comment"):
								var comment = parsedObject[i]['y']['value'];
								break;
							default:
								labels.push(parsedObject[i]['y']['value']);
								break;
						}
					}
					else if((typeof parsedObject[i]['label'] !== 'undefined') && (parsedObject[i]['label']['type']==="literal")){
						switch (parsedObject[i]['x']['value']) {
							case ("http://purl.org/net/MyOntology#hasGameGenre"):
								var genre = parsedObject[i]['label']['value'];
								var genreURI = parsedObject[i]['y']['value'];
								var sub1 = genreURI.split("MyOntology#");
								var genreID = sub1[1];
								break;
							case ("http://purl.org/net/MyOntology#isReleasedOn"):
								var mainPlatform = (parsedObject[i]['label']['value']);
								platforms.push(parsedObject[i]['label']['value']);	
								var platformURI = parsedObject[i]['y']['value'];
								var sub2 = platformURI.split("MyOntology#");
								var platformID = sub2[1];
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
					cover: cover,
					genre: genre,
					genreID: genreID,
					release: release,
					platformID: platformID,
					platforms: platforms,
					mainPlatform: mainPlatform,
					comment: comment
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
		/*
		the values here could be used as variables for the SPARQL query, as in
		"SELECT ?game ?label	WHERE{?game MyOntology:isDevelopedBy MyOntology:"+devname+" .}"
		*/
		/*let catalogue = this.state.items.map((item, key) => (
			<li key={key}>{item}</li>
		));*/
		//let platformsList = this.state.platforms.join(", ");
		
		//<GameOther category = {this.state.platforms[0]} type="isReleasedOn"/>
		
		
		return(
			<div>
				<div className="block page-title">
					<div><p>{this.state.name}</p></div>
				</div>
				<div className = "block clear-flex">
					<div className = "block">
						<img className = "img-large" alt="" src={this.state.cover}/>
					</div>
					<div className = "block padded">
						Genre: <Link to={`/genre/${this.state.genreID}`}>{this.state.genre}</Link><br/>
						Release Date: {this.state.release}<br/>
						Platforms: <Link to={`/platform/${this.state.platformID}`}>{this.state.mainPlatform}</Link>
					</div>
				</div>
				<div className = "block extra">
					{this.state.comment}
				</div>
				{this.state.genreID && <GameOther categoryID = {this.state.genreID} categoryName = {this.state.genre} type="hasGameGenre"/>}
				{this.state.platformID && <GameOther categoryID = {this.state.platformID} categoryName = {this.state.mainPlatform} type="isReleasedOn"/>}
			</div>
			
		);
	}
}

// ========================================

export default GameData;
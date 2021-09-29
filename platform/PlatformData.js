import React from 'react';
import '../index.css';

class PlatformData extends React.Component{
	
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			mainName: [],
			names: [],
			cover: []
		};
	}

	componentDidMount(){
		//var query = 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> prefix MyOntology: <http://purl.org/net/MyOntology#> SELECT ?name ?genre ?platform ?date WHERE {MyOntology:Metroid rdfs:label ?name ;	MyOntology:hasGameGenre ?g ;	MyOntology:isReleasedOn ?p ;	MyOntology:releaseDate ?date .	?g	rdfs:label ?genre .	?p rdfs:label ?platform .}LIMIT 1';
		
		let URI = this.props.platformID;
		
		var query ='PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>prefix MyOntology: <http://purl.org/net/MyOntology#> PREFIX schema: <http://schema.org/> SELECT DISTINCT ?x ?y ?label ?type WHERE {MyOntology:' + URI +' ?x ?y.	OPTIONAL{?y rdfs:label ?label.	?y rdf:type ?type.}}'
		
		


		var url = "http://localhost:3030/Test/query";
		var queryUrl = url + '?query=' + encodeURIComponent(query);
		
		var options = {
			method: 'POST',
			headers: {
				'Accept': 'application/sparql-results+json'
			}
		};
		
		var labels=[];
		var names=[];
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
								var mainName = (parsedObject[i]['y']['value']);
								names.push(parsedObject[i]['y']['value']);
								break;
							case ("http://schema.org/image"):
								var cover = parsedObject[i]['y']['value'];
								break;
							default:
								labels.push(parsedObject[i]['y']['value']);
								break;
						}
					}
					else if((typeof parsedObject[i]['label'] !== 'undefined') && (parsedObject[i]['label']['type']==="literal")){
						switch (parsedObject[i]['x']['value']) {
						default:
							labels.push(parsedObject[i]['label']['value']);
							break;
						}
					}
				}
				console.log(data);
				console.log(parsedObject);
				this.setState({
					items: labels,
					mainName: mainName,
					names: names,
					cover: cover
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
		let namesList = this.state.names.join(", ");
		
		return(
			<div>
				<div className="block page-title">
					<div><p>{this.state.mainName}</p></div>
				</div>
				<div className = "block clear-flex">
					<div className = "block">
						<img className = "img-large" alt="" src={this.state.cover}/>
					</div>
					<div className = "block padded">
						Other Names: {namesList}<br/>
					</div>
				</div>
			</div>
			
		);
	}
}

// ========================================

export default PlatformData;
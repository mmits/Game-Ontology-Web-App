import React from 'react';
import {
	//BrowserRouter as Router,
	Link
} from "react-router-dom";
import '../index.css';

class SearchResults extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			id: [],
			name: [],
			type: [],
			isSubmitted:false
		};
	}
	
	componentDidMount(){
		let searchInput = this.props.searchInput;
		let searchOption = this.props.searchOption;
		console.log("Searched: " + searchInput);
		console.log("Option: " + searchOption);
		
		var query ="PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> PREFIX schema: <http://schema.org/> PREFIX MyOntology: <http://purl.org/net/MyOntology#> SELECT DISTINCT ?game ?label ?type WHERE{ ?game rdf:type MyOntology:"+searchOption+" . ?game rdfs:label ?label . MyOntology:"+searchOption+" rdfs:label ?type . FILTER regex(?label,'" + searchInput + "','i')}"
		
		var url = "http://localhost:3030/Test/query";
		var queryUrl = url + '?query=' + encodeURIComponent(query);
		
		var options = {
			method: 'POST',
			headers: {
				'Accept': 'application/sparql-results+json'
			}
		};
		
		var parsedObject;
		var name = [];
		var id = [];
		const response = fetch(queryUrl,options)
			.then(response => {
				return response.json();
			})
			.then(data => {
				parsedObject = data['results']['bindings'];
				console.log(data);
				console.log(parsedObject);
				for (var i = 0; i < parsedObject.length; i++) {
					var URI = parsedObject[i]['game']['value'];
					var sub = URI.split("MyOntology#");
					id.push(sub[1]);
					name.push(parsedObject[i]['label']['value']);
					var type = parsedObject[i]['type']['value']
				}
				
				this.setState({
					id: id,
					name: name,
					type: type
				});
			})
			.catch(error => {
				console.log("Something went wrong!", error);
			});

		return response;
	}


	
	
	render(){
		let urlName = this.state.name;
		let urlID = this.state.id;
		let urlType = this.state.type;
		var listResults = [];
		var listName = <b>{this.props.listName}</b>;
		for (var i = 0; i < this.state.id.length; i++) {
			listResults.push(
				<div>
					<Link to={`/${urlType}/${urlID[i]}`}><b>{urlName[i]}</b></Link>
				</div>
			)
		}
		
		return (
			<React.Fragment>
				<div>
				{listName}
					<div className = "block">
					{listResults}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

// ========================================

export default SearchResults;
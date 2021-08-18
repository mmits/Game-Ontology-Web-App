import React from 'react';
import '../index.css';

import cover from '../images/cover.jpg';

class GameData extends React.Component{
	
	componentDidMount(){
		var query = 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> prefix MyOntology: <http://purl.org/net/MyOntology#> SELECT ?name ?genre ?platform ?date WHERE {MyOntology:Metroid rdfs:label ?name ;	MyOntology:hasGameGenre ?g ;	MyOntology:isReleasedOn ?p ;	MyOntology:releaseDate ?date .	?g	rdfs:label ?genre .	?p rdfs:label ?platform .}LIMIT 1';

		var url = "http://localhost:3030/Test/query";
		var queryUrl = url + '?query=' + encodeURIComponent(query);
		
		var options = {
			method: 'POST',
			headers: {
				'Accept': 'application/json'
			}
		};
		
		const response = fetch(queryUrl,options)
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				console.log(data);
			})
			.catch(function (err) {
				console.log("Something went wrong!", err);
			});

		return response;
	}
	
	render(){
		return(
			<div>
				<div className="entry entry-title">
					<p id="name">Metroid</p>
				</div>
				<div className = "entry entry-container">
					<div className="entry">
						<img alt="" src={cover}></img>
					</div>
					<div className = "entry data">
						<ul>
							<li>Genre: Platformer</li>
							<li>Release Date: June 8, 1986</li>
							<li>Platform: Nintendo Entertainment System</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default GameData;
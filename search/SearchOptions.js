import React from 'react';
import '../index.css';

import SearchResults from './SearchResults';

//function SearchOptions(){
class SearchOptions extends React.Component {
	/*constructor(props) {
		super(props);
		this.state = {
			name: true,
			genre: true,
			platform: true
		}
	}
	
	handleClick(event) {
		this.setState({
			name: !this.state.name,
			genre: !this.state.genre,
			platform: !this.state.platform
		});
	}
	
	render() {
		return (
			<div>
				<div className = "block extra">
					Options
					<div className = "block">
						<input placeholder = "Name" disabled = {(this.state.name)? "name" : ""}/>
						<input name="name" type="checkbox" onClick = {this.handleClick.bind(this)}/>
					</div>
					<div className = "block">
						<input placeholder = "Genre" disabled = {(this.state.genre)? "genre" : ""}/>
						<input name="genre" type="checkbox" onClick = {this.handleClick.bind(this)}/>
					</div>
					<div className = "block">
						<input placeholder = "Platform" disabled = {(this.state.platform)? "platform" : ""}/>
						<input name="platform" type="checkbox" onClick = {this.handleClick.bind(this)}/>
					</div>
				</div>
			</div>
		);
	}*/
	
	constructor(props) {
		super(props);
		this.state = {
			search: "",
			option: "",
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleOptionChange = this.handleOptionChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event){
		this.setState({
			search: event.target.value
		});
	}
	handleOptionChange(event){
		this.setState({
			option: event.target.value
		});
	}
	
	handleSubmit(event) {
		console.log(this.state.search);
		event.preventDefault();
		this.setState({
			isSubmitted: true
		})
	}
	
	render() {
		return (
			<div>
				<div className="block extra page-title">
					Search
				</div>
				<div className = "block extra">
					<form onSubmit={this.handleSubmit}>
						<input type="text" placeholder = "Search for a game..." value={this.state.search} onChange={this.handleInputChange}/>
						<select alue={this.state.option} onChange={this.handleOptionChange}>
							<option value="">--Select--</option>
							<option value="Game">Game</option>
							<option value="Genre">Genre</option>
							<option value="Platform">Platform</option>
						</select>
						<input type="submit" value="Submit"/>
					</form>
				</div>
					<div className = "block extra">
						Your search results:
						{this.state.isSubmitted && <SearchResults searchInput = {this.state.search} searchOption = {this.state.option}/>}
					</div>
				
			</div>
		);
	}
}

// ========================================

export default SearchOptions;
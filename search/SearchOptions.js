import React from 'react';
import '../index.css';

import SearchResults from './SearchResults';

//function SearchOptions(){
class SearchOptions extends React.Component {
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
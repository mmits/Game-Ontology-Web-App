import React from 'react';
import '../index.css';

import SearchMain from './SearchMain';

class SearchResultsTest extends React.Component {
   constructor(props){
      super(props);
      this.state = {
          search: ""
      };
    }

    handleParentData = (formModel) => {
      console.log(formModel);

      this.setState({...formModel});
    }


  render() {
    return (
        <div>
         
          <SearchMain handleData={this.handleParentData}/>
          <p>{this.state.search}</p>    
        
        </div>
    )
  }
}
// ========================================

export default SearchResultsTest;
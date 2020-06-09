import React from 'react';  
 

export default class Scraping extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
          search_query: ''
        }
    }
    handleSearch = () => {
        this.context.router.push(`'http://localhost:3000/scrap/${this.state.search_query}'`);
    }
    queryChange = (e) => {
        this.setState({query: e.target.value})
    }
    render() {
        return (   
            <div id="search">
                <input id="form" class="form-control" type="text" placeholder="Search" value={this.state.search_query} onChange={this.queryChange} aria-label="Search"/>
                {/* <a id="link" href="http://localhost:3000/scrap/">Link</a> */}
                <input type="submit" value="Search" onClick={this.handleSearch} /> 
            </div>
        )
    }
}
 
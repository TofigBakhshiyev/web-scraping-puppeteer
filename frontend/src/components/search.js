import React from 'react';   

export default class Scraping extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
          search_query: ''
        }
    }
    handleSearch = () => {
        let url = `/scrap/${this.state.search_query}` 
        // redirect to url 
        this.props.history.push(url)
    }
    queryChange = (e) => { 
        // get value and assign to search_query
        this.setState({search_query: e.target.value})
    }
    render() {
        return (   
            <div id="search"> 
                <div class="input-group">
                    {/* get value from input and when user change search term, also change search_query in the state */}
                    <input type="text" class="form-control" placeholder="Search" value={this.state.search_query} onChange={this.queryChange} aria-label="Search" aria-describedby="basic-addon2"/>
                    <div class="input-group-append">
                        {/* when clicked, run handleSearch */} 
                        <button type="button" class="btn btn-secondary btn-sm" onClick={this.handleSearch}>Search</button>
                    </div>
                </div>
            </div>
        )
    }
}
 
import React from 'react';  
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// load css file
import "./styles.css";
// components 
import  Scraping  from "./components/scraping"
import Search from "./components/search"

export default class App extends React.Component {
  render() {
    return (
      // redirect with Router
      <Router>
        <Switch>
          <Route path="/main" component={Search} />
          <Route  path="/scrap/:search" component={Scraping}/>
        </Switch>
      </Router> 
    )
  }
}

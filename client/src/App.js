import React from 'react';  
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import "./styles.css";
import  Scraping  from "./components/scraping"
import Search from "./components/search"

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/main" component={Search} />
          <Route  path="/scrap/:search" component={Scraping}/>
        </Switch>
      </Router> 
    )
  }
}

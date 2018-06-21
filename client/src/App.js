import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import MyWork from './pages/MyWork';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/mywork" component={MyWork} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

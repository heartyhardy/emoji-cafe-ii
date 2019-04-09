import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      emojis:[]
    }
  }

  componentDidMount(){
    // TEST RUN OF THE EXPRESS API
    (async() => {
      let response = await fetch('/emoji/all');
      let results = await response.json();
      console.log(results);
    })();
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;

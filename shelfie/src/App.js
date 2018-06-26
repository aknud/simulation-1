import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: []
    }
  }

  componentDidMount = () => {
    axios.get('/api/inventory').then(response => {
      this.setState({
        inventory: response.data
      })
    })
  }


  render() {
    return (
      <div className="App">
        <h1><Header /></h1>
        <h1><Form /></h1>
        <h1><Dashboard list={this.state.inventory}/></h1>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {Navbar, NewsFeed, Footer } from './components';
import { Container } from 'semantic-ui-react';
import feedData from './data.json';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }


  componentDidMount() {
    axios.get('https://assets.studio71.io/test/news_feed.json').then((res) => {
      this.setState({data: res.data.items});
    })
    if (!this.state.data) {
      this.setState({data: feedData});
    }

}

  render() {
    return (
      <Container>
        <Navbar />
        <NewsFeed data={this.state.data}/>
        <Footer />
      </Container>
    );
  }
}

export default App;

import React, { Component } from 'react';
import NewsArticle from './NewsArticle';
import { Segment } from 'semantic-ui-react';


class NewsFeed extends Component {



  render() {

    // let colorOptions = ['color=red', 'color=teal', 'color=yellow', 'color=teal'];

    const { data } = this.props;
    let articles = data ? data.map(item =>
      <NewsArticle
      article={item}
      />
    ) : [];



    return (
      <Segment.Group raised>
      {articles}
      </Segment.Group>
    )
  }

}
export default NewsFeed;

import React, { Component } from 'react';
import { Segment, Image } from 'semantic-ui-react';

const NewsArticle = (props) => {
    const { article, color } = props;

    const subscribers = article.subscribers && article.subscribers > 999 ? ' • ' + (JSON.stringify(article.subscribers)).slice(0, -4)  + 'k': ' • ' + article.subscribers;


    return (
      <Segment raised>
        <Image src={article.thumbnail}  avatar />
        <span className='user-name'> {article.name} </span>  <span className='subscribers-line'> {article.subscribers ? subscribers : ''} </span>
        <h3> {article.title} </h3>
        {article.type ? 'type: ' + article.type : null}
        <br/>
        message: {article.message}
      </Segment>

    )


}
export default NewsArticle;

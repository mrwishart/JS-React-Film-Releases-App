import React, { Component } from 'react';

class Film extends Component {

  render(){

    const {id, url, name} = this.props.film;
    
    return(
      <>
      <li id={id}>
      <a href={url}>{name}</a>
      </li>
      </>
    );
  }
}

export default Film;

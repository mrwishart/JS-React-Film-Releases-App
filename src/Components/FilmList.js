import React, { Component } from 'react';
import Film from './Film.js';

class FilmList extends Component {

  render(){
    const films = this.props.films.map((film, index) => {
      return (<Film film={film} key={index}/>);
    })
    return(
      <>
      <ul>
      {films}
      </ul>
      </>
    );
  }
}

export default FilmList;

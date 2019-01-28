import React, { Component } from 'react';

class Footer extends Component {
  render(){
    const upcomingReleasesURL = "https://www.imdb.com/calendar/?region=gb"
    return(
      <footer><a href={upcomingReleasesURL}>View more upcoming releases...</a></footer>
    );
  }
}

export default Footer;

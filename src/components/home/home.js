// View all popular movie
import React, { Component } from 'react';

import '../home/home.css';

import Search from '../searchBar/index';
import Popularmovie from '../popularMovie/index';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='movie-app'>
        <div>
          <h1 className='app-title'>Welcome to All Movies</h1>
          <p className='title-greeting'>
            Enjoy All Latest Movies Views and Saw
          </p>
        </div>
        <div>
          <Search />
        </div>
        <div>
          <Popularmovie />
        </div>
      </div>
    );
  }
}
export default Home;

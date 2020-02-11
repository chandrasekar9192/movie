// View all popular movie
import React, { Component } from 'react';

const popularMoviesURL = `https://api.themoviedb.org/3/movie/popular?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&page=1`;

class Popularmovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };

    this.getPopularMovies = this.getPopularMovies.bind(this);
  }

  getPopularMovies() {
    fetch(popularMoviesURL)
      .then(response => {
        response
          .json()
          .then(responseJson => {
            this.setState({
              movies: responseJson.results,
              isLoading: false
            });
          })
          .catch(error => console.log('Error Occured: ', error));
      })
      .catch(error => console.log('Error Occured: ', error));
  }

  componentDidMount() {
    this.getPopularMovies();
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        <h1>Popular Movie List</h1>
      </div>
    );
  }
}
export default Popularmovie;

import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { Container } from 'bloomer';
import "bulma/css/bulma.css";
import MoviesList from './MoviesList';
import SearchBar from './SearchBar.jsx';
import Transition from "react-motion-ui-pack";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
      searchText: "",
      filteredMovies: []
    };
  }
  async componentDidMount() {
    const results = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed"
    );
    const data = await results.json();
    this.movies = data.results;
    this.setState({
      movies: this.movies,
      loading: false,
      filteredMovies: this.movies
    });
  }

  handleChange(searchText) {
    this.setState({
      searchText
    });
    var filteredMovies = this.state.movies;
    filteredMovies = filteredMovies.filter(movie => {
      return movie.title.toLowerCase().search(
        searchText.toLowerCase()
      )!== -1
    })
    this.setState({ filteredMovies });
  }

  render() {
    let content;
    if (this.state.loading) {
      content = <img id="loading" src={logo} />;
    }
    else {
      content = <MoviesList movies={this.state.filteredMovies} />;
    }

    return (
      <Transition
        enter={{ opacity: 1, translateX: 0 }}
        leave={{ opacity: 0.7, translateX: -200 }}
        component={false}
      >
        <Container>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Rolling Banana Movies</h1>
              <em>The best movie catalog you've ever seen</em>
              <SearchBar handleChange={this.handleChange.bind(this)}/>
            </header>
            <Container>{content}</Container>
          </div>
        </Container>
      </Transition>
    );
  }
}

export default App;

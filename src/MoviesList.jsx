import React, { Component } from "react";
import MovieCard from "./MovieCard";

export default class MovieList extends Component {
  render() {
    return(
    <div className="movieContainer">
      { this.props.movies.map (m => <MovieCard movie={m} />)}
    </div>
    )
  }
}

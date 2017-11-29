import React, { Component } from 'react'
import { Box } from "bloomer";
import "./MovieCard.css";

export default class MovieCard extends Component {
  render() {
    return (
      <Box className="MovieCard-Box">
        <h1>{ this.props.movie.title }</h1>
      </Box>    
      )
  }
}

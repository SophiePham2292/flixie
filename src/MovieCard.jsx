import React, { Component } from 'react'
import { Box } from "bloomer";
import "./MovieCard.css";

export default class MovieCard extends Component {
  render() {
    const { title, poster_path, overview, release_date } = this.props.movie;
    var imageSource = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${poster_path}`;
    return <Box className="MovieCard-Box">
        <h1>
          <b>{title}</b>
        </h1>
        <img src= {imageSource}/>
        <p>{overview}</p>
      </Box>
  }
}

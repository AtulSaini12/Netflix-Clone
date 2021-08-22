import React, { useState, useEffect } from "react";

import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

import "./Row.css";
import axios from "../helpers/axios";

const imageBaseURL = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setMovieTrailer] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleOnClick = (movie) => {
    if (trailerUrl) {
      setMovieTrailer("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_title || "")
        .then((url) => {
          console.log("url :", url);
          const urlParams = new URLSearchParams(new URL(url).search);
          setMovieTrailer(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map(
          (movie) => (
            console.log("movie : ", movie),
            (
              <img
                onClick={() => handleOnClick(movie)}
                key={movie.id}
                className={`row-poster ${isLargeRow && "row-posterLarge"}`}
                src={`${imageBaseURL}${
                  isLargeRow
                    ? movie.poster_path
                    : movie.backdrop_path || movie.poster_path
                }`}
                alt={movie.name}
              />
            )
          )
        )}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;

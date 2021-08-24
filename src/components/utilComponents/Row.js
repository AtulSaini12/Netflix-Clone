import React, { useState, useEffect } from "react";

import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

import "./Row.css";
import axios from "../../helpers/axios";

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

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <div>
            <img
              onClick={() => handleOnClick(movie)}
              key={movie.id}
              className={`row-poster ${isLargeRow && "row-posterLarge"}`}
              src={`${imageBaseURL}${
                isLargeRow
                  ? movie.poster_path
                  : movie.backdrop_path || movie.poster_path
              }`}
              alt={movie.title}
            />
            <p className="movie-name">
              {truncate(
                movie?.title || movie?.original_title || movie?.name,
                15
              )}
            </p>
          </div>
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;

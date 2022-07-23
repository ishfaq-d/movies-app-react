import React from "react";

function Movies({ movies }) {
  console.log(JSON.stringify(movies[0]));

  return (
    <div class="movies-container">
      {movies &&
        movies.length > 0 &&
        movies.slice(0, 20).map((movie, index) => (
          <li key={index} class="movie">
            <h3>Title: {movie.Title}</h3>
            {movie.Rating && <h5>Rating: {movie.Rating}</h5>}
            <h5>Genre: {movie['Major Genre'] ?? "N/A"}</h5>
            {movie['Creative Type'] && <h5>Creative Type: {movie['Creative Type']}</h5>}
          </li>
        ))}
    </div>
  );
}

export default Movies;

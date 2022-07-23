import React, { useEffect, useState } from "react";

function Header({ movies, setMovies }) {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value.toLowerCase());
  };
  const handleGenreChange = (e) => {
    e.preventDefault();
    setGenre(e.target.value.toLowerCase());
  };

  const filterMovies = () => {
    let filteredMovies = [];

    if (name && genre) {
      filteredMovies = [
        ...movies?.filter(
          (movie) =>
            movie["Major genre"]?.toString().toLowerCase().includes(genre) &&
            movie.Title.toString().toLowerCase().includes(name)
        ),
      ];
    } else if (name) {
      filteredMovies = [
        ...movies?.filter((movie) =>
          movie.Title?.toString().toLowerCase().includes(name)
        ),
      ];
    } else if (genre) {
      filteredMovies = [
        ...movies?.filter((movie) =>
          movie["Major Genre"].toString().toLowerCase().includes(genre)
        ),
      ];
    }

    console.log("this", filteredMovies);
    if (filteredMovies.length > 0) {
      setMovies([...filteredMovies]);
    }
  };

  useEffect(() => {
    filterMovies();
  }, [name, genre]);

  return (
    <header class="header">
      <div class="search-bar">
        <input
          placeholder="Name"
          onChange={handleNameChange}
          value={name}
          onKeyDown={(e) => {
            if (e.key === "Backspace") {
              handleNameChange(e.target.value);
              console.log("this1", name);
            }
          }}
        ></input>
        <input
          placeholder="Genre"
          onChange={handleGenreChange}
          value={genre}
          onKeyDown={(e) => {
            if (e.key === "Backspace") {
              handleGenreChange(e.target.value);
            }
          }}
        ></input>
        <button onClick={filterMovies}>Search</button>
      </div>
    </header>
  );
}

export default Header;

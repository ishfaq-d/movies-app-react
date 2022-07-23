import React, { useEffect, useState } from "react";
import AddMovieModal from "./AddMovieModal";

function Header({ movies, setMovies }) {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");

  const [openAddMovie, setOpenAddMovie] =useState(false);

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value.toLowerCase());
  };
  const handleGenreChange = (e) => {
    e.preventDefault();
    setGenre(e.target.value.toLowerCase());
  };

  const handleAddMovie = () => {
    setOpenAddMovie(true);
  }

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
      <button class='add-movie'  onClick={handleAddMovie}>
        <h3>Add Movie</h3>
      </button>
      {openAddMovie && <AddMovieModal modalIsOpen={openAddMovie} setIsOpen={setOpenAddMovie}/>}
    </header>
  );
}

export default Header;

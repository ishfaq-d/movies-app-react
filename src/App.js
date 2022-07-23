import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Movies from './components/Movies';
import Header from './components/Header';



function App() {

  const [movies, setMovies] = useState([])

  useEffect(()=> {
    function getMovies(){
      axios.get('https://raw.githubusercontent.com/vega/vega/main/docs/data/movies.json').then(({data}) =>{
        const filteredData = data.filter((item) => item.Tilte !== null && item["Major Genre"] !== null);
        setMovies(filteredData)
      } );
      
    }
    getMovies();

  },[])

  return (
    <>
    <Header movies={movies} setMovies={setMovies}/>
    <main>
    <div className="App">
      <Movies movies={movies}/>
    </div>
    </main>
    </>
    
  );
}

export default App;

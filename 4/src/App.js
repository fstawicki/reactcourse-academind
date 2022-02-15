import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  // function fetchMoviesHandler(){
  //   fetch('https://swapi.dev/api/films/').then(response => {
  //     return response.json();
  //   }).then(data => {
  //     const transformedMovies = data.results.map(movieData => {
  //       return {
  //         id: movieData.episode_id,
  //         title: movieData.title,
  //         openingText: movieData.opening_crawl,
  //         releaseDate: movieData.release_date
  //       }
  //     });
  //     setMovies(transformedMovies);
  //   });
  // }


const fetchMoviesHandler = useCallback(async  () => {
    setIsLoading(true);
    setError(null);

    try{
          const response = await fetch('https://swapi.dev/api/films/');
          
          if(!response.ok){
            throw new Error('Something went wrong!');
          }

          const data = await response.json();


          const transformedMovies = data.results.map(movieData => {
            return {
                      id: movieData.episode_id,
                      title: movieData.title,
                      openingText: movieData.opening_crawl,
                      releaseDate: movieData.release_date
                    }
          });
          setMovies(transformedMovies);
          setIsLoading(false);
    }catch (error){
      setError(error.message);
    }

    
    setIsLoading(false);
  }, []);


useEffect(() => {
  fetchMoviesHandler();
}, [fetchMoviesHandler]);


  const dummyMovies = [
    {
      id: 1,
      title: 'Some Dummy Movie',
      openingText: 'This is the opening text of the movie',
      releaseDate: '2021-05-18',
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
      openingText: 'This is the second opening text of the movie',
      releaseDate: '2021-05-19',
    },
  ];

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length >0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found no movies</p>}
        {isLoading && <p>Loading, please wait...</p>}
        {!isLoading && error && alert(error)}
      </section>
    </React.Fragment>
  );
}

export default App;

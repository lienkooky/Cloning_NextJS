import React, { useEffect, useState } from 'react';
import Seo from '../components/Seo';

const API_KEY = '10923b261ba94d897ac6b81148314a3f';

const index = () => {
  const [Movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div>
      <Seo title="Home" />
      {!Movies && <h4>Loading...</h4>}

      {Movies?.map((movie) => {
        return <div key={movie.id}>{movie.original_title}</div>;
      })}
    </div>
  );
};

export default index;

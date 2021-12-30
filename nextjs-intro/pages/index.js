import { imageConfigDefault } from 'next/dist/server/image-config';
import React, { useEffect, useState } from 'react';
import Seo from '../components/Seo';

const index = () => {
  const [Movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`/api/movies`)).json();
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

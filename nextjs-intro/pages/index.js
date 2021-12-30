import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Seo from '../components/Seo';

const index = ({ results }) => {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };
  return (
    <div className="container">
      <Seo title="Home" />
      {/* {!results && <h4>Loading...</h4>} */}
      {results?.map((movie) => {
        return (
          <div
            onClick={() => onClick(movie.id, movie.title)}
            key={movie.id}
            className="movie"
          >
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <a>{movie.original_title}</a>
            </Link>
          </div>
        );
      })}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default index;

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3002/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}

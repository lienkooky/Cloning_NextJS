import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
  const router = useRouter();

  return (
    <nav>
      <img src="/vercel.svg" />
      <div>
        <Link href="/">
          <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === '/about' ? 'active' : ''}>About</a>
        </Link>
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
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
    </nav>
  );
};

export default NavBar;

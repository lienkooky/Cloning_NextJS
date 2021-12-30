import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <style jsx global>{`
        a {
          color: #6999ac;
        }
        .active {
          color: yellow;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;

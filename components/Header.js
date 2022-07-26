import React from 'react';
import Link from "next/link";


const Header = () => {
  return (
    <header>
      <Link href={'/'}>
        <a>Funny Drinker</a>
      </Link>

      <nav>
        <Link href={'/'}>
          <a>Home</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
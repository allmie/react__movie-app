import React from "react";

const Header = () => {
  return (
    <nav>
      <div>
        <span>
          <h1>YTS.xx</h1>
          <p>Movie site</p>
        </span>
      </div>
      <form action="" method="get">
        <span>
          <input type="text" placeholder="Quick search" />
        </span>
      </form>
      <ul>
        <li>Home</li>
        <li>4k</li>
        <li>Trending</li>
        <li>Browser Movies</li>
      </ul>
    </nav>
  );
};

export default Header;

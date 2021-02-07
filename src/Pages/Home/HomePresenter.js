import React from "react";

const HomePresenter = ({ movies, loading, error }) => (
  <div>
    {movies &&
      movies.length > 0 &&
      movies.map((element, index) => (
        <div>
          <h2>{element.title}</h2>
          <p>{element.synopsis}</p>
        </div>
      ))}
  </div>
);

export default HomePresenter;

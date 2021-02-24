import React from "react";
import HomePresenter from "Pages/Home/HomePresenter";
import axios from "axios";

export default class HomeComponent extends React.Component {
  state = {
    movies: [],
    loading: true,
    error: null,
  };

  getMovies = async () => {
    try {
      const {
        data: {
          data: { movies },
        },
      } = await axios.get(
        "https://yts-proxy.now.sh/list_movies.json?sort_by=like_count"
      );
      const popularMovies = movies.filter((mv, index) => index < 4);

      this.setState({
        movies: popularMovies,
      });
    } catch {
      this.setState({
        error: "Can`t find movies",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  componentDidMount = async () => {
    this.getMovies();
  };

  render() {
    console.log(this.state.movies);
    const { movies, loading, error } = this.state;
    return <HomePresenter movies={movies} loading={loading} error={error} />;
  }
}

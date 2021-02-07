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
      this.setState({
        movies,
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
    console.log(this.state);
    const { movies, loading, error } = this.state;
    return <HomePresenter movies={movies} loading={loading} error={error} />;
  }
}

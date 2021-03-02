import React from "react";
import HomePresenter from "Pages/Home/HomePresenter";
import axios from "axios";

export default class HomeComponent extends React.Component {
  state = {
    highRate: [],
    popular: [],
    loading: true,
    error: null,
  };

  getHighRatesMovies = async () => {
    try {
      const {
        data: {
          data: { movies },
        },
      } = await axios.get(
        "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
      );

      this.setState({
        highRate: movies,
      });
    } catch {
      this.setState({
        error: "Can`t find high-quality movies",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  getPopularMovies = async () => {
    try {
      const {
        data: {
          data: { movies },
        },
      } = await axios.get(
        "https://yts-proxy.now.sh/list_movies.json?sort_by=like_count&limit=4"
      );
      const popularMovies = movies.filter((mv, index) => index < 4);

      this.setState({
        popular: popularMovies,
      });
    } catch {
      this.setState({
        error: "Can`t find popular movies",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  componentDidMount = async () => {
    this.getPopularMovies();
    this.getHighRatesMovies();
  };

  render() {
    const { highRate, popular, loading, error } = this.state;
    return (
      <HomePresenter
        highRate={highRate}
        popular={popular}
        loading={loading}
        error={error}
      />
    );
  }
}

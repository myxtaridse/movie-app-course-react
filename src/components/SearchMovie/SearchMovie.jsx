import React from "react";
import styles from "./SearchMovie.module.scss";
import { fetchReq } from "../../helpers/fetch";

export class SearchMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plot: {},
      status: true,
    };
  }

  async componentDidMount() {
    if (this.props.item.Poster) {
      if (this.state.status) {
        this.setState({ plot: await fetchReq(this.props.item?.imdbID) });
        // setTimeout(() => {
        //   console.log(this.state.plot);
        // }, 100);
        this.setState({ status: false });
        return;
      }
    }
    return;
  }

  render() {
    return (
      <div className={styles.block}>
        <div className={styles.block__image}>
          <img
            src={
              this.props.item.Poster
                ? this.props.item.Poster
                : "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
            }
          />
        </div>
        <div className={styles.block__about}>
          <h2>
            {this.props.item.Title ? this.props.item.Title : "Lorem Impusum"}
          </h2>
          <div className={styles.block__about__detalies}>
            <span>
              {this.state.plot.Country ? this.state.plot.Country : "USA"}
            </span>
            <span>
              {this.props.item.Year ? this.props.item.Year : "2014"}г.
            </span>
            <span>
              {this.state.plot.Runtime ? this.state.plot.Runtime : "136min"}
            </span>
          </div>
          <div>
            Режиссер, постановщик:{" "}
            <span>
              {this.state.plot.Director ? this.state.plot.Director : "Кто-то"}
            </span>
          </div>
          <div>
            Жанр:{" "}
            <span>
              {this.state.plot.Genre ? this.state.plot.Genre : "Приключения"}
            </span>
          </div>
          <div>
            Актеры:{" "}
            <span>
              {this.state.plot.Actors ? this.state.plot.Actors : "Какие-то"} и
              т.д.
            </span>
          </div>
          <div className={styles.block__about__description}>
            {this.state.plot
              ? this.state.plot.Plot
              : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel cumque odio harum maxime itaque quidem inventore eveniet libero voluptatum eaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel cumque odio harum maxime itaque quidem inventore eveniet libero voluptatum eaque."}
          </div>
          <a
            target="_blank"
            href={`https://www.imdb.com/title/${this.state.plot.imdbID}/`}
          >
            Больше информации...
          </a>
        </div>
      </div>
    );
  }
}

export default SearchMovie;

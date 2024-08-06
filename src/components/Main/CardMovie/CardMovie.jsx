import React from "react";
import { fetchReq } from "../../../helpers/fetch";
import styles from "./CardMovie.module.scss";

export class CardMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {},
    };
    this.infoRef = React.createRef();
  }

  async componentDidMount() {
    const item = await fetchReq(this.props.id);

    this.setState({ film: await item });

    // setTimeout(() => {
    //   console.log(this.state.film);

    // }, 100);
  }

  infoShow = () => {
    this.infoRef?.current?.classList.add(styles.card__info);
  };
  infoNotShow = () => {
    this.infoRef?.current.classList.add("info");
    setTimeout(() => {
      this.infoRef?.current?.classList.remove(styles.card__info);
    }, 10000);
  };

  render() {
    return (
      <a target="_blank" href={this.props.url}>
        <div
          onMouseMove={this.infoShow}
          onMouseOut={this.infoNotShow}
          className={styles.card}
        >
          <div className={styles.card__image}>
            <div className={styles.card__image__bg}></div>
            <img
              src={this.state.film?.Poster}
              // src="https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
              alt="title"
            />
          </div>
          <div ref={this.infoRef} className="displayNone">
            <h3>
              {this.state.film?.Title}
              {/* Lorem ipsum dolor */}
            </h3>
            <div className={styles.card__info__detalies}>
              <span>{this.state.film?.Runtime}</span>
              <span>США</span>
              <span>{this.state.film?.Year}</span>
            </div>
            <div
              onClick={this.handleClick}
              className={styles.card__info__description}
            >
              {this.state.film?.Plot}
              {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
              cumque odio harum maxime itaque quidem inventore eveniet libero
              voluptatum eaque. */}
            </div>
            <div className={styles.card__info__more}>Подробнее...</div>
          </div>
        </div>
      </a>
    );
  }
}

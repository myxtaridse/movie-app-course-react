import React from "react";
import SearchMovie from "../SearchMovie/SearchMovie";
import styles from "./SearchBlock.module.scss";

export class SearchBlock extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
  }
  render() {
    return (
      <div className={styles.search}>
        <div className={styles.search__line}>
          <div className={styles.search__line__name}>
            поиск: <b>{this.props.search ? this.props.search : "пусто"}</b>
          </div>
          <div className={styles.search__line__circle}></div>
          <div className={styles.search__line__quantity}>
            результат:{" "}
            <b>{this.props.films?.length ? this.props.films?.length : "0"}</b>
          </div>
        </div>
        <div className={styles.search__result}>
          {this.props.films ? (
            this.props.films.map((item) => (
              <SearchMovie key={item.imdbID} item={item} />
            ))
          ) : (
            <h4>Ничего не найдено</h4>
          )}
        </div>
      </div>
    );
  }
}

import React from "react";
import styles from "./Main.module.scss";

import { Poster } from "./index";

// передача стилей через внешний объект и состояния добавачного
export class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      pos: 0,
    };
  }
  changePos = () => {
    this.setState({ pos: this.state.pos - 100 });
  };
  render() {
    return (
      <div className={styles.bg}>
        <Poster />

        {/* <Gallery /> */}
      </div>
    );
  }
}

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { films } from "../assets/films";
import { CardMovie } from "./Main";

export class Gallery extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={{ margin: "80px 0 100px 0" }}>
        <Carousel
          // centerMode
          showThumbs={false}
          showIndicators={false}
          selectedItem={false}
          showStatus={false}
          interval="5000"
          transitionTime="5000"
        >
          <div style={{ display: "flex" }}>
            {films.slice(0, 5).map((item) => (
              <CardMovie key={item.id} id={item.id} url={item.url} />
            ))}
          </div>
          <div style={{ display: "flex" }}>
            {films.slice(5, 10).map((item) => (
              <CardMovie key={item.id} id={item.id} url={item.url} />
            ))}
          </div>
          <div style={{ display: "flex" }}>
            {films.slice(10, 13).map((item) => (
              <CardMovie key={item.id} id={item.id} url={item.url} />
            ))}
          </div>
        </Carousel>
      </div>
    );
  }
}

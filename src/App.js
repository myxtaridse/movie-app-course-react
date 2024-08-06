import React from "react";
import { Main } from "./components/index.jsx";
import Layout from "./components/Layout.jsx";
import { Route, Routes } from "react-router-dom";
import { SearchBlock } from "./components/SearchBlock/SearchBlock.jsx";
import { fetchSearchMovie } from "./helpers/fetch.js";

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
      films: [],
    };
  }
  setSearch = async (e) => {
    this.setState({ search: e.target.value });
  };
  setFetch = async () => {
    const films = await fetchSearchMovie(this.state.search);
    this.setState({ films: await films });
    // setTimeout(() => {
    //   console.log(this.state.films);
    // }, 100);
  };
  render() {
    return (
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                search={this.state.search}
                setFetch={this.setFetch}
                setSearch={this.setSearch}
              />
            }
          >
            <Route path="/" element={<Main />} />
            <Route
              path="/search"
              element={
                <SearchBlock
                  search={this.state.search}
                  films={this.state.films}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;

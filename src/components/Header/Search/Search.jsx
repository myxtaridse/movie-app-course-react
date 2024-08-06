import React from "react";
import styles from "./Search.module.scss";
import { useNavigate } from "react-router-dom";

const Search = ({ search, setSearch, setFetch }) => {
  const afterRef = React.useRef();

  const navigate = useNavigate();
  return (
    <div className={styles.search}>
      <div className={styles.search__block}>
        {/* <h1>Search this site</h1>
        <h3>Click on search icon, then type your keyword.</h3> */}
        <div className={styles.search__block__input}>
          <input
            onBlur={() => {
              afterRef.current.classList.remove("content");
            }}
            onFocus={() => {
              afterRef.current.classList.add("content");
            }}
            type="text"
            placeholder="поиск..."
            required
            value={search}
            onChange={(e) => {
              setSearch(e);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setFetch();
                navigate("/search");
              }
            }}
          />
          <div
            ref={afterRef}
            className={styles.search__block__input__after}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default Search;

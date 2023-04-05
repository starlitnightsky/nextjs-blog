import { fetchSearchBlogList } from "@/fetchApiCalls/fetchApiCalls";
import React, { useState } from "react";

const SearchComponent = () => {
  const [searchText, setSearchText] = useState("");

  const searchHandler = async () => {
    await fetchSearchBlogList(searchText);
  };

  return (
    <div className="login-form-bg pt-5 pb-5 pe-md-5 px-md-5 mt-5">
      <form className="d-flex login-form">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search posts"
          aria-label="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={searchHandler}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchComponent;

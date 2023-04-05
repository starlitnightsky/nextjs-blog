import { fetchSearchBlogList } from "@/fetchApiCalls/fetchApiCalls";
import React, { useState } from "react";

const SearchComponent = ({ setParsedBlogPosts }: any) => {
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState<string | null>(null);

  const searchHandler = async () => {
    if (searchText === "") {
      setError("Cannot be empty");
      setTimeout(() => setError(null), 3000);
      return;
    }

    await fetchSearchBlogList(searchText, setParsedBlogPosts);
  };

  return (
    <div className="login-form-bg pt-5 pb-5 pe-md-5 px-md-5 mt-5">
      <div className="d-flex login-form">
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
      </div>
      <br />
      <div className="text-center">
        {error && <span className="error-text p-2">{error}</span>}
      </div>
    </div>
  );
};

export default SearchComponent;

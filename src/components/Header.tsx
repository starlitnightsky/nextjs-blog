import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            Meme Blog
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor03"
            aria-controls="navbarColor03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <span
                  style={{ cursor: "pointer" }}
                  className="nav-link"
                  onClick={() => signOut()}
                >
                  Logout
                </span>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/create">
                  Create post
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Account Options
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/panel">
                  Activity Panel
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

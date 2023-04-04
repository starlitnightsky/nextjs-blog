import Link from "next/link";
import React, { useState } from "react";
import { loginUser } from "./loginUtil";

const LoginComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="login-form-bg pt-5 pb-5 px-md-5 pe-md-5 mb-5">
      <div className="login-form">
        <section className="card p-5 mb-5">
          <h6>Need an account?</h6>
          <Link className="link" href={"/signup"}>
            Sign Up
          </Link>
        </section>

        <form
          className="card p-5"
          onSubmit={(e) => loginUser(e, email, password)}
        >
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            className="btn btn-outline-primary"
            value={"Login"}
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};
export default LoginComponent;
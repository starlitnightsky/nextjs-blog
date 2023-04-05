import Link from "next/link";
import React, { useState } from "react";

import { loginUser } from "../login/loginUtil";
import { signupUser } from "./signupFetch";

const SignupComponent = (): JSX.Element => {
  const [role, setRole] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const registerUser = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (
      email === "" ||
      password === "" ||
      !["reader", "author", "admin"].includes(role)
    ) {
      setError("Fill/select all fields!");
      setTimeout(() => setError(null), 3000);
      return;
    }
    const sentReqErrored = (await signupUser(email, password, role)) as any;

    if (sentReqErrored?.error) {
      setError(sentReqErrored?.error);
      setTimeout(() => setError(null), 3000);
      return;
    }
  };
  return (
    <div className="login-form-bg pt-5 pb-5 px-md-5 pe-md-5 mb-5">
      <div className="login-form">
        <section className="card p-3 mb-5">
          <p>Existing User!</p>
          <Link href={"/login"}>Log In</Link>
        </section>

        <form className="card p-5" onSubmit={registerUser}>
          <label htmlFor="role">role</label>
          {/* <input
            id="role"
            type="text"
            placeholder="role"
            onChange={(e) => setRole(e.target.value)}
            required
          /> */}
          <select
            className="form-select"
            id="role"
            aria-label="Default select example"
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="select">Select Role</option>
            <option value="reader">Reader</option>
            <option value="author">Author</option>
            <option value="admin">Admin</option>
          </select>
          <br />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
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
            value={"Signup"}
            type="submit"
          />
          <br />
          <div className="text-center">
            {error && <span className="error-text p-2">{error}</span>}
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignupComponent;

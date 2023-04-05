import Link from "next/link";
import React, { useState } from "react";
import { loginUser } from "./loginUtil";

const LoginComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    if (email === "" || password === "") {
      e.preventDefault();
      setError("Fill all fields!");
      setTimeout(() => setError(null), 3000);
      return;
    }

    const sentReqErrored = await loginUser(e, email, password);

    if (sentReqErrored?.error) {
      setError(sentReqErrored?.error);
      setTimeout(() => setError(null), 3000);
      return;
    }
  };

  return (
    <div className="login-form-bg pt-5 pb-5 px-md-5 pe-md-5 mb-5">
      <div className="login-form">
        <section className="card p-5 mb-5">
          <h6>Need an account?</h6>
          <Link className="link" href={"/signup"}>
            Sign Up
          </Link>
        </section>

        <form className="card p-5" onSubmit={(e) => handleSubmit(e)}>
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
            value={"Login"}
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
export default LoginComponent;
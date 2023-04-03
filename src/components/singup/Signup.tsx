import Link from "next/link";
import React, { useState } from "react";

import { loginUser } from "../login/loginUtil";
import { signupUser } from "./signupFetch";

const SignupComponent = (): JSX.Element => {
  const [role, setRole] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const registerUser = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    signupUser(email, password, role);
  };
  return (
    <div>
      <section>
        <p>Existing User!</p>
        <Link href={"/login"}>Log In</Link>
      </section>

      <form onSubmit={registerUser}>
        <label htmlFor="role">role</label>
        <input
          id="role"
          type="text"
          placeholder="role"
          onChange={(e) => setRole(e.target.value)}
        />
        <br />
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
        <input type="submit" />
      </form>
    </div>
  );
};
export default SignupComponent;

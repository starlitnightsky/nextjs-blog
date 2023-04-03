import Link from "next/link";
import React, { useState } from "react";
import { loginUser } from "./loginUtil";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div>
      <section>
        <p>Don't have an account?</p>
        <Link href={"/sign-up"}>Sign Up</Link>
      </section>

      <form onSubmit={(e) => loginUser(e, email, password)}>
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
}

import { signIn } from "next-auth/react";
import Router from "next/router";

export const loginUser = async (
  e: React.SyntheticEvent,
  email: string,
  password: string
) => {
  e.preventDefault();
  const res: any = await signIn("credentials", {
    email: email,
    password: password,
    redirect: false,
    callbackUrl: `${window.location.origin}`,
  });
  res.error ? console.log(res.error) : redirectHome();
};

export const redirectHome = () => {
  Router.push("/");
};

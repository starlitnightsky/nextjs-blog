import rotuerReplace from "@/util/routerReplace";
import { signIn } from "next-auth/react";
import Router from "next/router";

/**
 *
 * @param e
 * @param email
 * @param password
 *
 * login user
 *
 * after sucessful login does the following:
 *
 * if path is "/login" -> the user is routed to "/"
 *
 * if path is something elselike post page -> then user is kept on the same page for ease
 */
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
  res.error ? console.log(res.error) : routerController();

  if (res.error) return { error: res.error };

 
};

/**
 *
 * @returns
 * routing logic handler
 */
const routerController = () => {
  const { asPath } = Router;

  if (asPath === "/login") {
    redirectHome();
    return;
  } else {
    //rotuerReplace(asPath);
  }
};

export const redirectHome = () => {
  Router.push("/");
};

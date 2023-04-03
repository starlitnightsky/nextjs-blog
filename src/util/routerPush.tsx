import Router from "next/router";

export const routerPush = (path: string) => {
  if (path === "") {
    Router.push("/");
  }

  Router.push(path);
};

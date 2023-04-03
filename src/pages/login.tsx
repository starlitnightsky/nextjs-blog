import React from "react";
import LoginComponent from "@/components/login/Login";
import { useSession } from "next-auth/react";
import { redirectHome } from "@/components/login/loginUtil";

const Login = () => {
  const { status } = useSession();

  if (status === "loading") {
    return "Loading or not authenticated...";
  }

  if (status === "authenticated") {
    redirectHome();

    return <></>;
  } else {
    return <LoginComponent />;
  }
};

export default Login;

import React, { useEffect } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap" as any);
  }, []);

  return (
    <SessionProvider session={session}>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

import Header from "@/components/Header";
import Layout from "@/components/Layout";
import "@/styles/globals.css";

import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

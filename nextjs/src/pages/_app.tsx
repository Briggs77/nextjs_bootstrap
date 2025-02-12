import type { AppProps } from "next/app";
import "../styles/globals.css"; 
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

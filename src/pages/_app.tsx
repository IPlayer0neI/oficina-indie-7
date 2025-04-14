import type { AppProps } from "next/app";
import "../styles/global.css";
import "7.css/dist/7.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

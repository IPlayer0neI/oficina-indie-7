import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Oficina Indie 7</title>
      <link rel="icon" href="/icon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=0.7, maximum-scale=0.7, user-scalable=no" />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
      <body className="has-scrollbar">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

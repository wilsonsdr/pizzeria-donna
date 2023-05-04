import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <title>Pizzaria Donna</title>
      <link rel="shortcut icon" href="/img/favicon.svg" type="image/x-icon" />
      <body className="mx-auto my-0 max-w-screen-xl">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

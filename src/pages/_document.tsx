import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <title>Pizzeria Donna</title>
      <link rel='shortcut icon' href='/img/decorative/favicon.svg' type='image/x-icon' />
      <body className='font-body'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

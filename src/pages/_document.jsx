import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="shortcut icon"
            href="https://images.ctfassets.net/xanbi6q061ft/4Kl2bvHsKKS0XBJzNgGkRn/b08aea42ca72b1d53a2648ee6dec57ed/favicon.png"
          />
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="robots" content="index, follow" />
        </Head>
        <body style={{ height: "100vh" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  bots =
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;800;900&family=Mochiy+Pop+P+One&display=swap"
            rel="stylesheet"
          />
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content={this.bots} />
          <meta name="bingbot" content={this.bots} />

          <meta
            name="apple-mobile-web-app-title"
            content="Dulranga's Portfolio"
          />
          <meta name="application-name" content="Dulranga's Portfolio" />
          <meta name="msapplication-TileColor" content="#00ff7f" />
          <meta name="theme-color" content="#00ff7f" />
          <meta name="robots" content="follow, index" />
          <meta name="next-font-preconnect" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Portfolio of Dulranga" />
          <meta
            property="og:description"
            content="I am Dulranga Dhawanitha. a self tought frontend developer who is more familiar with react js. Go to the website to see the projects I've done."
          />
          <meta property="og:url" content="https://www.dulranga.ml/" />
          <meta property="og:site_name" content="Dulranga Portfolio" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Portfolio of Dulranga" />
          <meta
            name="twitter:description"
            content="I am Dulranga Dhawanitha. a self tought frontend developer who is more familiar with react js. Go to the website to see the projects I've done."
          />
          <meta name="twitter:site" content="@dulrangaD" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

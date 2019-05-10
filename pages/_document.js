import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  /**
   * Creates the stylesheet for the page.
   * @param {} param0
   */
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <head>{this.props.styleTags}</head>
        <body>
            <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

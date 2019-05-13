import React from "react";
import App, { Container } from "next/app";
import { ThemeProvider } from "styled-components";

import Base from "../components/styles/base";
import Layout from "../components/layout";
import theme from "../components/styles/theme";

class KrspApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Base />
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Container>
    );
  }
}

export default KrspApp;

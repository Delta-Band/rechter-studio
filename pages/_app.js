import React from 'react';
import NextApp from 'next/app';
import {
  ThemeProvider,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core/styles';
import parser from 'ua-parser-js';
import mediaQuery from 'css-mediaquery';
import '../styles/globals.css';
import theme from '../theme';

const mobileSsrMatchMedia = (query) => ({
  matches: mediaQuery.match(query, {
    // The estimated CSS width of the browser.
    width: '0px'
  })
});

const tabletSsrMatchMedia = (query) => ({
  matches: mediaQuery.match(query, {
    // The estimated CSS width of the browser.
    width: '768px'
  })
});

const desktopSsrMatchMedia = (query) => ({
  matches: mediaQuery.match(query, {
    // The estimated CSS width of the browser.
    width: '1280px'
  })
});

const mobileMuiTheme = createMuiTheme({
  props: {
    // Change the default options of useMediaQuery
    MuiUseMediaQuery: { ssrMatchMedia: mobileSsrMatchMedia }
  }
});

const tabletMuiTheme = createMuiTheme({
  props: {
    // Change the default options of useMediaQuery
    MuiUseMediaQuery: { ssrMatchMedia: tabletSsrMatchMedia }
  }
});

const desktopMuiTheme = createMuiTheme({
  props: {
    // Change the default options of useMediaQuery
    MuiUseMediaQuery: { ssrMatchMedia: desktopSsrMatchMedia }
  }
});

function App({ Component, pageProps }) {
  console.log(pageProps.deviceType);
  return (
    <MuiThemeProvider
      theme={
        pageProps.deviceType === 'mobile'
          ? mobileMuiTheme
          : pageProps.deviceType === 'tablet'
          ? tabletMuiTheme
          : desktopMuiTheme
      }
    >
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

App.getInitialProps = async (appContext) => {
  // console.log(appContext.ctx);
  const appProps = await NextApp.getInitialProps(appContext);
  const deviceType =
    parser(appContext.ctx.req.headers['user-agent']).device.type || 'desktop';
  return { pageProps: { ...appProps, deviceType } };
};

export default App;

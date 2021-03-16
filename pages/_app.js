import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import '../styles/globals.css';
import theme from '../theme';

function App({ Component, pageProps }) {
  console.log(pageProps.deviceType);
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;

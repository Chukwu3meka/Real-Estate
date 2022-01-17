import { Head } from "next/document";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import {
  //
  Header,
  // FooterContainer,
  styles,
  // Navigation,
  // NoAuthRoute,
} from ".";

import theme from "@source/theme";

const Layout = ({
  //
  handleScroll,
  displayHeader,
  auth,
  path,
  pageReady,
  Component,
  pageProps,
  scrollRef,
  store,
  emotionCache,
}) => (
  <>
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <SnackbarProvider maxSnack={1} preventDuplicate>
            {/* <div className={styles.layout}> */}

            <div className={styles.layout} onScroll={handleScroll}>
              <Header displayHeader={displayHeader} />
              <Component {...pageProps} />
            </div>

            {/* <div >
            <div className={styles.content} ref={scrollRef}>
              {["/auth/signup", "/auth/reset", "/auth/verify", "/auth/signin"].includes(path?.split("?")[0]) ? (
                <NoAuthRoute {...{ Component, pageReady, pageProps, handleScroll }} />
              ) : (
                <div className={styles.authRoute}>{pageReady ? <Component {...pageProps} /> : <Spinner />}</div>
              )}
            </div>
            <div>
              <FooterContainer />
            </div>
            {!!auth.club && <Navigation auth={auth} />}
          </div> */}
          </SnackbarProvider>
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  </>
);
// <CacheProvider value={emotionCache}>
//   <ThemeProvider theme={theme}>
//     <Provider store={store}>
//     </Provider>
//   </ThemeProvider>
// </CacheProvider>

export default Layout;

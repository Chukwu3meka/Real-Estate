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
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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

            <Box className={styles.layout} sx={{ flexGrow: 1 }} onScroll={handleScroll}>
              <Header displayHeader={displayHeader} />
              <Grid container spacing={2}>
                <Grid item xs={6} md={8}>
                  <Item>xs=6 md=8</Item>
                </Grid>
                <Grid item xs={6} md={4}>
                  <Item>xs=6 md=4</Item>
                </Grid>
                <Grid item xs={6} md={4}>
                  <Item>xs=6 md=4</Item>
                </Grid>
                <Grid item xs={6} md={8}>
                  <Item>xs=6 md=8</Item>
                </Grid>
              </Grid>
            </Box>

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

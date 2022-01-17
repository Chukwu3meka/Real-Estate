import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import { useStore } from "@redux/index";
import LayoutContainer from "@component/layout";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  const quote = "Real Estate",
    title = `ViewCrunch Real Estate`,
    hashtag = "#ViewCrunchRealEstate",
    description = "Real Estate WEBSITE",
    keywords = "viewcrunch, Real Estate",
    currentUrl = "https://www.viewcrunch.com",
    image = "https://www.viewcrunch.com/images/ViewCrunch.webp";

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="title" content={title} key="title" />
        <meta property="quote" content={quote} key="quote" />
        <meta property="image" content={image} key="image" />
        <meta property="url" content={currentUrl} key="url" />
        <meta name="keywords" content={keywords} key="keywords" />
        <meta name="description" content={description} key="description" />

        {/* og */}
        <meta property="og:quote" content={quote} key="og:quote" />
        <meta property="og:title" content={title} key="og:title" />
        <meta property="og:url" content={currentUrl} key="og:url" />
        <meta property="og:hashtag" content={hashtag} key="og:hashtag" />
        <meta property="og:image" itemProp="image" content={image} key="og:image" />
        <meta property="og:description" content={description} key="og:description" />
        <meta property="og:image:alt" content={`${title} Image`} key="og:image:alt" />
        <meta property="og:image:type" content={image} />

        {/* Twitter */}
        <meta name="twitter:site" content="@ViewCrunch" key="twitter:site" />
        <meta name="twitter:creator" content="@ViewCrunch" key="twitter:creator" />
        <meta name="twitter:image:alt" content={`${title} Image`} key="twitter:image:alt" />

        <meta property="twitter:title" content={title} key="twitter:title" />
        <meta property="twitter:image" content={image} key="twitter:image" />
        <meta property="twitter:url" content={currentUrl} key="twitter:url" />
        <meta property="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta property="twitter:description" content={description} key="twitter:description" />

        <meta charSet="UTF-8" />
        <meta content="image/*" property="og:image:type" />

        <meta property="type" content="website" />
        <meta property="og:site_name" content="Real Estate" />
        <meta property="fb:app_id" content="332276848078020" />
        <meta property="og:url" content="https://www.facebook.com/viewcrunch/" key="og:url" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />

        <meta name="_token" content="" />
        <meta name="csrf_token" content="" />
        <meta name="theme-color" content="#e2ad26" />
        <meta name="robots" content="index, follow" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <LayoutContainer {...{ pageProps, Component, store }} />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;

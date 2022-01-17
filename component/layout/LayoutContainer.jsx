import { connect } from "react-redux";
import { useState, useEffect, useRef } from "react";

import { Layout } from ".";
import createEmotionCache from "@source/createEmotionCache";
import { setDeviceWidthAction } from "@redux/actions";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const LayoutContainer = (props) => {
  const { pageProps, Component, store, setDeviceWidthAction } = props,
    scrollRef = useRef(null),
    [online, setOnline] = useState(true),
    [lastScrollPos, setLastScrollPos] = useState(0),
    [displayHeader, setDisplayHeader] = useState(true);

  // useEffect(() => {
  //   setDeviceWidthAction(window.innerWidth);
  // }, []);

  useEffect(() => {
    // store.dispatch(setOnlineAction(window.navigator.onLine));
    // setOnline(window.navigator.onLine);
    setOnline(true);
  });

  const handleScroll = (e) => {
    if (e.target.scrollTop > lastScrollPos) {
      setDisplayHeader(false);
    } else {
      setDisplayHeader(true);
    }
    setLastScrollPos(e.target.scrollTop);
  };

  return (
    <Layout
      {...{
        handleScroll,
        displayHeader,
        Component,
        pageProps,
        scrollRef,
        store,
        emotionCache: clientSideEmotionCache,
      }}
    />
  );
};

const mapStateToProps = (state) => ({
    error: state.error,
  }),
  mapDispatchToProps = {
    setDeviceWidthAction,
  };

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);

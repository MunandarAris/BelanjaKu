import { useState, useEffect } from "react";

// global css
import "../styles/globals.css";

// next js
import dynamic from "next/dynamic";
import Router from "next/router";

// loading pages effect
const LoadingPages = dynamic(() => import("components/moleculs/LoadingPages"));

function MyApp({ Component, pageProps }) {
  // initial state
  const [loadingChangeRoutes, setLoadingChangeRoutes] = useState(false);

  // === handle change routes ===
  useEffect(() => {
    Router.events.on("routeChangeStart", () => setLoadingChangeRoutes(true));
    Router.events.on("routeChangeComplete", () =>
      setLoadingChangeRoutes(false)
    );
    Router.events.on("routeChangeError", () => setLoadingChangeRoutes(false));

    return () => {
      Router.events.off("routeChangeStart", () =>
        setLoadingChangeRoutes(false)
      );
      Router.events.off("routeChangeComplete", () =>
        setLoadingChangeRoutes(false)
      );
      Router.events.off("routeChangeError", () =>
        setLoadingChangeRoutes(false)
      );
    };
  }, []);
  // === end handle change routes ===

  return (
    <>
      {loadingChangeRoutes ? <LoadingPages /> : ""}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

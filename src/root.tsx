import {
  component$,
  PrefetchGraph,
  PrefetchServiceWorker,
  // PrefetchGraph,
  // PrefetchServiceWorker,
} from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link
          rel="manifest"
          href={`${import.meta.env.BASE_URL}manifest.json`}
        />
        <RouterHead />
        {/* <ServiceWorkerRegister /> */}
        <PrefetchGraph />
        <PrefetchServiceWorker />
      </head>
      <body lang="en">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});

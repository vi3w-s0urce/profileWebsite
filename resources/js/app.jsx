import "./bootstrap";
import React, { useEffect } from "react";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Redux/store";
import ReactGA from 'react-ga4';

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        return pages[`./Pages/${name}.jsx`];
    },
    setup({ el, App, props }) {
        ReactGA.initialize("G-22REJ11LVE");

        createRoot(el).render(
            <Provider store={store}>
                <App {...props} />
            </Provider>
        );
    },
});

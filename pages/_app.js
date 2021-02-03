import React from "react";
import '../styles/globals.css'
import {Provider} from "react-redux";
import {useStore} from "../redux/store";
import Head from "next/head";
import {menus} from "../__mocks__/menus";
import App from "next/app";
import Router from 'next/router';

import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({Component, pageProps }) => {
    const store = useStore(pageProps.initialReduxState)

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>

            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    )
}

MyApp.getInitialProps = async (appContext) => {
  let menus = await getMenus();
  const appProps = await App.getInitialProps(appContext)
  // const key = appContext.query.key
  return { ...appProps, pageProps: {...appProps.pageProps, menus} }
}

const getMenus = async () => {
  return menus
}

export default MyApp

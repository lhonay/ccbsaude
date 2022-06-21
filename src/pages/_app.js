import { useEffect } from 'react'

import NextNProgress from "nextjs-progressbar";

import '../styles/globals.css'
import '../styles/font-awesome.min.css'

function MyApp({ Component, pageProps }) {
    useEffect(() => { import('bootstrap') }, []);

    return (
        <>
            <NextNProgress />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
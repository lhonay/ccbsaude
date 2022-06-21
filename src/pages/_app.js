import { useEffect } from 'react'

import '../styles/globals.css'
import '../styles/font-awesome.min.css'

function MyApp({ Component, pageProps }) {
    useEffect(() => { import('bootstrap') }, []);

    return <Component {...pageProps} />
}

export default MyApp
import { useEffect } from 'react'

import NextNProgress from "nextjs-progressbar";
               
import '@/styles/globals.css'
import '@/styles/font-awesome.min.css'

import { AuthProvider } from '@/contexts/AuthContext'

function MyApp({ Component, pageProps }) {
    useEffect(() => { import('bootstrap') }, []);

    return (
        <AuthProvider>
            <NextNProgress />
            <Component {...pageProps} />
        </AuthProvider>
    )
}

export default MyApp
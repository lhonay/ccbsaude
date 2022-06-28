import NextNProgress from 'nextjs-progressbar'
import { AuthProvider } from '@/contexts/AuthContext'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import '@/styles/globals.css'

const MyApp = ({ Component, pageProps }) => (
    <AuthProvider>
        <NextNProgress />
        <ToastContainer />
        <Component {...pageProps} />
    </AuthProvider>
)

export default MyApp
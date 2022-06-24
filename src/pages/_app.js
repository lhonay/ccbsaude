import NextNProgress from 'nextjs-progressbar'
import { AuthProvider } from '@/contexts/AuthContext'
               
import '@/styles/globals.css'
import '@/styles/font-awesome.min.css'

const MyApp = ({ Component, pageProps }) => (
    <AuthProvider>
        <NextNProgress />
        <Component {...pageProps} />
    </AuthProvider>
)

export default MyApp
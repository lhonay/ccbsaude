import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Index() {
    return (
        <div className={styles.container}>
            <p>Teste</p>
            <Link href="/home">
                <a>this page!</a>
            </Link>
        </div>
    )
}
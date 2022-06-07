import Link from "next/dist/client/link"
import styles from '../styles/Layout.module.css'

export default function Layout(props) {
    console.log(props)
    return (
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <Link href="/">Voltar</Link>
            </div>
            <div className={styles.conteudo}>
                {props.children}
            </div>    
        </div>
    )
}
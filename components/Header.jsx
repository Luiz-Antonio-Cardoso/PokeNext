import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.css'
export default function Header(){

    return (
        
        <header>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <Image height={`30px`} width={`30px`} alt='logo' src='/images/pokeball.png'></Image>
                    <h1>Pokenext</h1>
                </div>
                
                <ul className={styles.link_items}>
                    <li><Link href="/"><a > Home</a></Link></li>
                    <li><Link href="/about"><a >About </a></Link></li>
                </ul>
            </nav>
        </header>
    )   
}
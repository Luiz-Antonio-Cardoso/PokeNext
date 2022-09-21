import Image from "next/image";
import styles from '../../styles/About.module.css';

export default function About(){

    return( 
        <main className={styles.container}>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, totam? Recusandae libero fugit veritatis earum ducimus impedit culpa, mollitia consequuntur expedita porro dolore, in error, quos facilis natus reprehenderit architecto!</p>
            <Image src='/images/charizard.png' width={`250px`} height={`250px`}></Image>
        </main>
    )
}
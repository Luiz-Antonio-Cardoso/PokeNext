
import Image from "next/image";
import Link from "next/link";

import styles from '../styles/Card.module.css';

export default function Card(props){
    const src = `https://cdn.traction.one/pokedex/pokemon/${props.pokemon.id}.png`;

    return(
        <div className={styles.card}>
            <Image src={src} height={`150px`} width={`150px`}/>
            <p>#{props.pokemon.id}</p>
            <h3 >{props.pokemon.name}</h3>
            <Link href={`/pokemon/${props.pokemon.id}`}><a>Detalhes</a></Link>

        </div>
    )
}
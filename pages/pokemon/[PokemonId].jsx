import Image from "next/image";

import styles from '../../styles/pokemon.module.css'

export const getStaticPaths = async () => {
    const maxPok = 256;
    const api = "https://pokeapi.co/api/v2/pokemon";
  
    const res = await fetch(`${api}?limit=${maxPok}`);
    const data = await res.json();
    const paths = data.results.map((pokemon, index )=>{
        return{
            params: {
                PokemonId: (index+1).toString()
            },
        }
    })
    return {
        paths,
        fallback: false 
    } 
   
  }
export const getStaticProps = async (contex) => {
    
    const id = contex.params.PokemonId;
    const api = "https://pokeapi.co/api/v2/pokemon";
    const res = await fetch(`${api}/${id}`);
    const data = await res.json();

    return {
        props: { pokemon: data}
    }
}
export default function Pokemon({pokemon}){
    const src = `https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`;


    return(
        <div className={styles.pokemon_container}>
            <h1 className={styles.title}>{pokemon.name}</h1>
            <Image src={src} height={`200px`} width={`200px`}/>
            <div>
                <h3>Número: </h3>
                <p>#{pokemon.id}</p>
                <h3>Tipo: </h3>
                <div className={styles.pokemon_types}>
                    {pokemon.types.map((element, index) =>(
                        <span key={index} className={`${styles.type} ${styles['type_'+element.type.name]}`}>{ element.type.name}</span>
                    ))}
                </div>
            </div>
            <div className={styles.data_container}>
                <div className={styles.data_height}>
                    <h4> Atura: </h4>
                    <p>{pokemon.height * 10}Cm</p>
                </div> 
                <div className={styles.data_weight}>
                    <h4> Peso: </h4>
                    <p>{pokemon.weight /10}Kg</p>
                </div>
            </div>
        </div>
        
    )
}
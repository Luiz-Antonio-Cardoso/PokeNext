import styles from "../styles/Home.module.css";

import Image from "next/image";


import Card from "../components/Card";

export async function getStaticProps() {
  const maxPok = 256;
  const api = "https://pokeapi.co/api/v2/pokemon";

  const res = await fetch(`${api}?limit=${maxPok}`);
  const data = await res.json();
  data.results.forEach((element, index) => {
    element.id = index + 1;
  });

  return { props:{
    pokemons: data.results
  }  };
}

export default function Home({ pokemons }) {
  return (
    <main className={styles.container}>
      <div className={styles.title_container}>
        <h1>Poke<span>Next</span></h1>
        <Image src={`/images/pokeball.png`} height={`50px`} width={`50px`}></Image>
      </div>
      <div className={styles.poke_conteinar}>
        {
          pokemons.map((element) =>(
            <Card key={element.id} pokemon={element}/>
          ))
        }
      </div>
    </main>
  );
}

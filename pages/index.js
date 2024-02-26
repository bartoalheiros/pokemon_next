import styles from "@/styles/Home.module.css";

import Image from "next/image";

import Card from "./components/Card";

export async function getStaticProps() {

  const maxPokemons = 253
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()
  let ret = [];
  
  // add pokemon index
  data.results.forEach((item, index) => {
   if(item.name !== "unown") {
    item.id = index + 1 
    ret.push(item)
   }
  })

  return {
    props: {
      pokemons: ret,
    },
  }

}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Next</span></h1>
        <Image 
          src="/images/pokeball.png" 
          width="50" 
          height="50" 
          alt="PokeNext" 
        />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}

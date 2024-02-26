export const getStaticPaths = async() => {

  const maxPokemons = 253
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  // params
  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: index.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async(context) => {

  const id = context.params.pokemonId

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  
  const data = await res.json()

  let ret = [];
  
  // add pokemon index
  /*data.results.forEach((item, index) => {
   if(item.name !== "unown") {
    item.id = index + 1 
    ret.push(item)
   }
  })*/

  return {
    props: { pokemon: data },
  }
}

export default function Pokemon({ pokemon }) {
  console.log(pokemon)
  return <p>{ pokemon.name }</p>
}
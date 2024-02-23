import Image from "next/image"

import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor, lacus vitae finibus congue, dolor dui luctus ex, sed feugiat odio quam maximus tortor. 
      Pellentesque tempor, felis eget convallis pellentesque, dolor purus posuere felis, vitae sagittis nunc lorem vitae mauris.
      </p>
      <Image 
        src="/images/charizard.png" 
        width="300" 
        height="300" 
        alt="Charizard" 
      />
    </div>
  )
}
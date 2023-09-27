import Character from '../character'
import styles from './Characters.module.css'

const Characters = ({ characters }) => {
  return <ul className={styles.container}>{characters.map((character) => <Character character={character} key={character.id} />)}</ul>
}

export default Characters

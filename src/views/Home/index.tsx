import ButtonList from "./components/ButtonList"
// import "./Home.css"
import styles from "./Home.module.css"

const Home = () => {
  return (
    <div>
      <button className={styles.info}>Botón info</button>
      <button className={styles.success}>Botón</button>
      <ButtonList />
    </div>
  )
}

export default Home

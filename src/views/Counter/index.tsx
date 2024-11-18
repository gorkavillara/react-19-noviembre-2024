import { useState } from "react"
import styles from "./Counter.module.scss"

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <button
      //   className={count > 10 ? styles.greaterThanTen : styles.lowerThanTen}
      className={`${styles.customButton} ${styles.otherStyles} ${
        count > 10 ? styles.greaterThanTen : styles.lowerThanTen
      }`}
      style={{
        boxShadow: `0 0 20px ${count > 10 ? "#fff" : "#00f"}`
      }}
      onClick={() => setCount((prev) => prev + 1)}
    >
      {count}
    </button>
  )
}

export default Counter

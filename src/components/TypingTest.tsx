import { useState, useEffect, useRef } from "react"
import { wordsArray, totalTime } from "../assets/constants"

let timeInterval: NodeJS.Timeout

const getRandomWord = () => {
  const randomId = Math.floor(Math.random() * wordsArray.length)
  return wordsArray[randomId]
}

const TypingTest = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [typedWord, setTypedWord] = useState("")
  const [currentWord, setCurrentWord] = useState<string | null>(null)
  const [correctWords, setCorrectWords] = useState<string[]>([])
  const [incorrectWords, setIncorrectWords] = useState<string[]>([])
  const [timeLeft, setTimeLeft] = useState<number | null>(null)

  //   const [wordState, setWordState] = useState({
  //     currentWord: null,
  //     correctWords: [],
  //     incorrectWords: []
  //   })

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!isRunning) return
    if (!timeLeft) return
    if (timeLeft > 0) return

    endGame()
  }, [timeLeft, isRunning])

  useEffect(() => {
    if (!isRunning) return

    timeInterval = setInterval(() => {
      setTimeLeft((time) => {
        return time! - 1
      })
    }, 1000)

    return () => {
      clearInterval(timeInterval)
    }
  }, [isRunning])

  useEffect(() => {
    if (!isRunning) return
    if (!inputRef.current) return

    inputRef.current.focus()

  }, [isRunning, inputRef])

  const startGame = () => {
    setIsRunning(true)
    setCurrentWord(getRandomWord())
    setTimeLeft(totalTime)
    setCorrectWords([])
    setIncorrectWords([])

    // Focus en el input
    if (!inputRef.current) return
    inputRef.current.focus()
  }

  const endGame = () => {
    setIsRunning(false)
    setTypedWord("")
    setCurrentWord(null)
    clearInterval(timeInterval)

    alert(`Enhorabuena! has acertado ${correctWords.length} palabras`)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Si el usuario ha pulsado enter tenemos que chequear
    if (e.key !== "Enter") return
    if (!currentWord) return

    // La lógica para chequear
    // console.log(typedWord)
    // console.log(getRandomWord())
    if (typedWord === currentWord) {
      setCorrectWords((words) => [...words, currentWord])
    } else {
      setIncorrectWords((words) => [...words, currentWord])
    }
    setTypedWord("")
    setCurrentWord(getRandomWord())
  }
  return (
    <div style={{ display: "grid", placeContent: "center", padding: "1rem" }}>
      <h1>Typing Test</h1>
      {isRunning ? (
        <>
          <p>Tiempo restante: {timeLeft} s</p>
          <p>{currentWord}</p>
          <input
            type="text"
            ref={inputRef}
            value={typedWord}
            onChange={(e) => setTypedWord(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <p>Palabras correctas: {correctWords.length}</p>
          <p>Palabras incorrectas: {incorrectWords.length}</p>
        </>
      ) : (
        <button onClick={startGame}>Empezar</button>
      )}
    </div>
  )
}

export default TypingTest

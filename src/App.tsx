import React, { useState, useEffect, useRef } from "react";

const wordsArray = [
  "react", "typescript", "javascript", "html", "css", "frontend", "backend",
  "component", "state", "props", "hook", "useEffect", "useState", "API", 
  "npm", "node", "express", "router", "typescript", "asynchronous", 
  "json", "jsx", "tsx", "render", "promise", "event", "function", 
  "context", "module", "babel", "var", "realsociedad", "barça", "lewandoski"
];


function App() {
  const [currentWord, setCurrentWord] = useState<string>("");
  const [inputText, setInputText] = useState<string>("");
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [incorrectCount, setIncorrectCount] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const charactersTyped = useRef<number>(0);

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordsArray.length);
    return wordsArray[randomIndex];
  };

  const startTest = () => {
    setInputText("");
    setCorrectCount(0);
    setIncorrectCount(0);
    setTimeLeft(60);
    charactersTyped.current = 0;
    setCurrentWord(getRandomWord());
    setIsRunning(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (inputText.trim() === currentWord) {
        setCorrectCount((prev) => prev + 1);
        charactersTyped.current += inputText.trim().length;
      } else {
        setIncorrectCount((prev) => prev + 1);
      }
      setInputText("");
      setCurrentWord(getRandomWord());
    }
  };

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      alert(
        `¡Enhorabuena! Tiempo terminado. 
        Palabras correctas: ${correctCount}, 
        Palabras incorrectas: ${incorrectCount}, 
        Caracteres por minuto: ${charactersTyped.current}`
      );
    }
  }, [isRunning, timeLeft, correctCount, incorrectCount]);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Typing Test</h2>
      <p>Tiempo restante: {timeLeft} segundos</p>
      <p>Palabra a escribir:</p>
      <blockquote>{currentWord}</blockquote>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="Escribe la palabra y presiona Enter"
        style={{ width: "80%", padding: "10px", fontSize: "16px" }}
      />
      <p>Palabras correctas: {correctCount}</p>
      <p>Palabras incorrectas: {incorrectCount}</p>
      {!isRunning && (
        <button onClick={startTest}>Iniciar prueba</button>
      )}
    </div>
  );
}

export default App;

interface Props {
  handleClick: () => void
  inputRef: React.RefObject<HTMLInputElement>
}

const FocusButton = ({ inputRef }: Props) => {
  const focusInputRef = () => {
    console.log(inputRef.current)
    if (!inputRef.current) return

    inputRef.current.focus()
  }
  return <button onClick={focusInputRef}>Rellena Formulario</button>
}

export default FocusButton

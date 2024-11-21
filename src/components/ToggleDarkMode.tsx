const ToggleDarkMode = ({
  isDarkMode,
  setIsDarkMode,
}: {
  isDarkMode: boolean
  setIsDarkMode: (val: boolean) => void
}) => {
  return (
    <input
      type="checkbox"
      checked={isDarkMode}
      onChange={(e) => setIsDarkMode(e.target.checked)}
    />
  )
}

export default ToggleDarkMode

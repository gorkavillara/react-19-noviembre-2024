import ToggleDarkMode from "./ToggleDarkMode"

const Settings = ({
  isDarkMode,
  setIsDarkMode,
}: {
  isDarkMode: boolean
  setIsDarkMode: (val: boolean) => void
}) => {
  return (
    <div>
      <input type="text" placeholder="nombre de la app" />
      <ToggleDarkMode isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  )
}

export default Settings

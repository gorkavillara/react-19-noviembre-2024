import { Typography } from "@mui/material"
import Button from "@mui/material/Button"

const App = () => {
  return (
    <>
      <Typography variant="h3" sx={{ py: 8 }}>Hola mundo desde Material UI</Typography>
      <Button size="large" variant="contained">
        Clic
      </Button>
      <Button size="medium" variant="outlined">
        Clic
      </Button>
      <Button size="small" variant="text">
        Clic
      </Button>
    </>
  )
}

export default App

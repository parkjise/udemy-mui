
import {Button} from "@mui/material"

export default function App() {
  // margin-bottom
  // marginBottom
  return (
    <div className="App">
    <h1>Hello CodeSandbox</h1>
    <h2 style={{color:"red",marginBottom:"140px"}}>Start editing to see some magic happen!</h2>
    <Button 
    color="primary" 
    variant="contained" 
    sx={{
      color:"warning.contrastText",
      borderColor:(theme) => theme.palette.primary.main,
      borderStyle:"solid",
      borderWidth:"5px",
      bgcolor:"green",
      px:"150px",
      typography:"h1",
      fontSize:"18px",
      margin:50,
      fontWeight:""
      }}>
    My Button</Button>
  </div>
  )
}
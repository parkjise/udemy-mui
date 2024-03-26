import React from 'react'
import ReactDOM from 'react-dom/client'
import ButtonStyles from './page/ButtonStyles.jsx'
// import App from './App.jsx'
import RadioButtonsGroup from './page/RadioButtonsGroup.jsx'
import { createTheme,ThemeProvider } from '@mui/material'
import AutocompleteEx from './page/AutocompleteEx.jsx'
import Autocompletes from './page/Autocompletes.jsx'

const theme = createTheme({
  palette:{
    primary:{
      main:"#008000"
    },
    secondary:{
      main:"#ffa500"
    },
    customColors:{
      royalBlue:"#4169e1"
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <App /> */}
      {/* <ButtonStyles /> */}
      {/* <RadioButtonsGroup/> */}
      {/* <AutocompleteEx/> */}
      <Autocompletes/>
    </ThemeProvider>
  </React.StrictMode>,
)

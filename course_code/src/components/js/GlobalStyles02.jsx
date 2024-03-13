import * as React from 'react';
import {StyledEngineProvider,createTheme,ThemeProvider} from '@mui/material/styles';
import BasicButtonsJs from './BasicButtonsJs';

const theme = createTheme({
  components:{
    MuiButton:{
      styleOverrides:{
        // root:{
        //   color:"white",
        //   bgolor:"red",
        //   borderRadius:10,
        //   border:"solid 10px red",
        //   width:"10rem",
        //   height:"5rem"
        // },
        text:{
          color:"white",
          bgolor:"red",
          borderRadius:10,
          border:"solid 10px red",
          width:"10rem",
          height:"5rem"
        }
      }
    }
  },
  typography: {
    blueTextClass03 :{
      color:"white",
      bgolor:"red",
      borderRadius:50,
      border:"solid 10px #000",
      height:"5rem",
      width:"10rem"
    }
  }
})
export default function GlobalStyles02(){
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BasicButtonsJs />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
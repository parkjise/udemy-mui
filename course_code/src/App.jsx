
import { useState } from "react"
import {Button,Box} from "@mui/material"
import BasicButtonsJs from './components/js/BasicButtonsJs'
import BasicMenu from './components/js/BasicMenu'
export default function App() {

  const [open,setOpen] = useState(false);

  // margin-bottom
  // style tag : marginBottom
  //  sx prop : mb

  // fontSize : 10 -> fontSize : "10px"
  // fontSize : h5.fontSize -> theme.typography.h5.fontSize

  // color : primary.main -> theme.palette.primary.main


  // width/height : [0,1] -> %
  // width/height : 50 -> 50px
  // width/height : 25rem -> 25rem


  // maxWidth : md -> theme.breakpoints.values[md]
  // borderRadius: 4 -> theme.shape.borderRadius * 4(val) 
  // boxShadow/dropShadow:20 -> theme.shadows[20]
  // zIndex:"modal" -> theme.zIndex["modal"]
  return (
    <div className="App">
    <h1>Hello CodeSandbox</h1>
    <h2 style={{color:"red",marginBottom:"140px"}}>Start editing to see some magic happen!</h2>
    {/* <Button 
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
      fontWeight:"",
      width:0.25,
      maxWidth:"md",
      borderRadius:2,
      boxShadow:20,
      // zIndex:"modal"
      zIndex:(theme) => theme.zIndex["modal"] + 1,
      }}>
    My Button</Button> */}
    <Button
    onClick={() => setOpen(!open)} 
    sx={[
      {
        borderColor:(theme) => theme.typography.h1.color,
        borderStyle:"solid",
        borderWidth:"2px",
        // width:1/4,
        width:1,
        maxWidth:"xl",
        borderRadius:2,
        boxShadow:20,
        bgcolor:{xs:"green",sm:"purple"},
        // bgcolor:open ? "red" : "black",
        zIndex:(theme) => theme.zIndex["modal"] + 1,
        "&:hover":{
          bgcolor:"orange",
        },
        "& p,h1":{
          color:"#000",
        }
      },
      open && {
        bgcolor:"red",
        fontSize:"2rem",
      },
      ]}>
    My Button2
    <p>My paragraph Text</p>
    <h1>my h1 text</h1>
    </Button>
    <Box sx={{marginTop:"100px"}}>
      <BasicButtonsJs />
    </Box> 
    <Box sx={{marginTop:"100px"}}>
      <BasicMenu />
    </Box> 
  </div>
  )
}
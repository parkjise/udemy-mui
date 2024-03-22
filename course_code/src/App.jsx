
import { useState } from "react"
import {Button,Box, GlobalStyles,Checkbox} from "@mui/material"
import BasicButtonsJs from './components/js/BasicButtonsJs'
import BasicMenu from './components/js/BasicMenu'
import GlobalStyles02 from './components/js/GlobalStyles02'
import {styled} from "@mui/material/styles"
import {blueTextClass02} from './components/js/styles'
import RadioButtonsGroup from './page/RadioButtonsGroup'
const CustomButton = styled(Button)(({theme}) => theme.unstable_sx({
    [`&.${blueTextClass02.contained}`]:{
      borderColor:(theme) => theme.typography.h1.color,
      borderStyle:"solid",
      borderWidth:"2px",
      // width:1/4,
      width:1,
      maxWidth:"xl",
      borderRadius:2,
      // boxShadow:20,
      // bgcolor:{xs:"green",sm:"purple"},
      bgcolor:"customColors.royalBlue",
      boxShadow:(theme) => theme.shadows[15],
      fontSize:"2rem",
      mb:{xs:4,sm:3,md:2,lg:1,xl:0},
      // bgcolor:open ? "red" : "black",
      zIndex:(theme) => theme.zIndex["modal"] + 1,
      "&:hover":{
        bgcolor:"orange",
      },
      "& p,h1":{
        color:"#000",
      }
    }
}))
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
    <RadioButtonsGroup />
    <h2>1111</h2>
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
    <CustomButton
    onClick={() => setOpen(!open)} 
    variant="contained"
    sx={[
      
      open && {
        bgcolor:"red",
        fontSize:"2rem",
      },
      ]}>
    My Button2
    <p>My paragraph Text</p>
    <h1>my h1 text</h1>
    </CustomButton>
    <Box sx={{marginTop:"100px"}}>
      <BasicButtonsJs />
    </Box> 
    <Box sx={{marginTop:"100px"}}>
      <BasicMenu />
    </Box> 
    <Box sx={{marginTop:"100px"}}>
      <GlobalStyles02 />
    </Box>
    <div>
      Some Extra Text
    </div>
    <Checkbox color="secondary"/>
  </div>
  )
}
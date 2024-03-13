import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
import {styled} from '@mui/material/styles';
import {blueTextClass02} from './styles';


const MyReusableComponent = props => {
  return (
    <Button sx={{color:props.color, bgcolor:props.color === "#fff" ? "#000" : "orange"}}>
      {props.children}
    </Button>
  )
}

const blueTextClass = {
  color:"blue", bgcolor:"red",borderRadius:"30px"
}
const myOtherClass = {
  color:"black", bgcolor:"yellow",borderRadius:"0"
}

export const MyStyleButton = styled(Button)(({theme}) => ({
    color:theme.palette.primary.main,
    backgroundColor:theme.palette.secondary.main,
    borderRadius:10,
    padding:8
  }));

export default function BasicButtonsJs() {
  const [activated,setActivated] = useState(false)
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button onClick={() => setActivated(!activated)}  variant="contained" sx={{bgcolor:activated ? "green" : "black"}}>Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button disabled variant="contained" sx={{"&.Mui-disabled":{
      color:"red",
      }}}>Dash</Button>
      <Button  variant="contained" sx={{...blueTextClass,...myOtherClass}}>blueTextClass</Button>
      <Button  sx={blueTextClass02} variant="contained">blueTextClass02</Button>
      <MyStyleButton>Test Button</MyStyleButton>
      <MyReusableComponent>Test Button</MyReusableComponent> 
      <Button  variant="contained" sx={{typography:"blueTextClass03"}}>GlobalStyles</Button>
      <Button  variant="text" >GlobalStyles02</Button>
    </Stack>
  );
}
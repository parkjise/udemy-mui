import {useState} from 'react'
import {Button,IconButton,ButtonGroup} from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const ButtonMui = () => {
  const  [disabled,setDisabled] = useState(true)
  return (
    <div>
      <Button variant="contained" disabled={disabled}>My Button</Button>
      <Button variant="outlined">Save As Draft</Button>
      <Button
        disabled
        sx={{
          bgcolor:"orange",
          color:"white",
          "&:hover": {
            bgcolor:"black"
          },
          "&.Mui-disabled" : {
            bgcolor:"#000",
            color:"white"
          }
        }}
        size="large"// small medium
        color="secondary"
        endIcon = {<ArrowForwardIcon/>}
        // component={Link}
        // to="/contact"
        component="a" // a 태그 변환
        href="https://naver.com"
        onClick={() => console.log("Clicked me!")} 
        disableRipple 
        disableElevation 
        variant='contained'>
        Cancel
      </Button>
      <IconButton onClick={() => setDisabled(false)} disableRipple color='secondary'><ArrowForwardIcon/></IconButton>
      <ButtonGroup 
      orientation="vertical" 
      color='error' 
      size='large' 
      variant='contained'
      disableElevation
      disableRipple // active 물결효과 없앰
      // disabled
      >
        <Button>First</Button>
        <Button variant='outlined'>Second</Button>
        <Button disabled>Third</Button>
      </ButtonGroup>
      <ButtonGroup 
      color='error' 
      size='large' 
      variant='contained'
      disableElevation
      disableRipple // active 물결효과 없앰
      // disabled
      >
        <Button>First</Button>
        <ButtonGroup orientation="vertical">
          <Button>2</Button>
          <Button>2.5</Button>
        </ButtonGroup>
        <Button>Third</Button>
      </ButtonGroup>
    </div>
  )
}

export default ButtonMui

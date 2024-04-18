import React, { useState } from 'react'
import { Checkbox , FormControlLabel,FormGroup, FormControl } from '@mui/material'
import Battery20Icon from '@mui/icons-material/Battery20'
import BatteryFullIcon from '@mui/icons-material/BatteryFull'
import AppleIcon from '@mui/icons-material/Apple'

const CheckBoxMui = () => {
  const [checked,setChecked] = useState(false);
  const [checked2,setChecked2] = useState(false);
  const [checked3,setChecked3] = useState(false);
  return (
    <div>
      <FormControl
        // disabled
      >
        <FormGroup row
          sx={{
            "& .MuiFormControlLabel-label" : {
              color:"red",
              fontSize:"2rem",
              "&.Mui-disabled": {
                color:"#000"
              }
            },
            "& .MuiCheckbox-root" : {
              "& .MuiSvgIcon-root" : {
                fontSize:40
              },
              color:"red",
              "&.Mui-checked" : {
                color:"black"
              }
            }
          }}
        >
          <FormControlLabel 
          control={
            <Checkbox
            // icon={<Battery20Icon/>}
            // checkedIcon={<BatteryFullIcon/>}
            // indeterminate
            // indeterminateIcon={<AppleIcon/>}
            size='medium'
            sx={{

            }}
            // color='secondary'
            // disabled
            // defaultChecked
            // disableRipple
            checked={checked} 
            onChange={(event) => setChecked(event.target.checked)}
            />
          }
          label="My Value"
          // labelPlacement='bottom'
          inputProps={{"aria-label" : "checkbox 1"}}
          />
          <FormControlLabel control={
            <Checkbox
            // icon={<Battery20Icon/>}
            // checkedIcon={<BatteryFullIcon/>}
            // indeterminate
            // indeterminateIcon={<AppleIcon/>}
            size='medium'
            color='secondary'
  
            // disabled
            // defaultChecked
            checked={checked2} 
            onChange={(event) => setChecked2(event.target.checked)}
            />
          }
          label="My Value"
          // labelPlacement='bottom'
          />
          <FormControlLabel control={
            <Checkbox
            // icon={<Battery20Icon/>}
            // checkedIcon={<BatteryFullIcon/>}
            // indeterminate
            // indeterminateIcon={<AppleIcon/>}
            size='medium'
            color='secondary'
  
            // disabled
            // defaultChecked
            checked={checked3} 
            onChange={(event) => setChecked3(event.target.checked)}
            />
          }
          label="My Value"
          // labelPlacement='bottom'
          />
        </FormGroup>
      </FormControl>
    </div>
  )
}

export default CheckBoxMui

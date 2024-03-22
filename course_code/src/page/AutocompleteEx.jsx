import { Autocomplete,TextField,Paper } from "@mui/material";
import { useState } from "react";

const CustomPaper=(props) => {
  const {sx,...otherProps} = props
  return (
    <Paper {...otherProps} sx={{
        ...sx,
        bgcolor:"purple",
        ".MuiAutocomplete-option":{
            color:"#ffffff",
            fontSize:"1rem"
        }
      }}>
      {props.children}
    </Paper>
  )
}

export default function AutocompleteEx() {
  const [value,setValue] = useState([]);
  const options = ["Apple","Banana","Pear","Orange"];

  return (
    <Autocomplete
      multiple
      open
      value={value}
      ChipProps={{
        sx:{
          bgcolor: "green",
          ".MuiChip-label":{
            color:"#fff",
          }
        }
      }}
      PaperComponent={CustomPaper}
      onChange={(e, newValue) => setValue(newValue)}
      id="combo-box-demo"
      options={options}
      // sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Fruit" />}
    />
  );
}
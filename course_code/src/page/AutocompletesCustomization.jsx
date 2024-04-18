import React from "react";
import { Autocomplete, TextField, Paper, autocompleteClasses, inputLabelClasses, outlinedInputClasses, inputBaseClasses } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppleIcon from "@mui/icons-material/Apple";
 
const textStyles = {
  color: "#FFF",
  fontSize: "1rem",
  fontFamily: "Verdana"
};
 
function CustomPaper(props) {
  return (
    <Paper
      sx={{
        bgcolor: "purple",
        [`& .${autocompleteClasses.option}`]: {
          ...textStyles,
          borderBottom: "1px solid #FFF"
        },
        [`& .${autocompleteClasses.groupLabel}`]: {
          bgcolor: "#000",
          color: "#FFF"
        }
      }}
      {...props}
    />
  );
}
 
export default function App() {
  const [value, setValue] = React.useState([]);
  const options = [
    { name: "Apple", year: 2022 },
    { name: "Banana", year: 2020 },
    { name: "Pear", year: 2020 },
    { name: "Orange", year: 2022 }
  ];
 
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Autocomplete
        multiple
        groupBy={(option) => option.year}
        noOptionsText={<span style={{ ...textStyles }}>Custom Response</span>}
        PaperComponent={CustomPaper}
        sx={{
          width: "15rem",
          bgcolor: "lightblue",
          "& > div > label": {
            color: "purple",
            fontSize: "1rem",
            fontFamily: "Verdana"
          },
          [`& > div > .${inputLabelClasses.focused}`]: {
            color: "green"
          },
          [`&:focus-within .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "green"
          },
          [`& .${inputBaseClasses.input}`]: {
            // height: "5rem"
          },
          [`& .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "red",
            borderRadius: 0,
            borderWidth: 2
          },
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "blue"
          },
          [`& .${autocompleteClasses.clearIndicator}`]: {
            "& > svg": {
              fill: "red"
            }
          },
          [`& .${autocompleteClasses.popupIndicator}`]: {
            "& > svg": {
              fill: "blue"
            }
          }
        }}
        value={value}
        ChipProps={{
          sx: {
            bgcolor: "blue",
            color: "#FFF",
            fontFamily: "Verdana",
            fontSize: "0.5rem",
            "& > svg": {
              fill: "red"
            }
          },
          deleteIcon: <AppleIcon />
        }}
        clearIcon={<AccountCircleIcon />}
        popupIcon={<AppleIcon />}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        onChange={(event, newValue) => setValue(newValue)}
        options={options.sort((a, b) => (a.year > b.year ? 1 : -1))}
        getOptionLabel={(option) =>
          typeof option === "string"
            ? option
            : `${option.name} - ${option.year}`
        }
        renderInput={(params) => <TextField {...params} label="Fruit" />}
      />
    </div>
  );
}
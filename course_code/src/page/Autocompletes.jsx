import { Autocomplete,TextField,Paper } from "@mui/material";
import { useState } from "react";

export default function Autocompletes() {

  const [value,setValue] = useState(null);

  const options = [
    {name:"Apple",year:2024},
    {name:"Banna",year:2023}, 
    {name:"Pear",year:2022}, 
    {name:"Orange",year:2021}
  ];

  console.log(value)

  return (
    <div>
      <Autocomplete
        freeSolo
        value={value}
        onBlur={(event) =>  event.target.value !== value ? setValue(event.target.value) : null}
        isOptionEqualToValue={(option,value)  => option.name === value.name}
        onChange={(event,newValue)  => setValue(newValue)}
        // disabled
        size="medium"
        // multiple
        options={options.sort((a,b) => a.year > b.year ? 1 : -1)}
        // limitTags={2}//  항목 최대 선택 수
        getOptionDisabled={(option) => option.year == 2020}
        // groupBy={(option) => option.year}
        getOptionLabel={(option) => 
          typeof option === "string" 
          ? option 
          :`${option.name} - ${option.year}`
        }
        // renderOption={(props,option)  => (
        //   <div
        //   {...props} 
        //   style={{
        //     backgroundColor:option.label.toLowerCase().includes("p") ? "lightyellow" : "null"}}
        //   >
        //   {option.label}
        //   </div>
        //   )}
        renderInput={(params) => <TextField {...params} label="Fruit" />}>
      </Autocomplete>
    </div>
  );
}
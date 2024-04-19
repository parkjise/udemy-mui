import { Fab } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'


const FabStyle = () => {
  return (
    <div>
      <Fab
        // variant="extended"
        sx={{
          bgcolor:"green",
          color:"#fff",
          fontSize:"2rem",
          "&:hover" : {
            bgcolor:"purple"
          },
          "&.Mui-disabled": {
            bgcolor:"#000",
            color:"blue"
          }
        }}
      >
        <AddIcon />
        {/* New User */}
      </Fab>
    </div>
  )
}

export default FabStyle

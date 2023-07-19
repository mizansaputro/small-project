import { SxProps, Theme } from "@mui/material";
import { yellow } from "@mui/material/colors";

export const PokemonBoxItemsContainer = {
    width: 1,
    p: 10,
    m: {
        xs: 5,
        lg: 10,
    },
    mb: {xs: 37},
    mt: 0,
    borderRadius: 2,
    boxShadow: 3,
    border: `1px solid ${yellow[400]}`,
} as SxProps<Theme>

export const PokemonBoxCardItems = {
    display: "flex",
    w: 1,
    justifyContent: {
        xs: "space-evenly",
        lg: "flex-start",
    }
    ,gap: {
        xs: 2,
        lg: 10,
    },
    alignItems: "flex-start",
    boxSizing: "border-box",
    flexWrap: "wrap",
} as SxProps<Theme>

export const PokemonBoxPagination = {
    display:"flex", 
    justifyContent:"center", 
    alignItems:"flex-end", 
    mt: 5,
    ml:-6,
    boxSizing:"border-box",
    position: {
        xs:"absolute",
        lg: "relative",
    },    
} as SxProps<Theme>



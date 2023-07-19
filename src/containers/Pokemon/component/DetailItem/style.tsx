import { SxProps, Theme } from "@mui/material";
import { blue, yellow } from "@mui/material/colors";

export const PokemonBoxContainer = {
    width: 1,
    height: 1,
    padding: {
        xs: 5,
        md: 10,
    },
    pt: {
        xs: 10,
    },
} as SxProps<Theme>;


export const PokemonBoxComponent = {
    width: 1,
    height: {
        xs: 900,
        lg: 600,
    },
    display: "flex",
    backgroundColor: "white",
    border: `1px solid ${yellow[400]}`,
    boxShadow: 4,
    borderRadius: 2,
    p: {
        xs: 10,
        lg: 15,
    },
    overflow: "hidden",
    justifyContent: "space-evenly",
    alignItems: 'center',
    flexDirection: {
        xs: "column",
        md: "row",
    },
} as SxProps<Theme>;

export const PokemonBoxCard = {
    width: {
        xs: 300,
        lg: 400,
    },
    height: {   
        xs: 300,
        lg: 400,
    },
    border: `1px solid ${yellow[400]}`,
    borderRadius: 4,
    boxShadow: 4,
    gap: 10,
    display: "flex",
    alignItems: 'center',
    p: 10,
} as SxProps<Theme>;

export const PokemonBoxTitleImgContainer = {
    display: "flex", 
    justifyContent: "center", 
    w: 1,
    mb: 10,
}as SxProps<Theme>

export const PokemonBoxTitleImg ={
    width: {
        xs: 200,
        md: 300,
    },
}as SxProps<Theme>

export const PokemonBoxItemImg ={
    width: 1,
    height: 1,
}as SxProps<Theme>

export const PokemonNameInformation = {
    textTransform: "Capitalize", 
    fontWeight: 600,
    color: blue[900],
}as SxProps<Theme>

export const PokemonBoxDetailPokemon = {
    marginTop: 5,
    
}as SxProps<Theme>

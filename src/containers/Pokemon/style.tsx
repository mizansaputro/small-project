import { SxProps, Theme } from "@mui/material";
import { blue, pink, yellow } from "@mui/material/colors";

export const PokemonBoxContainer = {
    width: 1,
    height: 1,
    padding: {
        xs: 1,
        md: 10,
    },
    pt: {
        xs: 10,
    },
} as SxProps<Theme>;

export const PokemonBoxComponent = {
    width: 1,
    height: {
        xs: 800,
        lg: 1000,
    },
    backgroundColor: "white",
    border: {
        md: `1px solid ${yellow[400]}`,
    },
    boxShadow: {
        xs: "none",
        md: 4,
    },
    borderRadius: {
        xs: "none",
        md: 2,
    },
    pt: {
        md: 10,
    },
    overflow: "hidden",
} as SxProps<Theme>;

export const PokemonBoxTitleImgContainer = {
    display: "flex", 
    justifyContent: "center", 
    w: 1,
}
export const PokemonBoxTitleImg = {
    width: {
        xs: 200,
        md: 300,
    },
} as SxProps<Theme>;

export const PokemonBoxMenus = {
    w: 1,
    height: 763,
    display: "flex",
    mt: 10,
} as SxProps<Theme>;




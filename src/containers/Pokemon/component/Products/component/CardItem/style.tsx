import { SxProps, Theme } from "@mui/material";
import { yellow } from "@mui/material/colors";

export const PokemonBoxCardItem = {
    width: {
        xs: 150,
        lg: 255,
    },
    height: {
        xs: 150,
        lg: 255,
    },
    borderRadius: 2,
    border: 'none',
    boxShadow: 3,
    p: {
        xs: 5,
        lg: 5,
    },
    overflow: 'hidden',
    '&:hover': {
        cursor: "pointer",
        border: `1px solid ${yellow[400]}`,
    },
} as SxProps<Theme>

export const PokemonBoxItemImg ={
    width: {
        xs: 80,
        lg: 155,
    },
    height: {
        xs: 80,
        lg: 155,
    },
    borderRadius: 2,
} as SxProps<Theme>

export const PokemonTitleItem = {
    fontSize: {
        xs: 12,
        lg: 18,
    },
    fontWeight: 600,
} as SxProps<Theme>
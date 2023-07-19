import { SxProps, Theme } from "@mui/material";
import { blue, pink, red, yellow } from "@mui/material/colors";

export const PokemonBoxMenuFilter = {
    width: 1/4,
    backgroundColor: "white",
    borderRadius: 2,
    boxShadow: 4,
    paddingX: {
        md: 3,
    },
    zIndex: 10,
    ml: 5,
    my: 10,
    border: `1px solid ${yellow[400]}`,
} as SxProps<Theme>;

export const PokemonBoxMenuFilterMobile = {
    width: 1,
    backgroundColor: "white",
    borderRadius: 2,
    boxShadow: 4,
    paddingX: 3,
    ml: 5,
    border: `1px solid ${yellow[400]}`,
    mb: {
        xs: 37,
    },
} as SxProps<Theme>;


export const PokemonBoxArrow = {
    backgroundColor: "white",
    display: "flex",
    mt: 20,
    alignItems: "flex-start",
} as SxProps<Theme>;

export const PokemonBoxSearchField = {
    mt: 5,
    display: "flex",
    alignItems: "center",
} as SxProps<Theme>;

export const PokemonBoxSearchBtn = {
    mt: 5,
    borderRight: `1px solid ${pink[100]}`,
    display: "flex",
    alignItems: "center",
    boxShadow: 0,
} as SxProps<Theme>;

export const PokemonBoxFilterField = {
    mt: 20,
    paddingX: 3,
} as SxProps<Theme>;

export const PokemonFilterTitle = {
    textAlign: "left",
    fontWeight: 600,
    fontSize: 20,
    color: 'white',
    backgroundColor: yellow[500],
    width: 150,
    px: 2,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
} as SxProps<Theme>;

export const PokemonBoxFilterBtnContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    float: "left",
    alignItems: "flex-start",
    boxSizing: "border-box",
    w: 1,
    px: 4,
    mt: 5,
    gap: 2,
} as SxProps<Theme>;
 
export const PokemonFilterBtn = {
    bgcolor: 'none',
    boxShadow: 3,
    border: `1px solid ${blue[100]}`,
    '&:hover': {
        bgcolor: red[400],
        cursor: "pointer",
        color: "white",
    }
} as SxProps<Theme>;
export const PokemonFilterBtnActive = {
    bgcolor: blue[400],
    color: 'white',
    boxShadow: 3,
    border: `1px solid ${blue[100]}`,
    '&:hover': {
        bgcolor: red[400],
        cursor: "pointer",
    }
} as SxProps<Theme>;



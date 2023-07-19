import { SxProps, Theme } from "@mui/material";
import { blue, grey, pink, green, red, yellow, brown } from '@mui/material/colors';


export const TodoBoxContainer = {
    backgroundColor: 'white',
    height: 1,
    width: 1,
    paddingX: {
        xs: 5,
        lg: 20,
    },
    paddingY: 10,
    display: "flex",
    justifyContent: "space-evenly",
    alignContent: "space-evenly" ,
    flexWrap: "wrap",
    gap: 2
} as SxProps<Theme>;

export const TodoTabContainer = {
    width: 1,
    display: "flex",
    justifyContent: "space-evenly",
    alignContent: "space-evenly" ,
    flexWrap: "wrap",
} as SxProps<Theme>;

export const TodoBoxContainerHidden = {
    position: "fixed",
    width: 1/2,
    padding: 10,
    top: 0,
    right: 0,
    height: 1,
    backgroundColor: pink[50],
} as SxProps<Theme>;


import { SxProps, Theme } from "@mui/material";
import { blue, grey, pink, green, red, yellow } from '@mui/material/colors';

export const TodoBoxCardContainer = {
    backgroundColor: "white",
    width: {
        xs: 450,
        xl: 500
    },
    height: {
        xs: 450,
        xl: 500
    },
    borderRadius: 5,
    padding: 10,
    border: `1px solid ${blue[100]}`,
    boxShadow: 4
} as SxProps<Theme>;

export const TodoCreateTaskBoxTitle = {
    width: 1,
    display: "flex",
    justifyContent: "space-evenly",
    alignContent: "space-evenly" ,
    flexWrap: "wrap",

} as SxProps<Theme>;
export const TodoCreateTaskBoxForm = {
    width: 1,
    marginTop: 10,
} as SxProps<Theme>;

export const TodoBoxNotificationSuccess = {
    position: "absolute",
    backgroundColor: green[500],
    color: "white",
    top: 0,
    height: 30,
    pt: 1,
    width: 1,
    left:0,
    textAlign: 'center'
} as SxProps<Theme>;

export const TodoBoxNotificationFailed = {
    position: "absolute",
    backgroundColor: red[500],
    color: "white",
    top: 0,
    height: 30,
    pt: 1,
    width: 1,
    left:0,
    textAlign: 'center'
} as SxProps<Theme>;

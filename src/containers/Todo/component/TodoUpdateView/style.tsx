import { SxProps, Theme } from "@mui/material";
import { blue, grey, pink, green, red, yellow, brown } from '@mui/material/colors';

export const TodoBoxCardContainer = {
    mt: 10,
    backgroundColor: "white",
    borderRadius: 4,
    boxShadow: 4,
    height: 500,
    p: 10,
} as SxProps<Theme>;
export const TodoBoxFlexForm = {
    display: "flex",
    w: 1,
} as SxProps<Theme>;
export const TodoBoxBlockForm = {
    w: 1,
    mt: 5,
} as SxProps<Theme>;

export const TodoBtnClose = {
    position: "absolute",
    backgroundColor: "white",
    border: `1px solid ${blue[100]}`,
    right: 50,
} as SxProps<Theme>;

export const TodoBtnUpdate = {
    backgroundColor: blue[400],
    width: 90, 
    color: 'white',
    mx: "auto",
    mt: 5,
    '&:hover': {
        backgroundColor: yellow[400]
    }
    
} as SxProps<Theme>;

export const TodoBoxNotificationSucces = {
    position: "absolute",
    backgroundColor: blue[500],
    color: "white",
    top: 0,
    height: 30,
    width: 1,
    pt: 1,
    left: 0,
    textAlign: 'center'
} as SxProps<Theme>;

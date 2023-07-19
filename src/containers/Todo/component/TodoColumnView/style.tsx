import { SxProps, Theme } from "@mui/material";
import { blue, grey, pink, green, red, yellow } from '@mui/material/colors';

export const TodoBoxCardContainer = {
    backgroundColor: "white",
    width: {
        xs: 500,
        xl: 600
    },
    height: {
        xs: 500,
        xl: 600
    },
    borderRadius: 5,
    padding: 10,
    border: `1px solid ${blue[100]}`,
    boxShadow: 4
} as SxProps<Theme>;

export const TodoBtnUpdate = {
    bgcolor: green[500],
    color: 'white',
    width: 10,
    '&:hover': {
        bgcolor: yellow[500]
    }
} as SxProps<Theme>;

export const TodoBtnDelete = {
    bgcolor: red[500], 
    width: 10,
    color: 'white',
    border: 'none',
    '&:hover': {
        bgcolor: yellow[500]
    }
} as SxProps<Theme>;

export const TodoGridColumnContainer = {
    border: `1px solid ${grey[400]}`,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: {
        xs: 380,
        xl: 480,
    },
    overflowY: 'scroll',
} as SxProps<Theme>;
export const TodoGridColumnHeader = {
    border: `1px solid ${grey[400]}`,
    borderBottom: `1px solid black`,
    display: 'flex',
    backgroundColor: pink[100],
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
} as SxProps<Theme>;

export const TodoGridColumnHeaderText = {
    width: 1,
    fontWeight: 700,
    textAlign: "center",
} as SxProps<Theme>;

export const TodoGridColumnRow = {
    width: 1,
    pt: 2,
    height: 90,
    fontWeight: 400,
    fontSize: 12,
    borderBottom: `1px solid black`,
    display: 'flex',
    bgcolor: "white",
} as SxProps<Theme>;


export const TodoGridColumnRowText = {
    width: 1,
    textAlign: 'left',
    fontWeight: 400,
    fontSize: 12,
} as SxProps<Theme>;
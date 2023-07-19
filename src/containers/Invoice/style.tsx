import { SxProps, Theme } from "@mui/material";
import { pink } from "@mui/material/colors";

export const InvoiceBoxContainer = {
    width: 1,
    height: 1,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: {
        xs: "wrap",
        md: "nowrap",
    },
    gap: 10,
    backgroundColor: pink[200],
} as SxProps<Theme>

export const InvoiceBoxCard = {
    width: 1,
    height: 1,
    padding: 10,
    border: "none",
    borderRadius: 4,
    boxShadow: 4,
    backgroundColor: "white",
    my: {
        xs: 5,
        lg: 0,
    },
} as SxProps<Theme>

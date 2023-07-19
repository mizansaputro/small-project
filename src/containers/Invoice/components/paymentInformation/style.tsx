import { SxProps, Theme } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

export const InvoiceBoxTimeValid = {
    w:1, 
    height: 1,
    backgroundColor: grey[100],
    my: 5,
    p: 5,
    border: 'none',
    borderRadius: 2,
    boxShadow: 2,
    textAlign: "center", 
} as SxProps<Theme>

export const InvoiceBoxCardInformation = {
    borderRadius: 2,
    boxShadow: 2,
    padding: 5,
    border: `1px solid ${blue[50]}`,
}as SxProps<Theme>

export const InvoiceBoxText = {
    width: 1,
    display: "flex",
    justifyContent: "space-around",
}as SxProps<Theme>
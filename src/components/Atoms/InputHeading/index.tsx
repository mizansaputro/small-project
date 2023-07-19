import React, { FC } from "react";
import { StandardTextFieldProps, TextField } from "@mui/material";
import { inputContainer } from "@components/Atoms/InputHeading/style";

interface Props extends StandardTextFieldProps {
    color?: StandardTextFieldProps["color"];
}

const BaseInputHeading: FC<Props> = ({ color, sx = [], ...props }) => {
    return (
        <TextField
            {...props}
            variant="standard"
            sx={[inputContainer(color), ...(Array.isArray(sx) ? sx : [sx])]}
        />
    );
};

BaseInputHeading.defaultProps = {
    color: "primary",
};

export default BaseInputHeading;

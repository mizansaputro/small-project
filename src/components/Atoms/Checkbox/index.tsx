import React, { FC } from "react";
import { Checkbox, CheckboxProps } from "@mui/material";
import { checkboxContainer } from "@components/Atoms/Checkbox/style";

interface Props extends CheckboxProps {}

const BaseCheckbox: FC<Props> = ({ color, ...props }) => {
    return <Checkbox disableRipple sx={checkboxContainer(color)} {...props} />;
};

BaseCheckbox.defaultProps = {};

export default BaseCheckbox;

import React, { FC } from "react";
import { Radio, RadioProps } from "@mui/material";
import { radioContainer } from "@components/Atoms/RadioButton/style";

interface Props extends RadioProps {}

const BaseRadioButton: FC<Props> = ({ color, ...props }) => {
    return <Radio disableRipple sx={radioContainer(color)} {...props} />;
};

BaseRadioButton.defaultProps = {};

export default BaseRadioButton;

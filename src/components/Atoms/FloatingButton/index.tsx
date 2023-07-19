import React, { FC } from "react";
import { Fab, FabProps } from "@mui/material";

interface Props extends FabProps {}

const BaseFloatingButton: FC<Props> = ({ children, ...props }) => {
    return <Fab {...props}>{children}</Fab>;
};

BaseFloatingButton.defaultProps = {};

export default BaseFloatingButton;

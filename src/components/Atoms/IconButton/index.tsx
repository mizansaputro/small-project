import React, { FC } from "react";
import { IconButton, IconButtonProps } from "@mui/material";
import { iconContainer } from "@components/Atoms/IconButton/style";

interface Props extends IconButtonProps {
    component?: string;
    variant?: "default" | "contained" | "outlined";
    noPadding?: boolean;
}

const BaseIconButton: FC<Props> = ({
    children,
    color,
    noPadding,
    sx = [],
    variant,
    ...props
}) => {
    return (
        <IconButton
            {...props}
            sx={[
                iconContainer(variant, color, noPadding),
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        >
            {children}
        </IconButton>
    );
};

BaseIconButton.defaultProps = {
    noPadding: false,
    variant: "default",
};

export default BaseIconButton;

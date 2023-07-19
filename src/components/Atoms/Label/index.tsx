import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { labelContainer, iconContainer } from "@components/Atoms/Label/style";
import { BaseIconButton } from "@components/Atoms";

interface Props {
    color?:
        | "primary"
        | "secondary"
        | "tertiary"
        | "error"
        | "info"
        | "success"
        | "warning";
    colorVariant?: "light" | "dark";
    size?: "small" | "medium" | "large";
    title: React.ReactNode;
    icon?: React.ReactNode;
}

const BaseLabel: FC<Props> = ({
    color,
    colorVariant,
    icon,
    title,
    size,
    ...props
}) => {
    return (
        <Box sx={labelContainer(color, colorVariant, size)} {...props}>
            {icon && (
                <Box sx={iconContainer(size)}>
                    <BaseIconButton size={size} color={color}>
                        {icon}
                    </BaseIconButton>
                </Box>
            )}
            {typeof title === "string" ? (
                <Typography variant="labelMedium">{title}</Typography>
            ) : (
                title
            )}
        </Box>
    );
};

BaseLabel.defaultProps = {
    color: "primary",
    size: "medium",
    icon: null,
};

export default BaseLabel;

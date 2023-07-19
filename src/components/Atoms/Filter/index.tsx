import React, { FC } from "react";
import { boxContainer } from "@components/Atoms/Filter/style";
import { Box, BoxProps, Stack, Typography } from "@mui/material";

interface Props extends BoxProps {
    color?:
        | "primary"
        | "secondary"
        | "tertiary"
        | "success"
        | "error"
        | "info"
        | "warning";
    variantColor?: "solid" | "outline";
    checked?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    icon?: React.ReactNode;
    iconPosition?: "start" | "end";
    handleOnClick?: (value: string) => void;
    size?: "small" | "medium" | "large";
    title?: string;
    value?: string;
}

const BaseFilter: FC<Props> = ({
    color,
    checked,
    disabled,
    fullWidth,
    icon,
    iconPosition,
    handleOnClick,
    size,
    title,
    value,
    variantColor,
    ...props
}) => {
    const typographyFont = () => {
        switch (size) {
            case "medium":
                return "paragraphLargeBold";
            case "large":
                return "headingSmall";
            default:
                return "paragraphMediumBold";
        }
    };

    const onClickAction = (): void => {
        if (disabled) {
            return;
        }

        return handleOnClick(value);
    };

    return (
        <Box
            sx={boxContainer(
                checked,
                disabled,
                color,
                size,
                variantColor,
                fullWidth,
            )}
            onClick={onClickAction}
        >
            <Stack direction="row" spacing={2} alignItems="center" {...props}>
                {icon && iconPosition === "start" && icon}
                <Typography variant={typographyFont()} noWrap>
                    {title}
                </Typography>
                {icon && iconPosition === "end" && icon}
            </Stack>
        </Box>
    );
};

BaseFilter.defaultProps = {
    color: "primary",
    checked: false,
    disabled: false,
    fullWidth: true,
    icon: null,
    iconPosition: "start",
    size: "medium",
    variantColor: "outline",
    title: "",
};

export default BaseFilter;

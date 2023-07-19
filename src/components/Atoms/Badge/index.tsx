import React, { FC } from "react";
import Image from "next/image";
import { Badge, BadgeProps, Box, Typography } from "@mui/material";
import {
    badgeContainer,
    boxContainer,
    typographyStyle,
} from "@components/Atoms/Badge/style";

interface Props extends BadgeProps {
    type?: "text" | "text-icon" | "icon" | "tabs";
    icon?: any;
    text?: string | number;
}

const BaseBadge: FC<Props> = ({ type, icon, text, children, ...props }) => {
    const customContent = () => {
        let tempRender = null;

        if (type === "text-icon" || type === "icon")
            tempRender = (
                <Box color={props.color} sx={boxContainer}>
                    {(type === "text-icon" || type === "icon") && (
                        <Image
                            alt="badge-icon"
                            src={icon}
                            height={12}
                            width={12}
                            layout="fixed"
                            loading="eager"
                        />
                    )}
                    {type === "text-icon" && (
                        <Typography
                            variant="headingSmall"
                            sx={typographyStyle(type)}
                        >
                            {text}
                        </Typography>
                    )}
                </Box>
            );

        if (type === "text" || type === "tabs") {
            tempRender = text;
        }

        return {
            badgeContent: tempRender,
            sx: badgeContainer(type),
        };
    };

    return (
        <Badge {...customContent()} {...props}>
            {children}
        </Badge>
    );
};

BaseBadge.defaultProps = {
    type: "text",
    icon: undefined,
    text: "",
};

export default BaseBadge;

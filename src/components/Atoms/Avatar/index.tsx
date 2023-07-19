import React, { FC } from "react";
import { Avatar, AvatarProps, Badge } from "@mui/material";
import { avatarStyle } from "@components/Atoms/Avatar/style";
import { isEmpty } from "@utils/validation";

interface Props extends AvatarProps {
    name: string;
    source?: string;
    badgeContent?: React.ReactNode;
    badgeHorizontal?: "left" | "right";
    badgeVertical?: "bottom" | "top";
    size?:
        | "xx-small"
        | "x-small"
        | "small"
        | "medium"
        | "large"
        | "x-large"
        | "xx-large"
        | "xxx-large";
}

const BaseAvatar: FC<Props> = ({
    name,
    badgeContent,
    badgeHorizontal,
    badgeVertical,
    source,
    size,
    ...props
}) => {
    const stringAvatar = (text: string) => {
        const lengthName = text.split(" ").length;

        return {
            sx: avatarStyle(text, size),
            ...(source
                ? {
                      src: source,
                  }
                : {
                      children:
                          lengthName > 1
                              ? `${text.split(" ")[0][0]}${
                                    text.split(" ")[1][0]
                                }`
                              : `${text.split(" ")[0][0]}`,
                  }),
        };
    };

    if (!isEmpty(badgeContent)) {
        return (
            <Badge
                overlap="circular"
                anchorOrigin={{
                    vertical: badgeVertical,
                    horizontal: badgeHorizontal,
                }}
                badgeContent={badgeContent}
            >
                <Avatar {...stringAvatar(name)} alt={name} {...props} />
            </Badge>
        );
    }

    return <Avatar {...stringAvatar(name)} alt={name} {...props} />;
};

BaseAvatar.defaultProps = {
    name: "Default",
    badgeHorizontal: "right",
    badgeVertical: "bottom",
    source: "",
    size: "medium",
};

export default BaseAvatar;

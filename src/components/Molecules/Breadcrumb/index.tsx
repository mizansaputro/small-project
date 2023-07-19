import React, { FC } from "react";
import { Breadcrumbs } from "@mui/material";

interface Props {
    list: any[];
}

const BaseBreadcrumb: FC<Props> = () => {
    return <Breadcrumbs></Breadcrumbs>;
};

BaseBreadcrumb.defaultProps = {
    list: [],
};

export default BaseBreadcrumb;

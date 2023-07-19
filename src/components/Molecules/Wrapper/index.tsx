import React, { FC } from "react";
import { Container, Grid, Stack } from "@mui/material";
import { wrapperContainer } from "@components/Molecules/Wrapper/style";
import { BaseHeader } from "@components/Atoms";

interface Props {
    children: React.ReactNode;
    page: string;
    fullMode?: boolean;
    noFooter?: boolean;
}

const BaseWrapper: FC<Props> = ({ children, fullMode, noFooter, page }) => {
    return (
        <>
            <BaseHeader page={page} />
            <Container maxWidth="xxxl" disableGutters>
                <Grid container sx={wrapperContainer(fullMode, noFooter)}>
                    <Grid item xs={12}>
                        <Stack>{children}</Stack>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

BaseWrapper.defaultProps = {
    fullMode: false,
    noFooter: false,
};

export default BaseWrapper;

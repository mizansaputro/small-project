import React, { FC } from "react";

import { BaseWrapper } from "@components/Molecules";

import HomeContainer from "@containers/Home";

interface Props {}

const Index: FC<Props> = () => (
    <BaseWrapper page="home">
        <HomeContainer />
    </BaseWrapper>
);

export default Index;

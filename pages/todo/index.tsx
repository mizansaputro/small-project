import React, { FC } from "react";

import { BaseWrapper } from "@components/Molecules";
import TodoContainer from "@containers/Todo";

interface Props {}

const Index: FC<Props> = () => (
    <BaseWrapper page="todo">
        <><TodoContainer/></>
    </BaseWrapper>
);

export default Index;

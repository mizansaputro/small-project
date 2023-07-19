import React, { FC } from "react";

import { BaseWrapper } from "@components/Molecules";
import PokemonContainer from "@containers/Pokemon";

interface Props {}

const Index: FC<Props> = () => (
    <BaseWrapper page="pokemon">
        <><PokemonContainer/></>
    </BaseWrapper>
);

export default Index;

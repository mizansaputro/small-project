import React, { FC } from "react";

import { BaseWrapper } from "@components/Molecules";
import PokemonDetailContainer from "@containers/Pokemon/component/DetailItem";

interface Props {
    item: any;
}

const Index: FC<Props> = ({item}) => (
    <BaseWrapper page="pokemon/id">
        <>
            <PokemonDetailContainer 
                id={item.id} 
                name={item.name} 
                abilities={item.abilities} 
                weight={item.weight} 
                height={item.height} 
                sprites={item.sprites.back_default}
            />
        </>
    </BaseWrapper>
);

export default Index;

export const getServerSideProps = async ({params}) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`);
    const data = await response.json();
    return {
        props: {
            item: data
        }
    }
}
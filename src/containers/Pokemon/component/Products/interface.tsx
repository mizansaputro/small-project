import React, {Dispatch, SetStateAction} from "react";

export interface Props {
    isMobile: boolean;
    isArrowActive: boolean;
    countItems: number;
    offset: number;
    setOffset: Dispatch<SetStateAction<number>>;
    nextLink: string;
    setNextLink: Dispatch<SetStateAction<string>>;
    prevLink: string;
    setPrevLink: Dispatch<SetStateAction<string>>;
    pokemonItems: any;
    setPokemonItems: Dispatch<SetStateAction<any>>;
    items: any[];
    setItems: Dispatch<SetStateAction<any[]>>;
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
}
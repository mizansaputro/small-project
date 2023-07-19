import React, { useEffect, useState } from 'react'
import { Box, Pagination, Typography } from '@mui/material';
import { PokemonBoxComponent, PokemonBoxContainer, PokemonBoxMenus, PokemonBoxTitleImg, PokemonBoxTitleImgContainer } from './style';
import FilterComponent from './component/Filter';
import ProductsComponent from './component/Products';
import { getListPokemon, getPokemonItem, getPokemonItems } from '@datastore/server/repository/PokemonRepository';


const Pokemon = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isArrowActive, setIsArrowActive] = useState<boolean>(false);
    const [filterBtnActive, setFilterBtnActive] = useState<string>("");
    const [countItems, setCountItems] = useState<number>(0);
    const [offset, setOffset] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const [nextLink, setNextLink] = useState<string|null>("");
    const [prevLink, setPrevLink] = useState<string|null>("");
    const [pokemonItems, setPokemonItems] = useState([]);
    const [items, setItems] = useState([]);

    const handleResize = (): void => {
        if (window.innerWidth < 1024) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
            setIsArrowActive(false);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);   
        
        setCountItems(0);
        setNextLink("");
        setPrevLink("");
        setPokemonItems([]);

        getPokemonItems(6, offset)
            .then((res) => {
                setCountItems(res.count);
                setNextLink(res.next);
                setPrevLink(res.previous);
                setPokemonItems(res.results);
            });
        
    }, [offset]);
    
    return (
        <Box sx={PokemonBoxContainer}>
            <Box sx={PokemonBoxComponent}>
                <Box>
                    <Box sx={PokemonBoxTitleImgContainer}>
                        <Box 
                            component='img' 
                            src="https://www.freepnglogos.com/uploads/pokemon-logo-transparent-png-2.png" 
                            alt="pokemon-text-title" 
                            sx={PokemonBoxTitleImg}
                        />
                    </Box>
                    <Box sx={PokemonBoxMenus}>
                        <FilterComponent 
                            isMobile={isMobile}
                            setIsMobile={setIsMobile}
                            isArrowActive={isArrowActive}
                            setIsArrowActive={setIsArrowActive}
                            filterBtnActive={filterBtnActive}
                            setFilterBtnActive={setFilterBtnActive}
                        />
                        
                        <ProductsComponent 
                            isMobile={isMobile}
                            isArrowActive={isArrowActive}
                            countItems={countItems}
                            offset={offset}
                            setOffset={setOffset}
                            nextLink={nextLink}
                            setNextLink={setNextLink}
                            prevLink={prevLink}
                            setPrevLink={setPrevLink}
                            pokemonItems={pokemonItems}
                            setPokemonItems={setPokemonItems}
                            items={items}
                            setItems={setItems}
                            page={page}
                            setPage={setPage}
                        />
                    </Box>
                   
                </Box>
            </Box>
        </Box>
    );
}

export default Pokemon;

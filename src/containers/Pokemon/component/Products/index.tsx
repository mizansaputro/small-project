import { getPokemonItem } from '@datastore/server/repository/PokemonRepository';
import { Box, Pagination } from '@mui/material';
import { yellow } from '@mui/material/colors';
import React, { ChangeEvent, FC, useEffect, useState} from 'react'
import CardItemComponent from './component/CardItem';
import { Props } from './interface';
import { PokemonBoxCardItems, PokemonBoxItemsContainer, PokemonBoxPagination } from './style';

const ProductsComponent: FC<Props> = ({
    isMobile, 
    isArrowActive, 
    countItems,
    offset,
    setOffset,
    nextLink,
    setNextLink,
    prevLink,
    setPrevLink,
    pokemonItems,
    setPokemonItems, 
    items,
    setItems,
    page,
    setPage,
    }) => {
    const limitPageDesktop: number = 6;
    const limitPageMobile: number = 3;

    
    const handlerPageChange = (event:ChangeEvent, newPage:number): void => {
        setPage(newPage);
    }
    const getItemPokemon =  () => {
        setItems([]);
        pokemonItems?.map(item => {
            getPokemonItem(item.name)
                .then(res => {
                    setItems(old => [...old, res]);
                })
            ;   
        });
    }

    useEffect(() => {
        setOffset((page-1)*6);
        getItemPokemon();
    }, [page, pokemonItems]);
    
    return (
        <Box sx={isMobile && isArrowActive? {display:"none"}:PokemonBoxItemsContainer}>
            <Box sx={PokemonBoxCardItems}>
                {
                    
                    isMobile && items?.slice(0,limitPageMobile).map((item, key) => (
                        <CardItemComponent 
                            key={key}
                            name={item.name} 
                            id={item.id}
                            abilities={item?.abilities}
                            weight={item?.weight}
                            height={item?.height}
                            sprites={item?.sprites?.back_default}
                            item={item}
                        />
                    ))
                }
                {
                    !isMobile && items?.slice(0,limitPageDesktop).map((item, key) => (
                        <CardItemComponent 
                            key={key}
                            name={item.name} 
                            id={item.id}
                            abilities={item?.abilities}
                            weight={item?.weight}
                            height={item?.height}
                            sprites={item?.sprites?.back_default}
                            item={item}

                        />
                    ))
                }

            </Box>
            <Box sx={PokemonBoxPagination}>
                <Pagination 
                    count={isMobile? Math.ceil(countItems/limitPageMobile):Math.ceil(countItems/limitPageDesktop)}
                    hidePrevButton
                    hideNextButton
                    variant="outlined" 
                    shape="rounded" 
                    color="primary"
                    onChange={handlerPageChange}
                />
            </Box>
        </Box>
    );
}

export default ProductsComponent;

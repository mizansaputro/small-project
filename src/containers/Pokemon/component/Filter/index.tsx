import { Button, TextField, Box, Backdrop, Slide, Typography } from '@mui/material';
import React, { FC, useEffect, useState } from 'react'
import { 
    Search, 
    KeyboardDoubleArrowLeft as ArrowLeft,
    KeyboardDoubleArrowRight as ArrowRight,
} from '@mui/icons-material';
import { PokemonBoxArrow, PokemonBoxFilterBtnContainer, PokemonBoxFilterField, PokemonBoxMenuFilter, PokemonBoxMenuFilterMobile, PokemonBoxSearchBtn, PokemonBoxSearchField, PokemonFilterBtn, PokemonFilterBtnActive, PokemonFilterTitle } from './style';
import { Props } from './interface';

const FilterComponent: FC<Props> = ({isMobile, isArrowActive, setIsArrowActive, filterBtnActive, setFilterBtnActive}) => {

    const handlerArrowClick = (): void => {
        setIsArrowActive(!isArrowActive);
    }

    const handlerClickFilterBtn = (item: string): void => {
        item===filterBtnActive? setFilterBtnActive(""):setFilterBtnActive(item);
    } 

    

    //Render View
    const renderFilterBtnContainer = (item: string, key: number): JSX.Element => {
        return (
            <Button 
                key={key}
                sx={filterBtnActive===item? PokemonFilterBtnActive:PokemonFilterBtn}
                onClick={() => handlerClickFilterBtn(item)}
            >
                {item}
            </Button>
        )
    }
    const renderFilterContainer = (): JSX.Element => {
        return (
            <Box sx={PokemonBoxFilterField}>
                <Typography sx={PokemonFilterTitle}>Filter By</Typography>
                <Box sx={PokemonBoxFilterBtnContainer}>
                    {renderFilterBtnContainer("Mizan", 1)}
                    {renderFilterBtnContainer("Mizan Saputro", 2)}
                    {renderFilterBtnContainer("Mizan 3", 3)}
                    {renderFilterBtnContainer("Mizan 4", 4)}
                    {renderFilterBtnContainer("Mizan 5", 5)}
                </Box>
            </Box>
        );
    }
    const renderFilterMenu = (): JSX.Element => {
        return (
            <Box sx={isMobile? PokemonBoxMenuFilterMobile:PokemonBoxMenuFilter}>
                <Box sx={PokemonBoxSearchField}>
                    <Box sx={PokemonBoxSearchBtn}>
                        <Button>
                            <Search/>
                        </Button>
                    </Box>
                    <TextField 
                        id="search" 
                        label="Search..." 
                        variant="standard"
                        sx={{ml:4, width: 1}} 
                    />
                </Box>  
                {renderFilterContainer()}
            </Box>
        )
    }

    useEffect(() => {
        
    }, []);
    
    return (
        <>
            {
                isMobile?
                    <>
                        <Slide 
                            direction="right" 
                            in={isArrowActive} 
                            mountOnEnter 
                            unmountOnExit
                        >
                            {renderFilterMenu()}
                        </Slide>
                        <Box sx={PokemonBoxArrow}>
                            {
                                isArrowActive? 
                                <Button onClick={handlerArrowClick}><ArrowLeft/></Button>
                                :
                                <Button onClick={handlerArrowClick}><ArrowRight/></Button>
                            }
                        </Box>
                    </>
                    
                    :
                    renderFilterMenu()
            }
            
        </>
    )
}

export default FilterComponent;

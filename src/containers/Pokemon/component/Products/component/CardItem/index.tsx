import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react'
import { Props } from './interface';
import { PokemonBoxCardItem, PokemonBoxItemImg, PokemonTitleItem } from './style';

const CardItemComponent: FC<Props> = ({id, name, abilities, weight, height, sprites, item}) => {
  const router = useRouter();

  const handlerClickCardItem = (): void =>{
    router.push(`/pokemon/${name}`);
  } 

  return (
    <Box onClick={handlerClickCardItem} sx={PokemonBoxCardItem}>
        <Box sx={{display:"flex", justifyContent:"center"}}>
            <Box 
                component='img' 
                src={sprites} 
                alt="pokemon-text-title" 
                sx={PokemonBoxItemImg}
            />
        </Box>
        <Box sx={{
                display:"flex", 
                justifyContent:"center", 
                mt:{xs:2, lg:3}
            }}>
            <Typography sx={PokemonTitleItem}>{name}</Typography>
        </Box>
    </Box>
  );
}

export default CardItemComponent;

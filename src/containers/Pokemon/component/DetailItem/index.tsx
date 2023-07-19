import { Box, Button, Typography } from '@mui/material';
import { grey, yellow } from '@mui/material/colors';
import { useRouter } from 'next/router';
import React, { FC } from 'react'
import { Props } from './interface';
import { PokemonBoxCard, PokemonBoxComponent, PokemonBoxContainer, PokemonBoxDetailPokemon, PokemonBoxItemImg, PokemonBoxTitleImg, PokemonBoxTitleImgContainer, PokemonNameInformation } from './style';

const DetailItem:FC<Props> = ({id, name, abilities, weight, height, sprites}) => {
    const router = useRouter()
    
    const handlerClickBackToListPokemon = (): void =>{
        router.push('/pokemon');
    }
  return (
        <Box sx={PokemonBoxContainer}>
            <Box sx={PokemonBoxTitleImgContainer}>
                <Box 
                    component='img' 
                    src="https://www.freepnglogos.com/uploads/pokemon-logo-transparent-png-2.png" 
                    alt="pokemon-text-title" 
                    sx={PokemonBoxTitleImg}
                />
            </Box>
            <Box sx={PokemonBoxComponent}>
                <Box sx={PokemonBoxCard}>
                    <Box 
                        component='img' 
                        src={sprites}
                        alt="pokemon-text-title" 
                        sx={PokemonBoxItemImg}
                    />
                </Box>
                <Box sx={PokemonBoxCard}>
                    <Box>
                        <Typography 
                            variant='h5' 
                            sx={PokemonNameInformation}
                        >
                            {name}
                        </Typography>
                        <Typography 
                            variant='caption'
                            sx={{color: grey[500], fontWeight: 600}} 
                        >
                            ID: {id}
                        </Typography>
                        <Box sx={PokemonBoxDetailPokemon}>
                            <Box sx={{display: "flex"}}>
                                <Typography sx={{fontWeight: 600, width:80}}>Weight</Typography>
                                <Typography>: {weight}</Typography>
                            </Box>
                            <Box sx={{display: "flex", mt: 2}}>
                                <Typography sx={{fontWeight: 600, width:80}}>Height</Typography>
                                <Typography>: {height}</Typography>
                            </Box>
                            <Box>
                                <Box sx={{display: "flex", mt: 2}}>
                                    <Typography sx={{fontWeight: 600, width:80}}>Abilities</Typography>
                                    <Typography>:</Typography>
                                </Box>
                                <Box sx={{ml: 5}}>
                                    {
                                    abilities?.map((item, key) => {
                                        return (
                                            <Typography key={key}>- {item.ability.name}</Typography>
                                        );  
                                    })
                                    }
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{w:1, textAlign: 'right', mt: 5}}>
                <Button sx={{backgroundColor: yellow[400]}} onClick={handlerClickBackToListPokemon}>Return To List Pokemon</Button>
            </Box>
        </Box>
  )
}

export default DetailItem;

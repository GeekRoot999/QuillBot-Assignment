import * as React from 'react';
import { useState, useContext, createContext } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import MovieData from '../movie-data.json';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {SearchContext} from './Topbar';

export default function MultiActionAreaCard() {
    // console.log(MovieData, "movie-data");

    const Card = styled('div')(({theme}) => ({
        '&:hover': {
            boxShadow: '0px 0px 20px 5px rgba(0, 0, 0, 0.35)',
        }
    }))

    const Search = useContext(SearchContext);
    console.log(Search);

  return (
    <Box sx={{background: 'none', display: 'flex', flexWrap: 'wrap', gap: '26px', justifyContent:'center', alignItems: 'center', pt: {xs: 15, sm: 4, md: 2, lg: 2}}}>

        {MovieData.map((movielist, index) => (
            <Card key={index} sx={{ maxWidth: '178px', minHeight: '278px', p: 1.25, pb: 0 ,display: 'flex', marginBottom: '38px' ,flexDirection:'column', backgroundColor:'#394B61', borderRadius: '11px'}}>
            <CardActionArea>
                <CardMedia
                component="img"
                width="157"
                image={movielist.Images[1]}
                alt={movielist.title}
                sx={{minHeight: '188px', maxWidth: '157px' ,borderRadius: '6px'}}
                />
                <CardContent sx={{py:1.25, px: 0, background: 'transparent'}}>
                    <Typography gutterBottom component="div" sx={{textAlign: 'left', m:0, color: '#D4D7DD', wordWrap: 'break-word', minHeight: '50px'}}>
                        {movielist.Title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{p: 0}}>
                <Button size="small" color="primary" sx={{pb: 2, px: 0,justifyContent: 'space-between'}}>
                <PlayCircleOutlineIcon sx={{color: '#D4D7DD'}} />
                <AddCircleOutlineIcon sx={{color: '#D4D7DD'}} />
                </Button>
            </CardActions>
        </Card>
        ))}
    </Box>
  );
}
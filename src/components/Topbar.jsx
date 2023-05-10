import * as React from 'react';
import { useState, createContext  } from 'react';
import { styled, alpha } from '@mui/material/styles';
import {AppBar, Box, Toolbar, InputBase, Input} from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';

// Icons
import LightModeIcon from '@mui/icons-material/LightMode';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';

export const SearchContext = createContext();
export const Topbar = () => {

  const [searchTerm, setSearchTerm] = useState("");

    const Search = styled('div')(({ theme }) => ({
        // position: 'relative',
        borderRadius: theme.shape.borderRadius,
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
          '&:hover': {
            background: 'none'
          }
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
      }));

      const StyledInput = styled(InputBase)(({ theme }) => ({
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(1)})`,
          transition: theme.transitions.create('width'),
          // width: 'calc(100% - 360px)',
          width: 'calc(100% - 0px)',
          borderRadius: '8px',
          color: '#fff',
          [theme.breakpoints.up('sm')]: {
            padding: '16px',
            paddingLeft: '48px',
            width: '0px',
            '&:focus': {
              // width: 'calc(100% - 0px)',
              // width: '100%',
              // backgroundColor: '#1A2536',
            },
          },
        },
      }));

      const handleValue = (event) => {
          setSearchTerm(event.target.value);
      };


    return(
        <>
            <Box sx={{ flexGrow: 1, pt: {sm: '104px'} }}>
                <AppBar component="nav" sx={{background: '#273244', boxShadow: 'none', top: {xs: '50px', sm: '50px', md: '50px', lg: '0'}, width: {lg: 'calc(100% - 275px)'} ,py: {xs: 0, sm: 0, md: 0, lg: 2}}}>
                  <Toolbar sx={{justifyContent: 'space-between'}}>
                    <SearchContext.Provider value={searchTerm}>
                        <Input
                          id="search"
                          type="search"
                          value={searchTerm}
                          placeholder="Search..."
                          onChange={handleValue}
                          sx={{ width: {xs: '250px', lg: '576px'}, borderBottom: '1px solid white', color: 'white'}}
                        />
                    </SearchContext.Provider>
                    <Box sx={{display: 'flex', justifyContent: 'flex-end', p: {xs : 0, sm: 0, md: 0, lg: 3}}}>
                      <LightModeIcon sx={{color: 'white', mr: 2, zIndex: '1'}} /> 
                      <MoreVertSharpIcon sx={{color: 'white', mr: 2, zIndex: '1'}} />
                    </Box>
                </Toolbar>
              </AppBar>
            </Box>
        </>
    )
}

export default Topbar;
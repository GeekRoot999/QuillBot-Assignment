import * as React from 'react';
import Cardwrapper from './Cardwrapper';
import Topbar from './Topbar';
import Box from '@mui/material/Box';

export default function Dashboard(){
    return(
        <Box sx={{ flexGrow: 1 }}>
            <Topbar />
            <Cardwrapper />
        </Box>
    )
}
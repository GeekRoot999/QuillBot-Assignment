import * as React from 'react';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import { Box } from '@mui/material';

function App() {
  return (
    <Box className="App" sx={{display: 'flex', flexDirection: {xs: 'column', sm:'row'}, backgroundColor: '#273244'}}>
      <Navigation />
      <Dashboard />
    </Box>
  );
}

export default App;

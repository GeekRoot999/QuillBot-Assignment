import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// Icons
import SearchIcon from '@mui/icons-material/Search';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import TvIcon from '@mui/icons-material/Tv';
import ListIcon from '@mui/icons-material/List';
import FavouriteIcon from '@mui/icons-material/FavoriteBorderSharp';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/LogoutOutlined';
// import SearchIcon from '../assets/search.svg';
// import PlaylistPlayIcon from '../assets/Playlist.svg';
// import LiveTvIcon from '../assets/Movie.svg';
// import TvIcon from '../assets/TVShow.svg';
// import ListIcon from '../assets/MyList.svg';
import {ReactComponent as WatchLater} from '../assets/Watch-Later.svg';


const drawerWidth = 275;
// const navItems = ['Discover', 'Playlist', 'Movie', 'TV Shows', 'My List'];

const navItems = [
  {
    id: '0',
    icon: (<SearchIcon />),
    description: "icon",
    name: "Discover",
    className: 'borderTop',
    status: 'active'
  },
  {
    id: '1',
    icon: (<PlaylistPlayIcon />),
    description: "icon",
    name: "Playlist",
    className: 'noBorder',
    status: 'disabled'
  },
  {
    id: '2',
    icon: (<LiveTvIcon />),
    description: "icon",
    name: "Movie",
    className: 'noBorder',
    status: 'disabled'
  },
  {
    id: "3",
    icon: (<TvIcon />),
    description: "icon",
    name: "TV Shows",
    className: 'noBorder',
    status: 'disabled'
  },
  {
    id: '4',
    icon: (<ListIcon />),
    description: "icon",
    name: "My List",
    className: 'noBorder'
  },
  {
    id: '5',
    icon: (<WatchLater />),
    description: "icon",
    name: "Watch Later",
    className: 'borderTop',
    status: 'disabled'
  },
  {
    id: '6',
    icon: (<FavouriteIcon />),
    description: "icon",
    name: "Recommended",
    className: 'noBorder',
    status: 'disabled'
  },
  {
    id: '7',
    icon: (<SettingsIcon />),
    description: "icon",
    name: "Settings",
    className: 'borderTop',
    status: 'disabled'
  },
  {
    id: '8',
    icon: (<LogoutIcon />),
    description: "icon",
    name: "Logout",
    className: 'noBorder',
    status: 'disabled'
  },
]

function Navigation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  //Mobile
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{  pt: {xs: 4}, display: {xs : 'flex', sm: 'flex', md: 'flex', lg: 'flex'}, flexDirection: 'column' ,justifyContent: 'center', alignItems: 'center'}}>
    <Avatar alt="Remy Sharp" sx={{width: {xs: '45px', }, height: {xs:'45px'}}}>MG</Avatar>
      <Typography variant="h6" sx={{ my: 2, color: '#fff' }}>
        Gopal
      </Typography>
      <Divider />
      <List sx={{ width: '100%', '& .borderTop': {borderTop: '1px solid #394B61'}, '& .active': {color: '#00E0FF'}}}>
        {navItems.map((item, index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', py:1.25, px: '25%'}} className={`${item.className === 'borderTop' ? 'borderTop' : 'noBorder'}`}>
              <ListItemIcon sx={{minWidth: {xs: '30px'}, width: '6px', color: '#D4D7DD' }} className={`${item.status === 'active' ? 'active' : 'disabled'} `}>{item.icon}</ListItemIcon>
              <ListItemText sx={{color: '#D4D7DD'}} className={`${item.status === 'active' ? 'active' : 'disabled'} `} primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{width: {lg: 'calc(100% - 275px)'}, maxWidth: {lg: '275px'} ,height: {lg: '100vh'}}}>
      <CssBaseline />
      <AppBar component="nav" sx={{height: {lg: '100vh'}, width:{sm: '100%', md: '100%', lg:'275px'}, left:{ sm: '0', md: '0'}, backgroundColor: '#1F2A3C'}}>
        <Toolbar sx={{display: {lg: 'flex'}, flexDirection: {sm:'row', md: 'row', lg: 'column'}, p: {md: 2, lg: 0}, pt: {md: 0, lg: 5} }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: {xs: 0, sm: 0, md: 0, lg: 2}, display: { sm: 'block', md:'block', lg: 'none'} }}
          >
            <MenuIcon />
          </IconButton>
          <Avatar alt="Remy Sharp" sx={{display: {xs: 'none', sm: 'none', md: 'none', lg:'flex'},width: {sm: '45px', md: '45px', lg: '90px'}, height: {sm: '45px', md: '45px', lg: '90px'}}}>
            MG
          </Avatar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'none', lg:'block' }, width: {sm: "100%"}, fontWeight: '600', paddingTop: '11px', paddingBottom: '20px'}}
          >
          M Gopalakrishnan
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' }, paddingTop: {md: '40px', lg: '0'} , width: '100%', '& .borderTop': {borderTop: '1px solid #394B61'}, '& .active': {color: '#00E0FF', borderRight: '3px solid #00E0FF'} }}>
            {navItems.map((item, index) => (
              <ListItem key={index} disablePadding className={`${item.status === 'active' ? 'active' : 'disabled'}`}>
                <ListItemButton sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', px: '25%'}} className={`${item.className === 'borderTop' ? 'borderTop' : 'noBorder'} ${item.status === 'active' ? 'active' : 'disabled'}`}>
                  <Box component="span" sx={{display: 'inline-block', width: {sm: '15px'}, minWidth: {sm: '36px'} ,color: '#D4D7DD', fontWeight: '600', py:0.5, mt: 0.5}}>{item.icon}</Box>
                  <ListItemText sx={{display:{sm: 'none', md:'none', lg: 'block'}}} primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'block'},
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: {xs: drawerWidth}, backgroundColor: '#1F2A3C'},
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}


export default Navigation;

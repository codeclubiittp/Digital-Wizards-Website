import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';
import { CssBaseline } from '@mui/material';

const pages = ['Home', 'About Us', 'Events', 'Workshops', 'Projects','Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// Define light and dark themes
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    appBar: {
      background: '#ffffff', // White background for light mode
      color: '#000000', // Black text for light mode
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    appBar: {
      background: '#333333', // Dark background for dark mode
      color: '#ffffff', // White text for dark mode
    },
  },
});


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [darkMode, setDarkMode] = React.useState(false); // State to track the theme

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleToggleTheme = () => {
    setDarkMode(!darkMode); // Toggle dark mode
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline /> {/* Apply the theme globally */}
      <AppBar position="sticky" sx={{ backgroundColor: darkMode ? darkTheme.palette.appBar.background : lightTheme.palette.appBar.background }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            {/* Mobile Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
              <MenuIcon sx={{color: darkMode ? darkTheme.palette.appBar.color : lightTheme.palette.appBar.color}}/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} className="items-center">
              <img
                src={darkMode ? "./images/domainLogos/DW_darkmode.png" : "./images/domainLogos/DW.png"}
                alt="DW Logo"
                className="rounded h-20 mr-2"
              />

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: darkMode ? darkTheme.palette.appBar.color : lightTheme.palette.appBar.color,
                textDecoration: 'none',
              }}
            >
              Digital Wizards
            </Typography>
            </Box>

            {/* Theme Toggle */}
            <Box sx={{ flexGrow: 0, mr: 2 , display: { xs: 'flex', md: 'none' } ,alignItems:'center'}} >
              <Switch
                checked={darkMode}
                onChange={handleToggleTheme}
                inputProps={{ 'aria-label': 'theme toggle' }}
              />
              <Typography sx={{ display: 'inline-block',color: darkMode ? darkTheme.palette.appBar.color : lightTheme.palette.appBar.color,}}>
                {darkMode ? 'Dark' : 'Light'}
              </Typography>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ flexGrow: 1,  display: { xs: 'none', md: 'flex' } , alignItems: 'center' }}>
              {/* Left Section: Logo and Title */}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={darkMode ? "./images/domainLogos/DW_darkmode.png" : "./images/domainLogos/DW.png"}
                  alt="DW Logo"
                  className="rounded h-20 mr-2"
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.1rem',
                    color: darkMode ? darkTheme.palette.appBar.color : lightTheme.palette.appBar.color,
                    textDecoration: 'none',
                  }}
                >
                  Digital Wizards
                </Typography>
              </Box>

              {/* Right Section: Menu Items */}
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', alignItems:'center'}}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    style = {{color: darkMode ? darkTheme.palette.appBar.color : lightTheme.palette.appBar.color}}
                    sx={{ my: 2, display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
                
                {/* User Settings */}
                {/* <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography sx={{ textAlign: 'center' }}>
                          {setting}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box> */}

                {/* Theme Toggle */}
                <Box sx={{ flexGrow: 0, mr: 2 }}>
                  <Switch
                    checked={darkMode}
                    onChange={handleToggleTheme}
                    inputProps={{ 'aria-label': 'theme toggle' }}
                  />
                  <Typography sx={{ display: 'inline-block', color: darkMode ? darkTheme.palette.appBar.color : lightTheme.palette.appBar.color, }}>
                    {darkMode ? 'Dark' : 'Light'}
                  </Typography>
                </Box>
              </Box>
            </Box>


          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;

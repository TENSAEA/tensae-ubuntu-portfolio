import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  IconButton, 
  Menu, 
  MenuItem,
  Divider
} from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import FolderIcon from '@mui/icons-material/Folder';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CodeIcon from '@mui/icons-material/Code';
import WifiIcon from '@mui/icons-material/Wifi';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import { styled, keyframes } from '@mui/material/styles';

// Create a scrolling animation
const scrollText = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

// Styled component for the scrolling text
const ScrollingText = styled(Typography)(({ theme }) => ({
  whiteSpace: 'nowrap',
  animation: `${scrollText} 30s linear infinite`,
  color: theme.palette.common.white,
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
}));

const Taskbar = ({ onMenuItemClick }) => {
  const [time, setTime] = useState(new Date());
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleMenuItemClick = (type) => {
    onMenuItemClick(type);
    handleClose();
  };
  
  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  const formatDate = (date) => {
    return date.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });
  };
  
  return (
    <AppBar 
      position="fixed" 
      color="default" 
      sx={{ 
        top: 0, 
        bottom: 'auto', 
        bgcolor: '#3C3B37',
        boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
      }}
    >
      <Toolbar variant="dense" sx={{ minHeight: 36, px: 1 }}>
        <IconButton 
          color="inherit" 
          aria-label="menu" 
          onClick={handleMenu}
          size="small"
          sx={{ color: 'white' }}
        >
          <AppsIcon />
        </IconButton>
        
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleMenuItemClick('files')}>
            <FolderIcon sx={{ mr: 1 }} /> Files
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('projects')}>
            <CodeIcon sx={{ mr: 1 }} /> Projects
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('about')}>
            <InfoIcon sx={{ mr: 1 }} /> About Me
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('contact')}>
            <ContactMailIcon sx={{ mr: 1 }} /> Contact
          </MenuItem>
        </Menu>
        
        {/* Scrolling text container */}
        <Box 
          sx={{ 
            flexGrow: 1, 
            mx: 2, 
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            height: 28,
            bgcolor: 'rgba(0,0,0,0.2)',
            borderRadius: 1,
          }}
        >
          <ScrollingText variant="body2">
            This is Tensae's portfolio. Ubuntu is an ancient African word meaning "humanity to others". 
            I have used Ubuntu for more than 3 years. My friends also call me Ubuntu since I love it. 
            I have tried more than 5 Linux distributions.
          </ScrollingText>
        </Box>
        
        {/* System tray */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit" size="small" sx={{ color: 'white' }}>
            <WifiIcon fontSize="small" />
          </IconButton>
          <IconButton color="inherit" size="small" sx={{ color: 'white' }}>
            <VolumeUpIcon fontSize="small" />
          </IconButton>
          <IconButton color="inherit" size="small" sx={{ color: 'white' }}>
            <BatteryFullIcon fontSize="small" />
          </IconButton>
          <Divider orientation="vertical" flexItem sx={{ mx: 1, bgcolor: 'rgba(255,255,255,0.2)' }} />
          <Typography variant="body2" color="white">
            {formatTime(time)}
          </Typography>
          <Divider orientation="vertical" flexItem sx={{ mx: 1, bgcolor: 'rgba(255,255,255,0.2)' }} />
          <Typography variant="body2" color="white">
            {formatDate(time)}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Taskbar;

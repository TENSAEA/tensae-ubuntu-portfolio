import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Chip,
  Button
} from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import FolderIcon from '@mui/icons-material/Folder';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import TerminalIcon from '@mui/icons-material/Terminal';
import DescriptionIcon from '@mui/icons-material/Description';
import StarIcon from '@mui/icons-material/Star';
import BarChartIcon from '@mui/icons-material/BarChart';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import WifiIcon from '@mui/icons-material/Wifi';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';

const Taskbar = ({ onMenuItemClick, minimizedWindows, onRestoreWindow }) => {
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
      sx={{
        top: 0,
        bottom: 'auto',
        background: 'linear-gradient(180deg, #2C2C2C 0%, #242424 100%)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        borderBottom: '1px solid rgba(233, 84, 32, 0.3)'
      }}
    >
      <Toolbar variant="dense" sx={{ minHeight: 40, px: 1, gap: 1 }}>
        {/* Ubuntu Menu Button */}
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={handleMenu}
          size="small"
          sx={{
            color: 'white',
            bgcolor: 'rgba(233, 84, 32, 0.2)',
            '&:hover': {
              bgcolor: 'rgba(233, 84, 32, 0.4)'
            }
          }}
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
          PaperProps={{
            sx: {
              bgcolor: '#2C2C2C',
              color: 'white',
              minWidth: 250,
              border: '1px solid rgba(233, 84, 32, 0.3)'
            }
          }}
        >
          <Typography variant="caption" sx={{ px: 2, py: 1, color: '#E95420', fontWeight: 'bold', display: 'block' }}>
            APPLICATIONS
          </Typography>
          <Divider sx={{ bgcolor: 'rgba(233, 84, 32, 0.2)' }} />
          <MenuItem onClick={() => handleMenuItemClick('files')}>
            <FolderIcon sx={{ mr: 1 }} /> Files
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('projects')}>
            <WorkIcon sx={{ mr: 1 }} /> 8+ Projects
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('about')}>
            <InfoIcon sx={{ mr: 1 }} /> About Me
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('resume')}>
            <DescriptionIcon sx={{ mr: 1 }} /> Resume
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('testimonials')}>
            <StarIcon sx={{ mr: 1 }} /> Testimonials
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('stats')}>
            <BarChartIcon sx={{ mr: 1 }} /> Statistics
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('terminal')}>
            <TerminalIcon sx={{ mr: 1 }} /> Terminal
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('video')}>
            <VideoLibraryIcon sx={{ mr: 1 }} /> Video Resume
          </MenuItem>
          <Divider sx={{ bgcolor: 'rgba(233, 84, 32, 0.2)' }} />
          <MenuItem onClick={() => handleMenuItemClick('contact')} sx={{ bgcolor: 'rgba(233, 84, 32, 0.2)' }}>
            <ContactMailIcon sx={{ mr: 1 }} /> 📧 Hire Me
          </MenuItem>
        </Menu>

        {/* Portfolio Name */}
        <Typography
          variant="body2"
          sx={{
            color: 'white',
            fontWeight: 'bold',
            display: { xs: 'none', sm: 'block' },
            letterSpacing: 0.5
          }}
        >
          TENSAE ASCHALEW
        </Typography>

        {/* Availability Badge */}
        <Chip
          label="🟢 AVAILABLE"
          size="small"
          sx={{
            bgcolor: 'rgba(76, 175, 80, 0.2)',
            color: '#4CAF50',
            border: '1px solid #4CAF50',
            fontWeight: 'bold',
            fontSize: '10px',
            height: 24,
            animation: 'pulse 2s infinite',
            '@keyframes pulse': {
              '0%, 100%': { opacity: 1 },
              '50%': { opacity: 0.7 }
            }
          }}
        />

        {/* Spacer */}
        <Box sx={{ flex: 1 }} />

        {/* Quick Stats - Center */}
        <Box sx={{
          display: { xs: 'none', md: 'flex' },
          gap: 2,
          px: 2,
          py: 0.5,
          bgcolor: 'rgba(0, 0, 0, 0.3)',
          borderRadius: 1
        }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="caption" sx={{ color: '#E95420', fontWeight: 'bold', fontSize: '11px' }}>8+</Typography>
            <Typography variant="caption" sx={{ color: '#AEA79F', display: 'block', fontSize: '9px' }}>Projects</Typography>
          </Box>
          <Divider orientation="vertical" flexItem sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="caption" sx={{ color: '#4CAF50', fontWeight: 'bold', fontSize: '11px' }}>100%</Typography>
            <Typography variant="caption" sx={{ color: '#AEA79F', display: 'block', fontSize: '9px' }}>Success</Typography>
          </Box>
          <Divider orientation="vertical" flexItem sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="caption" sx={{ color: '#00BCD4', fontWeight: 'bold', fontSize: '11px' }}>{'<2h'}</Typography>
            <Typography variant="caption" sx={{ color: '#AEA79F', display: 'block', fontSize: '9px' }}>Response</Typography>
          </Box>
        </Box>

        {/* Spacer */}
        <Box sx={{ flex: 1 }} />

        {/* Minimized Windows */}
        {minimizedWindows && minimizedWindows.length > 0 && (
          <Box sx={{ display: 'flex', gap: 0.5, mr: 1 }}>
            {minimizedWindows.map((window) => (
              <Button
                key={window.id}
                size="small"
                onClick={() => onRestoreWindow(window.id)}
                sx={{
                  minWidth: 'auto',
                  px: 1.5,
                  py: 0.5,
                  bgcolor: 'rgba(233, 84, 32, 0.2)',
                  color: 'white',
                  fontSize: '11px',
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: 'rgba(233, 84, 32, 0.4)'
                  }
                }}
              >
                {window.title.substring(0, 15)}...
              </Button>
            ))}
          </Box>
        )}

        {/* Hire Me Button */}
        <Button
          variant="contained"
          size="small"
          onClick={() => onMenuItemClick('contact')}
          sx={{
            bgcolor: '#E95420',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '11px',
            px: 2,
            py: 0.5,
            textTransform: 'none',
            '&:hover': {
              bgcolor: '#C34113',
              transform: 'scale(1.05)'
            },
            transition: 'all 0.3s',
            display: { xs: 'none', sm: 'flex' }
          }}
        >
          💼 Hire Me
        </Button>

        {/* System Tray */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <IconButton color="inherit" size="small" sx={{ color: 'white', p: 0.5 }}>
            <WifiIcon fontSize="small" />
          </IconButton>
          <IconButton color="inherit" size="small" sx={{ color: 'white', p: 0.5 }}>
            <VolumeUpIcon fontSize="small" />
          </IconButton>
          <IconButton color="inherit" size="small" sx={{ color: 'white', p: 0.5 }}>
            <BatteryFullIcon fontSize="small" />
          </IconButton>

          <Divider orientation="vertical" flexItem sx={{ mx: 1, bgcolor: 'rgba(255,255,255,0.2)' }} />

          {/* Date & Time */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            px: 1,
            py: 0.5,
            bgcolor: 'rgba(0, 0, 0, 0.3)',
            borderRadius: 1,
            minWidth: 80
          }}>
            <Typography variant="caption" sx={{ color: 'white', fontWeight: 'bold', fontSize: '11px', lineHeight: 1.2 }}>
              {formatTime(time)}
            </Typography>
            <Typography variant="caption" sx={{ color: '#AEA79F', fontSize: '9px', lineHeight: 1.2 }}>
              {formatDate(time)}
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Taskbar;

import { useState, useEffect } from 'react';
import { Box, useMediaQuery, useTheme, Typography, Card, CardContent, Chip, Fade, Slide, Button, Drawer, Fab, IconButton } from '@mui/material';
import WidgetsIcon from '@mui/icons-material/Widgets';
import CloseIcon from '@mui/icons-material/Close';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import Taskbar from '../taskbar/Taskbar';
import DesktopIcon from './DesktopIcon';
import Window from '../windows/Window';
import FileManager from '../windows/FileManager';
import ProjectViewer from '../windows/ProjectViewer';
import AboutMe from '../windows/AboutMe';
import ContactForm from '../windows/ContactForm';
import Terminal from '../windows/Terminal';
import Resume from '../windows/Resume';
import Testimonials from '../windows/Testimonials';
import StatsDashboard from '../windows/StatsDashboard';
import AdvancedProjects from '../windows/AdvancedProjects';
import AutoSliderWidget from './AutoSliderWidget';

// Import your icons
import folderIcon from '../../assets/icons/folder.svg';
import projectsIcon from '../../assets/icons/projects.svg';
import aboutIcon from '../../assets/icons/about.svg';
import contactIcon from '../../assets/icons/contact.svg';
import terminalIcon from '../../assets/icons/terminal.svg';
import resumeIcon from '../../assets/icons/resume.svg';
import videoIcon from '../../assets/icons/video.svg';

const Desktop = () => {
  const [windows, setWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);
  const [showWelcome, setShowWelcome] = useState(true);
  const [widgetDrawerOpen, setWidgetDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const ubuntuPurpleBackground = 'url(https://wallpaperaccess.com/full/1267681.jpg)';
  const ubuntuDesktopBackground = 'url(https://wallpapers.com/images/hd/iconic-ubuntu-hd-desktop-z6rtxbp6rijb53hx.webp)';

  // Auto-open welcome and video window
  useEffect(() => {
    const timer = setTimeout(() => {
      openVideoWindow();
    }, 500);

    // Hide welcome after 10 seconds or when user clicks
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(welcomeTimer);
    };
  }, []);

  const openWindow = (windowType, title, content) => {
    const id = Date.now();
    const newWindow = {
      id,
      type: windowType,
      title,
      content,
      zIndex: windows.length + 1,
      position: { x: 100 + (windows.length * 20) % 200, y: 100 + (windows.length * 20) % 200 },
      size: { width: 800, height: 600 },
    };

    setWindows([...windows, newWindow]);
    setActiveWindow(id);
  };

  const openVideoWindow = () => {
    const id = Date.now();
    const videoWindow = {
      id,
      type: 'video',
      title: '🎥 Welcome Video - Get to Know Me',
      zIndex: windows.length + 1,
      position: { x: 200, y: 50 },
      size: { width: 640, height: 480 },
    };

    setWindows([...windows, videoWindow]);
    setActiveWindow(id);
  };

  const closeWindow = (id) => {
    setWindows(windows.filter(window => window.id !== id));
    if (activeWindow === id) {
      setActiveWindow(null);
    }
  };

  const focusWindow = (id) => {
    setActiveWindow(id);
    setWindows(windows.map(window => ({
      ...window,
      zIndex: window.id === id ? windows.length + 1 : window.zIndex
    })));
  };

  const minimizeWindow = (id) => {
    setWindows(windows.map(window =>
      window.id === id ? { ...window, minimized: true } : window));
  };

  const restoreWindow = (id) => {
    setWindows(windows.map(window =>
      window.id === id ? { ...window, minimized: false } : window));
    focusWindow(id);
  };

  const handleIconClick = (type) => {
    switch (type) {
      case 'files':
        openWindow('fileManager', '📁 Files - Project Documentation', null);
        break;
      case 'projects':
        openWindow('projects', '🚀 Advanced Project Showcase - 8+ Featured Projects', null);
        break;
      case 'about':
        openWindow('about', '👨‍💻 About Me - Full Stack Developer', null);
        break;
      case 'contact':
        openWindow('contact', '📧 Hire Me - Available Now!', null);
        break;
      case 'terminal':
        openWindow('terminal', '💻 Terminal - Developer Console', null);
        break;
      case 'resume':
        openWindow('resume', '📄 Resume - Download PDF', null);
        break;
      case 'testimonials':
        openWindow('testimonials', '⭐ Client Testimonials - 5.0 Rating', null);
        break;
      case 'stats':
        openWindow('stats', '📊 Professional Stats - Hire Me!', null);
        break;
      case 'video':
        openVideoWindow();
        break;
      default:
        break;
    }
  };

  const minimizedWindows = windows.filter(window => window.minimized);
  const visibleWindows = windows.filter(window => !window.minimized);

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        bgcolor: 'secondary.main',
        overflow: 'hidden',
        position: 'relative',
        backgroundImage: isMobile ? 'none' : ubuntuDesktopBackground,
        background: isMobile
          ? 'linear-gradient(135deg, #E95420 0%, #772953 50%, #2C001E 100%)'
          : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Mobile-only Ubuntu Logo and Particles */}
      {isMobile && (
        <>
          {/* Floating Particles */}
          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 1
          }}>
            {[...Array(15)].map((_, i) => (
              <Box
                key={i}
                sx={{
                  position: 'absolute',
                  width: `${Math.random() * 6 + 3}px`,
                  height: `${Math.random() * 6 + 3}px`,
                  borderRadius: '50%',
                  bgcolor: i % 3 === 0 ? '#E95420' : i % 3 === 1 ? '#FFFFFF' : '#DD4814',
                  opacity: Math.random() * 0.4 + 0.2,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float-${i % 3} ${Math.random() * 10 + 15}s infinite ease-in-out`,
                  '@keyframes float-0': {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                    '25%': { transform: 'translate(20px, -30px) scale(1.1)' },
                    '50%': { transform: 'translate(-15px, -50px) scale(0.9)' },
                    '75%': { transform: 'translate(-25px, -20px) scale(1.05)' }
                  },
                  '@keyframes float-1': {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                    '33%': { transform: 'translate(-25px, 40px) scale(1.15)' },
                    '66%': { transform: 'translate(30px, 20px) scale(0.85)' }
                  },
                  '@keyframes float-2': {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                    '20%': { transform: 'translate(15px, 25px) scale(0.95)' },
                    '40%': { transform: 'translate(-20px, 45px) scale(1.1)' },
                    '60%': { transform: 'translate(25px, -15px) scale(0.9)' },
                    '80%': { transform: 'translate(-10px, 30px) scale(1.05)' }
                  }
                }}
              />
            ))}
          </Box>

          {/* Ubuntu Logo Circle */}
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
            animation: 'pulse-glow 3s infinite ease-in-out',
            '@keyframes pulse-glow': {
              '0%, 100%': {
                transform: 'translate(-50%, -50%) scale(1)',
                filter: 'drop-shadow(0 0 20px rgba(233, 84, 32, 0.6))'
              },
              '50%': {
                transform: 'translate(-50%, -50%) scale(1.05)',
                filter: 'drop-shadow(0 0 40px rgba(233, 84, 32, 0.9))'
              }
            }
          }}>
            {/* Outer Circle */}
            <Box sx={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #E95420 0%, #DD4814 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(233, 84, 32, 0.4), inset 0 2px 8px rgba(255, 255, 255, 0.3)',
              border: '3px solid rgba(255, 255, 255, 0.4)',
              position: 'relative'
            }}>
              {/* Inner Circle with Ubuntu Logo Pattern */}
              <Box sx={{
                width: 100,
                height: 100,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                {/* Ubuntu Text/Symbol */}
                <Typography sx={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #E95420 0%, #DD4814 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'Ubuntu, sans-serif'
                }}>
                  U
                </Typography>
              </Box>

              {/* Three Friend Circles (Ubuntu logo pattern) */}
              {[0, 120, 240].map((angle, i) => (
                <Box
                  key={i}
                  sx={{
                    position: 'absolute',
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-50px)`,
                    animation: `rotate-friend-${i} 8s infinite linear`,
                    '@keyframes rotate-friend-0': {
                      '0%': { transform: `translate(-50%, -50%) rotate(0deg) translateY(-50px)` },
                      '100%': { transform: `translate(-50%, -50%) rotate(360deg) translateY(-50px)` }
                    },
                    '@keyframes rotate-friend-1': {
                      '0%': { transform: `translate(-50%, -50%) rotate(120deg) translateY(-50px)` },
                      '100%': { transform: `translate(-50%, -50%) rotate(480deg) translateY(-50px)` }
                    },
                    '@keyframes rotate-friend-2': {
                      '0%': { transform: `translate(-50%, -50%) rotate(240deg) translateY(-50px)` },
                      '100%': { transform: `translate(-50%, -50%) rotate(600deg) translateY(-50px)` }
                    }
                  }}
                >
                  <Box sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #E95420 0%, #DD4814 100%)',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                  }} />
                </Box>
              ))}
            </Box>
          </Box>
        </>
      )}
      {/* Main Desktop Area */}
      <Box sx={{ flex: 1, position: 'relative', overflow: 'hidden', mt: { xs: 5, sm: 6 } }}>
        {/* Desktop Icons - Vertical on desktop, Horizontal on mobile */}
        <Box
          sx={{
            position: 'absolute',
            top: { xs: 'auto', md: 10 },
            bottom: { xs: 90, md: 'auto' },
            left: { xs: 0, md: 10 },
            right: { xs: 0, md: 'auto' },
            display: 'flex',
            flexDirection: { xs: 'row', md: 'column' },
            gap: { xs: 2.5, md: 1 },
            zIndex: 10,
            maxHeight: { xs: 'auto', md: 'calc(100vh - 120px)' },
            overflowY: { xs: 'hidden', md: 'auto' },
            overflowX: { xs: 'auto', md: 'hidden' },
            px: { xs: 2.5, md: 0 },
            py: { xs: 2, md: 0 },
            pr: { xs: 2.5, md: 1 },
            bgcolor: { xs: 'rgba(0, 0, 0, 0.5)', md: 'transparent' },
            backdropFilter: { xs: 'blur(10px)', md: 'none' },
            borderRadius: { xs: 2, md: 0 },
            mx: { xs: 1.5, md: 0 },
            '&::-webkit-scrollbar': {
              width: '6px',
              height: '6px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'rgba(0, 0, 0, 0.2)',
              borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'rgba(233, 84, 32, 0.5)',
              borderRadius: '10px',
              '&:hover': {
                background: 'rgba(233, 84, 32, 0.8)',
              }
            },
          }}
        >
          <DesktopIcon
            icon={folderIcon}
            label="📁 Files"
            onClick={() => handleIconClick('files')}
          />
          <DesktopIcon
            icon={projectsIcon}
            label="💼 8+ Projects"
            onClick={() => handleIconClick('projects')}
          />
          <DesktopIcon
            icon={aboutIcon}
            label="👨‍💻 About Me"
            onClick={() => handleIconClick('about')}
          />
          <DesktopIcon
            icon={resumeIcon}
            label="📄 Resume"
            onClick={() => handleIconClick('resume')}
          />
          <DesktopIcon
            icon={contactIcon}
            label="⭐ Testimonials"
            onClick={() => handleIconClick('testimonials')}
          />
          <DesktopIcon
            icon={projectsIcon}
            label="📊 Stats"
            onClick={() => handleIconClick('stats')}
          />
          <DesktopIcon
            icon={contactIcon}
            label="📧 Hire Me"
            onClick={() => handleIconClick('contact')}
          />
          <DesktopIcon
            icon={terminalIcon}
            label="💻 Terminal"
            onClick={() => handleIconClick('terminal')}
          />
          <DesktopIcon
            icon={videoIcon}
            label="🎥 Video Resume"
            onClick={() => handleIconClick('video')}
          />
        </Box>

        {/* Widget FAB for Mobile */}
        {isTablet && (
          <Fab
            color="primary"
            aria-label="widgets"
            onClick={() => setWidgetDrawerOpen(true)}
            sx={{
              position: 'absolute',
              bottom: { xs: 15, sm: 20 },
              left: { xs: 15, sm: 20 },
              zIndex: 998,
              bgcolor: '#E95420',
              '&:hover': {
                bgcolor: '#C34113',
              },
            }}
          >
            <WidgetsIcon />
          </Fab>
        )}

        {/* Floating Widget Cards - Desktop only */}
        <Box sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          gap: 2,
          zIndex: 10,
          maxHeight: 'calc(100vh - 160px)',
          overflowY: 'auto',
          pr: 1,
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'rgba(0, 0, 0, 0.2)',
            borderRadius: '10px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(233, 84, 32, 0.5)',
            borderRadius: '10px',
            '&:hover': {
              background: 'rgba(233, 84, 32, 0.8)',
            }
          },
        }}>
          {/* Quick Stats Widget */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card sx={{
              background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.95) 0%, rgba(40, 40, 40, 0.95) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(233, 84, 32, 0.4)',
              borderRadius: 2,
              minWidth: 280,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              transition: 'all 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 12px 48px rgba(233, 84, 32, 0.4)',
                border: '1px solid rgba(233, 84, 32, 0.7)'
              }
            }}>
              <CardContent sx={{ p: 2 }}>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  mb: 1.5,
                  pb: 1,
                  borderBottom: '1px solid rgba(233, 84, 32, 0.3)'
                }}>
                  <Typography variant="subtitle2" sx={{
                    color: '#E95420',
                    fontWeight: 'bold',
                    fontFamily: 'monospace',
                    fontSize: '13px'
                  }}>
                    ⚡ QUICK_STATS
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, fontFamily: 'monospace' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="caption" sx={{ color: '#AEA79F', fontSize: '11px' }}>
                      $ projects --count
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#00ff88', fontWeight: 'bold', fontSize: '12px' }}>
                      8+
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="caption" sx={{ color: '#AEA79F', fontSize: '11px' }}>
                      $ success --rate
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#4CAF50', fontWeight: 'bold', fontSize: '12px' }}>
                      100%
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="caption" sx={{ color: '#AEA79F', fontSize: '11px' }}>
                      $ response --avg
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#00BCD4', fontWeight: 'bold', fontSize: '12px' }}>
                      &lt;2 hrs
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="caption" sx={{ color: '#AEA79F', fontSize: '11px' }}>
                      $ clients --total
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#FFC107', fontWeight: 'bold', fontSize: '12px' }}>
                      15+
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </motion.div>

          {/* Auto-Sliding Review Widget */}
          <AutoSliderWidget
            type="review"
            delay={0.7}
            onClick={() => handleIconClick('testimonials')}
          />

          {/* Auto-Sliding Project Widget */}
          <AutoSliderWidget
            type="project"
            delay={0.9}
            onClick={() => handleIconClick('projects')}
          />

          {/* Response Time Widget */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <Card sx={{
              background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.95) 0%, rgba(40, 40, 40, 0.95) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(76, 175, 80, 0.4)',
              borderRadius: 2,
              minWidth: 280,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              animation: 'glow 2s infinite',
              '@keyframes glow': {
                '0%,  100%': { boxShadow: '0 8px 32px rgba(76, 175, 80, 0.3)' },
                '50%': { boxShadow: '0 8px 32px rgba(76, 175, 80, 0.6)' }
              }
            }}>
              <CardContent sx={{ p: 2.5, textAlign: 'center' }}>
                <Typography variant="h3" sx={{
                  color: '#4CAF50',
                  fontWeight: 'bold',
                  fontFamily: 'monospace',
                  textShadow: '0 0 20px rgba(76, 175, 80, 0.5)'
                }}>
                  &lt;2h
                </Typography>
                <Typography variant="caption" sx={{
                  color: '#AEA79F',
                  display: 'block',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  mt: 0.5
                }}>
                  Average Response Time
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Box>

        {/* Welcome Window */}
        <Slide direction="up" in={showWelcome} mountOnEnter unmountOnExit>
          <Card sx={{
            position: 'absolute',
            top: { xs: 55, sm: 'auto' },
            bottom: { xs: 'auto', sm: 80 },
            left: { xs: '2.5%', sm: '50%' },
            transform: { xs: 'none', sm: 'translateX(-50%)' },
            background: 'linear-gradient(135deg, rgba(48, 10, 36, 0.98) 0%, rgba(233, 84, 32, 0.95) 100%)',
            backdropFilter: 'blur(20px)',
            border: '2px solid rgba(233, 84, 32, 0.8)',
            borderRadius: 3,
            width: { xs: '95%', sm: 'auto' },
            minWidth: { xs: 'auto', sm: 400 },
            maxWidth: { xs: '95%', sm: 500 },
            maxHeight: { xs: 'calc(100vh - 250px)', sm: 'auto' },
            overflowY: { xs: 'auto', sm: 'visible' },
            boxShadow: '0 12px 48px rgba(0, 0, 0, 0.5)',
            zIndex: 999
          }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                  👋 Welcome to My Portfolio!
                </Typography>
                <Button
                  size="small"
                  onClick={() => setShowWelcome(false)}
                  sx={{ color: 'white', minWidth: 'auto' }}
                >
                  ✕
                </Button>
              </Box>

              <Typography variant="body2" sx={{ color: 'white', mb: 2 }}>
                Explore my work and see why clients love working with me:
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Button
                  variant="outlined"
                  onClick={() => { handleIconClick('testimonials'); setShowWelcome(false); }}
                  sx={{
                    color: 'white',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    justifyContent: 'flex-start',
                    '&:hover': {
                      borderColor: '#E95420',
                      bgcolor: 'rgba(233, 84, 32, 0.2)'
                    }
                  }}
                >
                  ⭐ View Client Testimonials (5.0 Rating)
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => { handleIconClick('stats'); setShowWelcome(false); }}
                  sx={{
                    color: 'white',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    justifyContent: 'flex-start',
                    '&:hover': {
                      borderColor: '#4CAF50',
                      bgcolor: 'rgba(76, 175, 80, 0.2)'
                    }
                  }}
                >
                  📊 See My Impact & Statistics
                </Button>
                <Button
                  variant="contained"
                  onClick={() => { handleIconClick('contact'); setShowWelcome(false); }}
                  sx={{
                    bgcolor: '#E95420',
                    color: 'white',
                    fontWeight: 'bold',
                    justifyContent: 'flex-start',
                    '&:hover': {
                      bgcolor: '#C34113',
                      transform: 'scale(1.02)'
                    }
                  }}
                >
                  📧 Ready to Hire? Let's Talk!
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Slide>

        {/* Floating HIRE ME Button */}
        <Box
          sx={{
            position: 'absolute',
            bottom: { xs: 20, sm: 20 },
            left: { xs: '50%', sm: 'auto' },
            right: { xs: 'auto', sm: 30 },
            transform: { xs: 'translateX(-50%)', sm: 'none' },
            zIndex: 998,
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <Button
              variant="contained"
              size={isMobile ? 'medium' : 'large'}
              onClick={() => handleIconClick('contact')}
              sx={{
                bgcolor: '#E95420',
                color: 'white',
                fontWeight: 'bold',
                fontSize: { xs: '14px', sm: '16px' },
                px: { xs: 3, sm: 4 },
                py: { xs: 1, sm: 1.5 },
                borderRadius: 50,
                boxShadow: '0 8px 32px rgba(233, 84, 32, 0.6)',
                animation: 'pulse-button 2s infinite',
                '@keyframes pulse-button': {
                  '0%, 100%': {
                    transform: 'scale(1)',
                    boxShadow: '0 8px 32px rgba(233, 84, 32, 0.6)'
                  },
                  '50%': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 12px 48px rgba(233, 84, 32, 0.9)'
                  }
                },
                '&:hover': {
                  bgcolor: '#C34113',
                  transform: 'scale(1.1)',
                  boxShadow: '0 12px 48px rgba(233, 84, 32, 1)'
                },
                transition: 'all 0.3s'
              }}
            >
              🚀 HIRE ME NOW!
            </Button>
          </motion.div>
        </Box>

        {/* Windows */}
        {visibleWindows.map((window) => (
          <Window
            key={window.id}
            id={window.id}
            title={window.title}
            position={window.position}
            size={window.size}
            zIndex={window.zIndex}
            isActive={activeWindow === window.id}
            onClose={() => closeWindow(window.id)}
            onFocus={() => focusWindow(window.id)}
            onMinimize={() => minimizeWindow(window.id)}
          >
            {window.type === 'fileManager' && <FileManager />}
            {window.type === 'projects' && <AdvancedProjects />}
            {window.type === 'about' && <AboutMe />}
            {window.type === 'contact' && <ContactForm />}
            {window.type === 'terminal' && <Terminal />}
            {window.type === 'resume' && <Resume />}
            {window.type === 'testimonials' && <Testimonials />}
            {window.type === 'stats' && <StatsDashboard />}
            {window.type === 'video' && (
              <Box sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: '#300A24',
                p: 1
              }}>
                <ReactPlayer
                  url="https://youtu.be/xA9emWzaJ5U"
                  width="100%"
                  height="100%"
                  playing={true}
                  controls={true}
                  muted={true}
                  config={{
                    file: {
                      attributes: {
                        style: {
                          objectFit: 'contain'
                        }
                      }
                    }
                  }}
                />
              </Box>
            )}
          </Window>
        ))}
      </Box>

      {/* Enhanced Taskbar */}
      <Taskbar
        onMenuItemClick={handleIconClick}
        minimizedWindows={minimizedWindows}
        onRestoreWindow={restoreWindow}
      />

      {/* Widget Drawer for Mobile/Tablet */}
      <Drawer
        anchor="bottom"
        open={widgetDrawerOpen}
        onClose={() => setWidgetDrawerOpen(false)}
        PaperProps={{
          sx: {
            bgcolor: 'rgba(20, 20, 20, 0.98)',
            backdropFilter: 'blur(20px)',
            maxHeight: '70vh',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
              Quick Stats & Widgets
            </Typography>
            <IconButton onClick={() => setWidgetDrawerOpen(false)} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pb: 2 }}>
            {/* Quick Stats Widget for Mobile */}
            <Card sx={{
              background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.95) 0%, rgba(40, 40, 40, 0.95) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(233, 84, 32, 0.4)',
              borderRadius: 2,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
            }}>
              <CardContent sx={{ p: 2 }}>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  mb: 1.5,
                  pb: 1,
                  borderBottom: '1px solid rgba(233, 84, 32, 0.3)'
                }}>
                  <Typography variant="subtitle2" sx={{
                    color: '#E95420',
                    fontWeight: 'bold',
                    fontFamily: 'monospace',
                    fontSize: '13px'
                  }}>
                    ⚡ QUICK_STATS
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, fontFamily: 'monospace' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="caption" sx={{ color: '#AEA79F', fontSize: '11px' }}>
                      $ projects --count
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#00ff88', fontWeight: 'bold', fontSize: '12px' }}>
                      8+
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="caption" sx={{ color: '#AEA79F', fontSize: '11px' }}>
                      $ success --rate
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#4CAF50', fontWeight: 'bold', fontSize: '12px' }}>
                      100%
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="caption" sx={{ color: '#AEA79F', fontSize: '11px' }}>
                      $ response --avg
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#00BCD4', fontWeight: 'bold', fontSize: '12px' }}>
                      &lt;2 hrs
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="caption" sx={{ color: '#AEA79F', fontSize: '11px' }}>
                      $ clients --total
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#FFC107', fontWeight: 'bold', fontSize: '12px' }}>
                      15+
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            {/* Widgets */}
            <AutoSliderWidget
              type="review"
              delay={0}
              onClick={() => { handleIconClick('testimonials'); setWidgetDrawerOpen(false); }}
            />
            <AutoSliderWidget
              type="project"
              delay={0}
              onClick={() => { handleIconClick('projects'); setWidgetDrawerOpen(false); }}
            />

            {/* Response Time Widget */}
            <Card sx={{
              background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.95) 0%, rgba(40, 40, 40, 0.95) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(76, 175, 80, 0.4)',
              borderRadius: 2,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
            }}>
              <CardContent sx={{ p: 2.5, textAlign: 'center' }}>
                <Typography variant="h3" sx={{
                  color: '#4CAF50',
                  fontWeight: 'bold',
                  fontFamily: 'monospace',
                  textShadow: '0 0 20px rgba(76, 175, 80, 0.5)'
                }}>
                  &lt;2h
                </Typography>
                <Typography variant="caption" sx={{
                  color: '#AEA79F',
                  display: 'block',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  mt: 0.5
                }}>
                  Average Response Time
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Desktop;

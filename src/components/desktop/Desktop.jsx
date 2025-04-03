import { useState } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Taskbar from '../taskbar/Taskbar';
import DesktopIcon from './DesktopIcon';
import Window from '../windows/Window';
import FileManager from '../windows/FileManager';
import ProjectViewer from '../windows/ProjectViewer';
import AboutMe from '../windows/AboutMe';
import ContactForm from '../windows/ContactForm';
import Terminal from '../windows/Terminal';
import Resume from '../windows/Resume';

// Import your icons (you'll need to create or download these)
import folderIcon from '../../assets/icons/folder.svg';
import projectsIcon from '../../assets/icons/projects.svg';
import aboutIcon from '../../assets/icons/about.svg';
import contactIcon from '../../assets/icons/contact.svg';
import terminalIcon from '../../assets/icons/terminal.svg';
import resumeIcon from '../../assets/icons/resume.svg';

const Desktop = () => {
  const [windows, setWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Ubuntu purple background image for mobile
  const ubuntuPurpleBackground = 'url(https://wallpapers.com/wallpapers/ubuntu-iconic-gradient-lts-nafdrtic8fyu3x55.html)';
  // Regular Ubuntu wallpaper for desktop
  const ubuntuDesktopBackground = 'url(https://wallpapers.com/images/hd/iconic-ubuntu-hd-desktop-z6rtxbp6rijb53hx.webp)';

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
        openWindow('fileManager', 'Files', null);
        break;
      case 'projects':
        openWindow('projects', 'Projects', null);
        break;
      case 'about':
        openWindow('about', 'About Me', null);
        break;
      case 'contact':
        openWindow('contact', 'Contact Me', null);
        break;
      case 'terminal':
        openWindow('terminal', 'Terminal', null);
        break;
      case 'resume':
        openWindow('resume', 'Resume', null);
        break;
      default:
        break;
    }
  };

  // Get minimized windows for taskbar
  const minimizedWindows = windows.filter(window => window.minimized);
  // Get visible windows
  const visibleWindows = windows.filter(window => !window.minimized);

  return (
    <Box 
      sx={{ 
        height: '100vh', 
        width: '100vw', 
        bgcolor: 'secondary.main', 
        overflow: 'hidden',
        position: 'relative',
        backgroundImage: isMobile ? ubuntuPurpleBackground : ubuntuDesktopBackground,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Taskbar
        onMenuItemClick={handleIconClick}
        minimizedWindows={minimizedWindows}
        onRestoreWindow={restoreWindow}
      />
      
      <Box 
        sx={{ 
          position: 'absolute', 
          top: 10, 
          left: 10,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          pt: 5
        }}
      >
        <DesktopIcon 
          icon={folderIcon} 
          label="Files" 
          onClick={() => handleIconClick('files')} 
        />
        <DesktopIcon 
          icon={projectsIcon} 
          label="Projects" 
          onClick={() => handleIconClick('projects')} 
        />
        <DesktopIcon 
          icon={aboutIcon} 
          label="About Me" 
          onClick={() => handleIconClick('about')} 
        />
        <DesktopIcon 
          icon={contactIcon} 
          label="Contact" 
          onClick={() => handleIconClick('contact')} 
        />
        <DesktopIcon 
          icon={terminalIcon} 
          label="Terminal" 
          onClick={() => handleIconClick('terminal')} 
        />
        <DesktopIcon 
          icon={resumeIcon} 
          label="Resume" 
          onClick={() => handleIconClick('resume')} 
        />
      </Box>

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
          {window.type === 'projects' && <ProjectViewer />}
          {window.type === 'about' && <AboutMe />}
          {window.type === 'contact' && <ContactForm />}
          {window.type === 'terminal' && <Terminal />}
          {window.type === 'resume' && <Resume />}
        </Window>
      ))}
    </Box>
  );
};

export default Desktop;

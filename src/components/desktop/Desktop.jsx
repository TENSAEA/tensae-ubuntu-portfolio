import { useState } from 'react';
import { Box } from '@mui/material';
import Taskbar from '../taskbar/Taskbar';
import DesktopIcon from './DesktopIcon';
import Window from '../windows/Window';
import FileManager from '../windows/FileManager';
import ProjectViewer from '../windows/ProjectViewer';
import AboutMe from '../windows/AboutMe';
import ContactForm from '../windows/ContactForm';

// Import your icons (you'll need to create or download these)
import folderIcon from '../../assets/icons/folder.svg';
import projectsIcon from '../../assets/icons/projects.svg';
import aboutIcon from '../../assets/icons/about.svg';
import contactIcon from '../../assets/icons/contact.svg';

const Desktop = () => {
  const [windows, setWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);

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
      default:
        break;
    }
  };

  return (
    <Box 
      sx={{ 
        height: '100vh', 
        width: '100vw', 
        bgcolor: 'secondary.main', 
        overflow: 'hidden',
        position: 'relative',
        backgroundImage:'url(https://wallpapers.com/images/hd/iconic-ubuntu-hd-desktop-z6rtxbp6rijb53hx.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Taskbar onMenuItemClick={handleIconClick} />
      
      <Box 
         sx={{ 
            position: 'absolute', 
            top: 10, 
            left: 10,
            display: 'flex',
            flexDirection: 'column', // This makes icons stack vertically
            gap: 1, // Adds space between icons
            pt: 5 // Add padding top to avoid overlap with taskbar
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
      </Box>

      {windows.map((window) => (
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
        >
          {window.type === 'fileManager' && <FileManager />}
          {window.type === 'projects' && <ProjectViewer />}
          {window.type === 'about' && <AboutMe />}
          {window.type === 'contact' && <ContactForm />}
        </Window>
      ))}
    </Box>
  );
};

export default Desktop;

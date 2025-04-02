import { useState, useEffect } from 'react';
import { 
  Box, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Divider, 
  Breadcrumbs, 
  Link, 
  Typography, 
  Paper,
  IconButton,
  Tooltip,
  Card,
  CardMedia
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import LinkIcon from '@mui/icons-material/Link';
import ImageIcon from '@mui/icons-material/Image';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import RefreshIcon from '@mui/icons-material/Refresh';
import fileSystem from '../../data/fileSystem';
import ReactMarkdown from 'react-markdown';

const FileManager = () => {
  const [currentPath, setCurrentPath] = useState('/home/user');
  const [currentFiles, setCurrentFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [history, setHistory] = useState(['/home/user']);
  const [historyIndex, setHistoryIndex] = useState(0);
  
  useEffect(() => {
    if (fileSystem[currentPath]) {
      setCurrentFiles(fileSystem[currentPath]);
    } else {
      setCurrentFiles([]);
    }
  }, [currentPath]);
  
  const handleFileClick = (file) => {
    if (file.type === 'folder') {
      navigateTo(file.path);
    } else if (file.type === 'file' || file.type === 'pdf' || file.type === 'image') {
      setSelectedFile(file);
    } else if (file.type === 'link') {
      window.open(file.url, '_blank', 'noopener,noreferrer');
    }
  };
  
  const navigateTo = (path) => {
    // Add to history
    if (path !== currentPath) {
      const newHistory = history.slice(0, historyIndex + 1);
      newHistory.push(path);
      setHistory(newHistory);
      setHistoryIndex(newHistory.length - 1);
    }
    
    setCurrentPath(path);
    setSelectedFile(null);
  };
  
  const handleBreadcrumbClick = (path) => {
    navigateTo(path);
  };
  
  const handleBackClick = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setCurrentPath(history[historyIndex - 1]);
      setSelectedFile(null);
    }
  };
  
  const handleForwardClick = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setCurrentPath(history[historyIndex + 1]);
      setSelectedFile(null);
    }
  };
  
  const handleHomeClick = () => {
    navigateTo('/home/user');
  };
  
  const handleRefreshClick = () => {
    // Just re-fetch the current files
    if (fileSystem[currentPath]) {
      setCurrentFiles([...fileSystem[currentPath]]);
    }
  };
  
  const renderBreadcrumbs = () => {
    const paths = currentPath.split('/').filter(Boolean);
    let fullPath = '';
    
    return (
      <Breadcrumbs aria-label="breadcrumb">
        {paths.map((path, index) => {
          fullPath += `/${path}`;
          const isLast = index === paths.length - 1;
          
          return isLast ? (
            <Typography key={path} color="text.primary">
              {path}
            </Typography>
          ) : (
            <Link
              key={path}
              component="button"
              variant="body1"
              onClick={() => handleBreadcrumbClick(fullPath)}
              underline="hover"
              color="inherit"
            >
              {path}
            </Link>
          );
        })}
      </Breadcrumbs>
    );
  };
  
  const renderFileIcon = (file) => {
    switch (file.type) {
      case 'folder':
        return <FolderIcon color="primary" />;
      case 'pdf':
        return <PictureAsPdfIcon color="error" />;
      case 'link':
        return <LinkIcon color="secondary" />;
      case 'image':
        return <ImageIcon color="success" />;
      default:
        return <InsertDriveFileIcon color="action" />;
    }
  };
  
  const renderFileContent = () => {
    if (!selectedFile) return null;
    
    if (selectedFile.type === 'file') {
      if (selectedFile.path.endsWith('.md')) {
        return (
          <Paper sx={{ p: 2, maxHeight: 'calc(100vh - 200px)', overflow: 'auto' }}>
            <ReactMarkdown>{selectedFile.content}</ReactMarkdown>
          </Paper>
        );
      }
      return (
        <Paper sx={{ p: 2, maxHeight: 'calc(100vh - 200px)', overflow: 'auto' }}>
          <Typography variant="body1" component="pre" sx={{ whiteSpace: 'pre-wrap' }}>
            {selectedFile.content}
          </Typography>
        </Paper>
      );
    } else if (selectedFile.type === 'pdf') {
      return (
        <Box sx={{ height: 'calc(100vh - 200px)', width: '100%' }}>
          <iframe
            src={selectedFile.url}
            title={selectedFile.name}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          />
        </Box>
      );
    } else if (selectedFile.type === 'image') {
      return (
        <Card sx={{ maxWidth: '100%', maxHeight: 'calc(100vh - 200px)', overflow: 'auto' }}>
          <CardMedia
            component="img"
            image={selectedFile.url}
            alt={selectedFile.name}
            sx={{ objectFit: 'contain' }}
          />
        </Card>
      );
    }
    
    return null;
  };
  
  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Toolbar */}
      <Box sx={{ p: 1, display: 'flex', alignItems: 'center', bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}>
        <Tooltip title="Back">
          <span>
            <IconButton 
              size="small" 
              onClick={handleBackClick} 
              disabled={historyIndex <= 0}
            >
              <ArrowBackIcon />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip title="Forward">
          <span>
            <IconButton 
              size="small" 
              onClick={handleForwardClick} 
              disabled={historyIndex >= history.length - 1}
            >
              <ArrowForwardIcon />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip title="Home">
          <IconButton size="small" onClick={handleHomeClick}>
            <HomeIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Refresh">
        <IconButton size="small" onClick={handleRefreshClick}>
            <RefreshIcon />
          </IconButton>
        </Tooltip>
        <Box sx={{ ml: 2 }}>
          {renderBreadcrumbs()}
        </Box>
      </Box>
      
      <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        {/* File list */}
        <Box sx={{ width: '40%', borderRight: 1, borderColor: 'divider', overflow: 'auto' }}>
          <List>
            {currentFiles.map((file) => (
              <ListItem 
                button 
                key={file.path} 
                onClick={() => handleFileClick(file)}
                sx={{ 
                  borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
                  '&:hover': {
                    bgcolor: 'rgba(0, 0, 0, 0.04)'
                  }
                }}
              >
                <ListItemIcon>
                  {renderFileIcon(file)}
                </ListItemIcon>
                <ListItemText 
                  primary={file.name} 
                  secondary={file.type === 'folder' ? 'Folder' : file.type.charAt(0).toUpperCase() + file.type.slice(1)}
                />
              </ListItem>
            ))}
          </List>
        </Box>
        
        {/* File content */}
        <Box sx={{ flexGrow: 1, p: 2, overflow: 'auto' }}>
          {selectedFile ? (
            <>
              <Typography variant="h6" gutterBottom>
                {selectedFile.name}
              </Typography>
              <Divider sx={{ mb: 2 }} />
              {renderFileContent()}
            </>
          ) : (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <Typography variant="body1" color="text.secondary">
                Select a file to view its contents
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default FileManager;

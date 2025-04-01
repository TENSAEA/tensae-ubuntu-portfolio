import { useState } from 'react';
import { 
  Box, 
  Button, 
  Typography, 
  Paper, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Divider,
  Breadcrumbs,
  Link,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import LinkIcon from '@mui/icons-material/Link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import fileSystem from '../../data/fileSystem';

const FileManager = () => {
  const [currentPath, setCurrentPath] = useState('/home/user');
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreviewOpen, setFilePreviewOpen] = useState(false);
  
  const navigateTo = (path) => {
    setCurrentPath(path);
    setSelectedFile(null);
  };

  const handleFileClick = (file) => {
    setSelectedFile(file);
  };

  const handleFileDoubleClick = (file) => {
    if (file.type === 'folder') {
      navigateTo(file.path);
    } else if (file.type === 'pdf') {
      // For PDF files, open in a new tab/window directly
      window.open(file.url, '_blank');
    } else if (file.type === 'file') {
      // For regular files, show in the preview dialog
      setSelectedFile(file);
      setFilePreviewOpen(true);
    } else if (file.type === 'link') {
      window.open(file.url, '_blank');
    }
  };

  const getParentPath = (path) => {
    const parts = path.split('/');
    parts.pop();
    return parts.join('/') || '/';
  };

  const getPathParts = (path) => {
    return path.split('/').filter(Boolean);
  };

  const getIcon = (type) => {
    switch (type) {
      case 'folder':
        return <FolderIcon sx={{ color: '#E9B64A' }} />;
      case 'pdf':
        return <PictureAsPdfIcon sx={{ color: '#E95420' }} />;
      case 'link':
        return <LinkIcon sx={{ color: '#3465A4' }} />;
      default:
        return <InsertDriveFileIcon />;
    }
  };

  const renderFilePreview = () => {
    if (!selectedFile) return null;

    if (selectedFile.type === 'file') {
      return (
        <Box sx={{ p: 2, whiteSpace: 'pre-wrap' }}>
          {selectedFile.content}
        </Box>
      );
    }
    
    return null;
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 1, bgcolor: 'grey.100', display: 'flex', alignItems: 'center' }}>
        <Button 
          startIcon={<ArrowBackIcon />}
          onClick={() => navigateTo(getParentPath(currentPath))}
          disabled={currentPath === '/'}
          size="small"
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        
        <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ flexGrow: 1 }}>
          <Link 
            underline="hover" 
            color="inherit" 
            onClick={() => navigateTo('/')}
            sx={{ cursor: 'pointer' }}
          >
            Root
          </Link>
          {getPathParts(currentPath).map((part, index, parts) => {
            const path = '/' + parts.slice(0, index + 1).join('/');
            return (
              <Link
                key={path}
                underline="hover"
                color="inherit"
                onClick={() => navigateTo(path)}
                sx={{ cursor: 'pointer' }}
              >
                {part}
              </Link>
            );
          })}
        </Breadcrumbs>
      </Box>
      
      <Divider />
      
      <Box sx={{ flexGrow: 1, overflow: 'auto', p: 1 }}>
        <List>
          {fileSystem[currentPath]?.map((item) => (
            <ListItem 
              key={item.path}
              button
              selected={selectedFile?.path === item.path}
              onClick={() => handleFileClick(item)}
              onDoubleClick={() => handleFileDoubleClick(item)}
              sx={{ 
                borderRadius: 1,
                '&.Mui-selected': {
                  bgcolor: 'rgba(233, 84, 32, 0.1)',
                }
              }}
            >
              <ListItemIcon>
                {getIcon(item.type)}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Box>
      
      <Dialog
        open={filePreviewOpen}
        onClose={() => setFilePreviewOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          {selectedFile?.name}
          <IconButton
            aria-label="close"
            onClick={() => setFilePreviewOpen(false)}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {renderFilePreview()}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default FileManager;

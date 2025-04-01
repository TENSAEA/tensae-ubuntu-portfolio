import { Rnd } from 'react-rnd';
import { Box, Typography } from '@mui/material';

const Window = ({ 
  id, 
  title, 
  children, 
  position, 
  size, 
  zIndex, 
  isActive, 
  onClose, 
  onFocus 
}) => {
  return (
    <Rnd
      default={{
        x: position.x,
        y: position.y,
        width: size.width,
        height: size.height
      }}
      minWidth={400}
      minHeight={300}
      style={{ zIndex: isActive ? 999 : zIndex }}
      onMouseDown={() => onFocus(id)}
      dragHandleClassName="window-header"
    >
      <Box 
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'background.paper',
          borderRadius: 1,
          boxShadow: 3,
          overflow: 'hidden',
          border: isActive ? 2 : 0,
          borderColor: 'primary.main'
        }}
      >
        <Box 
          className="window-header"
          sx={{
            bgcolor: 'grey.800',
            color: 'white',
            px: 1.5,
            py: 1,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            <Box 
              component="button"
              onClick={onClose}
              sx={{ 
                width: 12, 
                height: 12, 
                borderRadius: '50%', 
                bgcolor: 'error.main',
                border: 'none',
                cursor: 'pointer',
                '&:hover': { bgcolor: 'error.dark' }
              }}
            />
            <Box 
              component="button"
              sx={{ 
                width: 12, 
                height: 12, 
                borderRadius: '50%', 
                bgcolor: 'warning.main',
                border: 'none',
                cursor: 'pointer',
                '&:hover': { bgcolor: 'warning.dark' }
              }}
            />
            <Box 
              component="button"
              sx={{ 
                width: 12, 
                height: 12, 
                borderRadius: '50%', 
                bgcolor: 'success.main',
                border: 'none',
                cursor: 'pointer',
                '&:hover': { bgcolor: 'success.dark' }
              }}
            />
          </Box>
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
            {title}
          </Typography>
          <Box sx={{ width: 48 }} /> {/* Spacer for alignment */}
        </Box>
        <Box sx={{ flexGrow: 1, overflow: 'auto', p: 2 }}>
          {children}
        </Box>
      </Box>
    </Rnd>
  );
};

export default Window;

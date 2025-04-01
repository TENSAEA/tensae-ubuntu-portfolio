import { Box, Typography } from '@mui/material';

const DesktopIcon = ({ icon, label, onClick }) => {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 80,
        cursor: 'pointer',
        p: 1,
        borderRadius: 1,
        transition: 'background-color 0.2s',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)'
        }
      }}
      onClick={onClick}
    >
      <Box 
        component="img" 
        src={icon} 
        alt={label} 
        sx={{ width: 48, height: 48 }}
      />
      <Typography 
        variant="caption" 
        sx={{ 
          mt: 0.5, 
          color: 'white', 
          textAlign: 'center',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default DesktopIcon;
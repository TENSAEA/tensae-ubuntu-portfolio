import { Box, Typography } from '@mui/material';
import { useState } from 'react';

const DesktopIcon = ({ icon, label, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 110, // Increased from 90
        cursor: 'pointer',
        p: 1.5,
        borderRadius: 2,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'scale(1.1) translateY(-5px)' : 'scale(1)',
        '&:hover': {
          backgroundColor: 'rgba(233, 84, 32, 0.2)',
          boxShadow: '0 8px 16px rgba(233, 84, 32, 0.3)',
        },
        '&:active': {
          transform: 'scale(0.95)',
        }
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        component="img"
        src={icon}
        alt={label}
        sx={{
          width: 56,
          height: 56,
          filter: isHovered ? 'drop-shadow(0 0 8px rgba(233, 84, 32, 0.8))' : 'none',
          transition: 'all 0.3s',
          animation: isHovered ? 'iconBounce 0.5s ease' : 'none',
          '@keyframes iconBounce': {
            '0%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
            '100%': { transform: 'translateY(0)' }
          }
        }}
      />
      <Typography
        variant="caption"
        sx={{
          mt: 1,
          color: 'white',
          textAlign: 'center',
          textShadow: isHovered
            ? '2px 2px 4px rgba(233, 84, 32, 0.8), 0 0 10px rgba(233, 84, 32, 0.5)'
            : '1px 1px 3px rgba(0, 0, 0, 0.9)',
          fontWeight: isHovered ? 'bold' : 'normal',
          fontSize: isHovered ? '0.85rem' : '0.75rem',
          transition: 'all 0.3s',
          maxWidth: '100%',
          wordWrap: 'break-word', // Allow text to wrap
          whiteSpace: 'normal', // Changed from nowrap to normal
          lineHeight: 1.2
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default DesktopIcon;
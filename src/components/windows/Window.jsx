import { useState } from 'react';
import { Rnd } from 'react-rnd';
import { Box, Typography, IconButton, Slider, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import OpacityIcon from '@mui/icons-material/Opacity';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import { motion } from 'framer-motion';

const Window = ({
  id,
  title,
  children,
  position,
  size,
  zIndex,
  isActive,
  onClose,
  onFocus,
  onMinimize
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [isMaximized, setIsMaximized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [showOpacityControl, setShowOpacityControl] = useState(false);
  const [normalPosition, setNormalPosition] = useState(position);
  const [normalSize, setNormalSize] = useState(size);

  // Get current window state
  const getCurrentPosition = () => {
    // On mobile, always use full-screen positioning
    if (isMobile || isFullscreen) {
      return { x: 0, y: 0 };
    } else if (isMaximized) {
      return { x: 0, y: 48 }; // Below taskbar
    }
    return normalPosition;
  };

  const getCurrentSize = () => {
    // On mobile, always use full-screen size
    if (isMobile || isFullscreen) {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      };
    } else if (isMaximized) {
      return {
        width: window.innerWidth,
        height: window.innerHeight - 48
      };
    }
    return normalSize;
  };

  // Handle maximize/restore
  const handleMaximize = () => {
    if (isFullscreen) {
      // If in fullscreen, first exit fullscreen then maximize
      setIsFullscreen(false);
      setIsMaximized(true);
    } else if (isMaximized) {
      // Restore to normal
      setIsMaximized(false);
    } else {
      // Maximize
      setIsMaximized(true);
    }
  };

  // Handle fullscreen
  const handleFullscreen = () => {
    if (isFullscreen) {
      // Exit fullscreen, return to normal
      setIsFullscreen(false);
      setIsMaximized(false);
    } else {
      // Enter fullscreen
      setIsFullscreen(true);
      setIsMaximized(false);
    }
  };

  // Double-click title to maximize
  const handleTitleDoubleClick = () => {
    handleMaximize();
  };

  const currentPosition = getCurrentPosition();
  const currentSize = getCurrentSize();
  const currentZIndex = (isMobile || isFullscreen) ? 9999 : (isActive ? 999 : zIndex);
  const isFullScreenMode = isMobile || isFullscreen;

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.2 }}
      style={{
        position: isFullScreenMode ? 'fixed' : 'absolute',
        zIndex: currentZIndex,
        top: isFullScreenMode ? 0 : 'auto',
        left: isFullScreenMode ? 0 : 'auto',
        right: isFullScreenMode ? 0 : 'auto',
        bottom: isFullScreenMode ? 0 : 'auto',
        width: isFullScreenMode ? '100vw' : 'auto',
        height: isFullScreenMode ? '100vh' : 'auto',
      }}
    >
      {isFullScreenMode ? (
        // Fullscreen mode - use Box without Rnd
        <Box
          onClick={() => onFocus(id)}
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            bgcolor: 'background.paper',
            boxShadow: 'none',
            overflow: 'hidden',
            opacity: opacity,
          }}
        >
          {renderWindowContent()}
        </Box>
      ) : (
        // Normal/Maximized mode - use Rnd
        <Rnd
          position={currentPosition}
          size={currentSize}
          onDragStart={(e, d) => {
            // If maximized, restore to normal on drag start
            if (isMaximized) {
              const mouseX = e.clientX;
              const percentage = mouseX / window.innerWidth;
              const newX = mouseX - (normalSize.width * percentage);

              setNormalPosition({ x: newX, y: d.y });
              setIsMaximized(false);
            }
          }}
          onDragStop={(e, d) => {
            if (!isMaximized) {
              setNormalPosition({ x: d.x, y: d.y });
            }
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            if (!isMaximized) {
              setNormalSize({
                width: parseInt(ref.style.width),
                height: parseInt(ref.style.height),
              });
              setNormalPosition(position);
            }
          }}
          minWidth={isSmallMobile ? 280 : 400}
          minHeight={isSmallMobile ? 200 : 300}
          onMouseDown={() => onFocus(id)}
          dragHandleClassName="window-header"
          disableDragging={false}
          enableResizing={!isMaximized}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              bgcolor: 'background.paper',
              borderRadius: 1,
              boxShadow: isActive
                ? '0 12px 48px rgba(233, 84, 32, 0.4), 0 0 0 2px #E95420'
                : '0 4px 16px rgba(0, 0, 0, 0.3)',
              overflow: 'hidden',
              transition: 'all 0.3s',
              opacity: opacity,
              // Resize handle indicator
              '&::after': !isMaximized ? {
                content: '""',
                position: 'absolute',
                bottom: 4,
                right: 4,
                width: 12,
                height: 12,
                borderRight: '2px solid rgba(233, 84, 32, 0.4)',
                borderBottom: '2px solid rgba(233, 84, 32, 0.4)',
                pointerEvents: 'none',
              } : {}
            }}
          >
            {renderWindowContent()}
          </Box>
        </Rnd>
      )}
    </motion.div>
  );

  function renderWindowContent() {
    return (
      <>
        {/* Header */}
        <Box
          className="window-header"
          onDoubleClick={handleTitleDoubleClick}
          sx={{
            background: isActive
              ? 'linear-gradient(135deg, #3C3B37 0%, #2C2C2C 100%)'
              : 'linear-gradient(135deg, #4A4A4A 0%, #3A3A3A 100%)',
            color: 'white',
            px: { xs: 1, sm: 2 },
            py: { xs: 0.5, sm: 1 },
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: isActive ? '1px solid rgba(233, 84, 32, 0.3)' : '1px solid rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s',
            cursor: isFullScreenMode ? 'default' : 'move',
            userSelect: 'none'
          }}
        >
          {/* Title */}
          <Typography
            variant="body2"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '12px', sm: '14px' },
              color: isActive ? 'white' : '#AEA79F',
              flex: 1,
              textAlign: 'center',
              ml: { xs: 4, sm: 10 },
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}
          >
            {title}
          </Typography>

          {/* Window Control Buttons */}
          <Box sx={{ display: 'flex', gap: { xs: 0.3, sm: 0.5 } }}>
            {/* Opacity Control - Hide on small mobile */}
            {!isSmallMobile && (
              <Tooltip title="Opacity">
                <IconButton
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowOpacityControl(!showOpacityControl);
                  }}
                  sx={{
                    width: { xs: 32, sm: 28 },
                    height: { xs: 32, sm: 28 },
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    color: showOpacityControl ? '#9C27B0' : '#AEA79F',
                    padding: 0,
                    '&:hover': {
                      bgcolor: 'rgba(156, 39, 176, 0.3)',
                      color: '#9C27B0',
                      transform: 'scale(1.1)'
                    },
                    transition: 'all 0.2s'
                  }}
                >
                  <OpacityIcon sx={{ fontSize: { xs: 18, sm: 16 } }} />
                </IconButton>
              </Tooltip>

            )}
            {/* Fullscreen Button - Hide on mobile (already full-screen) */}
            {!isMobile && (
              <Tooltip title={isFullscreen ? "Exit Fullscreen (F11)" : "Fullscreen (F11)"}>
                <IconButton
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFullscreen();
                  }}
                  sx={{
                    width: { xs: 32, sm: 28 },
                    height: { xs: 32, sm: 28 },
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    color: isFullscreen ? '#2196F3' : '#AEA79F',
                    padding: 0,
                    '&:hover': {
                      bgcolor: 'rgba(33, 150, 243, 0.3)',
                      color: '#2196F3',
                      transform: 'scale(1.1)'
                    },
                    transition: 'all 0.2s'
                  }}
                >
                  {isFullscreen ? <FullscreenExitIcon sx={{ fontSize: { xs: 18, sm: 16 } }} /> : <FullscreenIcon sx={{ fontSize: { xs: 18, sm: 16 } }} />}
                </IconButton>
              </Tooltip>
            )}

            {/* Minimize Button */}
            <Tooltip title="Minimize">
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  onMinimize(id);
                }}
                sx={{
                  width: { xs: 32, sm: 28 },
                  height: { xs: 32, sm: 28 },
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  color: '#AEA79F',
                  padding: 0,
                  '&:hover': {
                    bgcolor: 'rgba(255, 189, 68, 0.3)',
                    color: '#FFBD44',
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.2s'
                }}
              >
                <MinimizeIcon sx={{ fontSize: { xs: 18, sm: 16 } }} />
              </IconButton>
            </Tooltip>

            {/* Maximize/Restore Button - Hide on mobile (already maximized) */}
            {!isMobile && (
              <Tooltip title={isMaximized ? "Restore Down" : "Maximize"}>
                <IconButton
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMaximize();
                  }}
                  sx={{
                    width: { xs: 32, sm: 28 },
                    height: { xs: 32, sm: 28 },
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    color: isMaximized ? '#4CAF50' : '#AEA79F',
                    padding: 0,
                    '&:hover': {
                      bgcolor: 'rgba(76, 175, 80, 0.3)',
                      color: '#4CAF50',
                      transform: 'scale(1.1)'
                    },
                    transition: 'all 0.2s'
                  }}
                >
                  {isMaximized ? <FilterNoneIcon sx={{ fontSize: { xs: 18, sm: 16 } }} /> : <CropSquareIcon sx={{ fontSize: { xs: 18, sm: 16 } }} />}
                </IconButton>
              </Tooltip>
            )}

            {/* Close Button */}
            <Tooltip title="Close">
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  onClose(id);
                }}
                sx={{
                  width: { xs: 32, sm: 28 },
                  height: { xs: 32, sm: 28 },
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  color: '#AEA79F',
                  padding: 0,
                  '&:hover': {
                    bgcolor: 'rgba(239, 83, 80, 0.3)',
                    color: '#EF5350',
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.2s'
                }}
              >
                <CloseIcon sx={{ fontSize: { xs: 18, sm: 16 } }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        {/* Opacity Control Slider */}
        {showOpacityControl && (
          <Box sx={{
            px: 2,
            py: 1,
            bgcolor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            borderBottom: '1px solid rgba(233, 84, 32, 0.2)'
          }}>
            <Typography variant="caption" sx={{ color: 'white', minWidth: 60 }}>
              Opacity: {Math.round(opacity * 100)}%
            </Typography>
            <Slider
              value={opacity}
              onChange={(e, newValue) => setOpacity(newValue)}
              min={0.3}
              max={1}
              step={0.05}
              sx={{
                color: '#E95420',
                '& .MuiSlider-thumb': {
                  width: 16,
                  height: 16,
                }
              }}
            />
          </Box>
        )}

        {/* Content */}
        <Box sx={{
          flexGrow: 1,
          overflow: 'auto',
          p: 2,
          bgcolor: '#F5F5F5',
          '&::-webkit-scrollbar': {
            width: '10px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#E0E0E0',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#E95420',
            borderRadius: '5px',
            '&:hover': {
              background: '#C34113',
            }
          },
        }}>
          {children}
        </Box>

        {/* Status Bar */}
        <Box sx={{
          px: { xs: 1, sm: 2 },
          py: 0.5,
          bgcolor: '#E0E0E0',
          borderTop: '1px solid #CCC',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Typography variant="caption" sx={{ color: '#666', fontSize: { xs: '9px', sm: '11px' }, fontFamily: 'monospace' }}>
            {isFullScreenMode ? '⛶ Fullscreen' : isMaximized ? '⬜ Maximized' : '🪟 Windowed'}
          </Typography>
          <Typography variant="caption" sx={{ color: '#666', fontSize: { xs: '9px', sm: '11px' }, fontFamily: 'monospace' }}>
            {Math.round(currentSize.width)} × {Math.round(currentSize.height)}
          </Typography>
        </Box>
      </>
    );
  }
};

export default Window;

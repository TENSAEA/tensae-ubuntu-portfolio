import { useState, useEffect, useRef } from 'react';
import { Box, Typography, CircularProgress, Fade } from '@mui/material';
import { gsap } from 'gsap';

// A simpler animation without Three.js to avoid the errors
const IntroAnimation = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0);
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoading(false);
      setAnimationPhase(1);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (animationPhase === 1 && containerRef.current) {
      // Logo animation
      gsap.fromTo(
        '.ubuntu-logo',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'elastic.out(1, 0.5)' }
      );
      
      // First text animation
      gsap.fromTo(
        '.text-1',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.5, ease: 'power3.out' }
      );
      
      // Second text animation
      gsap.fromTo(
        '.text-2',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 2.5, ease: 'power3.out' }
      );
      
      // Third text animation
      gsap.fromTo(
        '.text-3',
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          delay: 4.5, 
          ease: 'power3.out',
          onComplete: () => {
            // Fade out the entire animation
            gsap.to(
              containerRef.current,
              { 
                opacity: 0, 
                duration: 1.5, 
                delay: 2, 
                onComplete 
              }
            );
          }
        }
      );
    }
  }, [animationPhase, onComplete]);
  
  if (loading) {
    return (
      <Box 
        sx={{ 
          width: '100vw', 
          height: '100vh', 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center', 
          alignItems: 'center',
          backgroundColor: '#300A24',
          color: 'white'
        }}
      >
        <CircularProgress color="primary" size={60} />
        <Typography variant="h6" sx={{ mt: 2, color: '#E95420' }}>
          Loading Tensae's Portfolio...
        </Typography>
      </Box>
    );
  }
  
  return (
    <Box 
      ref={containerRef}
      sx={{ 
        width: '100vw', 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#300A24',
        color: 'white',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Stars background (CSS-based) */}
      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at center, rgba(48, 10, 36, 0) 0%, #300A24 100%)',
            zIndex: 2
          }
        }}
      >
        {/* Generate stars with CSS */}
        {[...Array(200)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              backgroundColor: 'white',
              borderRadius: '50%',
              opacity: Math.random() * 0.8 + 0.2,
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `twinkle ${Math.random() * 5 + 3}s infinite ${Math.random() * 5}s`,
              '@keyframes twinkle': {
                '0%': { opacity: Math.random() * 0.8 + 0.2 },
                '50%': { opacity: Math.random() * 0.2 },
                '100%': { opacity: Math.random() * 0.8 + 0.2 }
              }
            }}
          />
        ))}
      </Box>
      
      {/* Ubuntu Logo */}
      <Box 
        className="ubuntu-logo"
        sx={{ 
          position: 'relative',
          width: 120,
          height: 120,
          borderRadius: '50%',
          backgroundColor: '#E95420',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 5,
          opacity: 0,
          '&::before': {
            content: '""',
            position: 'absolute',
            width: 24,
            height: 24,
            borderRadius: '50%',
            backgroundColor: 'white',
            left: 20,
            top: '50%',
            transform: 'translateY(-50%)'
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            width: 24,
            height: 24,
            borderRadius: '50%',
            backgroundColor: 'white',
            right: 20,
            top: '50%',
            transform: 'translateY(-50%)'
          }
        }}
      >
        <Box 
          sx={{
            position: 'absolute',
            width: 24,
            height: 24,
            borderRadius: '50%',
            backgroundColor: 'white',
            top: 20,
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        />
      </Box>
      
      {/* Text Animations */}
      <Typography 
        className="text-1"
        variant="h3" 
        sx={{ 
          fontWeight: 'bold', 
          textAlign: 'center', 
          mb: 3,
          opacity: 0,
          color: 'white',
          px: 3
        }}
      >
        This is Tensae's Software Developer Portfolio
      </Typography>
      
      <Typography 
        className="text-2"
        variant="h5" 
        sx={{ 
          color: '#E95420', 
          textAlign: 'center', 
          mb: 3,
          opacity: 0,
          px: 3
        }}
      >
        He created this because he loves Ubuntu
      </Typography>
      
      <Typography 
        className="text-3"
        variant="h6" 
        sx={{ 
          color: '#AEA79F', 
          textAlign: 'center',
          opacity: 0,
          maxWidth: 800,
          px: 3
        }}
      >
        "Ubuntu" is an ancient African word meaning "humanity to others"
      </Typography>
    </Box>
  );
};

export default IntroAnimation;

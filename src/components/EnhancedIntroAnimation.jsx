import { useState, useEffect, useRef } from 'react';
import { Box, Typography, LinearProgress, Card, CardMedia, CardContent, Chip } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '../data/projects';

const AdvancedTerminalIntro = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [currentPhase, setCurrentPhase] = useState('boot'); // boot, loading, ready
    const [bootLogs, setBootLogs] = useState([]);
    const [visibleCards, setVisibleCards] = useState([]);
    const containerRef = useRef(null);

    // ASCII Art Banner
    const asciiArt = `
  ████████╗███████╗███╗   ██╗███████╗ █████╗ ███████╗
  ╚══██╔══╝██╔════╝████╗  ██║██╔════╝██╔══██╗██╔════╝
     ██║   █████╗  ██╔██╗ ██║███████╗███████║█████╗  
     ██║   ██╔══╝  ██║╚██╗██║╚════██║██╔══██║██╔══╝  
     ██║   ███████╗██║ ╚████║███████║██║  ██║███████╗
     ╚═╝   ╚══════╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚══════╝
  `;

    // Advanced boot logs
    const logs = [
        { text: '', color: '#fff', delay: 0 },
        { text: '╔════════════════════════════════════════════════════════╗', color: '#E95420', delay: 100 },
        { text: '║          TENSAE ASCHALEW - DEVELOPER PORTFOLIO         ║', color: '#E95420', delay: 100 },
        { text: '╚════════════════════════════════════════════════════════╝', color: '#E95420', delay: 100 },
        { text: '', color: '#fff', delay: 100 },
        { text: '[ ✓ ] Initializing Ubuntu Portfolio System...', color: '#4CAF50', delay: 200 },
        { text: '[ ✓ ] Loading professional credentials...', color: '#4CAF50', delay: 200 },
        { text: '', color: '#fff', delay: 100 },
        { text: '━━━━━━━━━━ PROFESSIONAL STATS ━━━━━━━━━━', color: '#4A90E2', delay: 200 },
        { text: '  📊 Projects Delivered....................... 8+', color: '#00ff88', delay: 250 },
        { text: '  ⭐ Client Satisfaction Rate............. 100%', color: '#00ff88', delay: 250 },
        { text: '  👥 Happy Clients Worldwide............... 15+', color: '#00ff88', delay: 250 },
        { text: '  💰 Revenue Generated for Clients.... $250K+', color: '#00ff88', delay: 250 },
        { text: '  ⚡ Average Response Time.............. <2 hrs', color: '#00ff88', delay: 250 },
        { text: '  🚀 On-Time Delivery Rate................ 100%', color: '#00ff88', delay: 250 },
        { text: '', color: '#fff', delay: 100 },
        { text: '━━━━━━━━━━ LOADING PROJECT SHOWCASE ━━━━━━━━━━', color: '#4A90E2', delay: 200 },
        { text: '  [████████████████████] React/Next.js     95%', color: '#61DAFB', delay: 200 },
        { text: '  [██████████████████  ] Node.js/Express   90%', color: '#339933', delay: 200 },
        { text: '  [█████████████████   ] MongoDB/MySQL     85%', color: '#47A248', delay: 200 },
        { text: '  [██████████████████  ] GraphQL/REST API  90%', color: '#E10098', delay: 200 },
        { text: '', color: '#fff', delay: 100 },
        { text: '━━━━━━━━━ RECENT ACHIEVEMENTS ━━━━━━━━━', color: '#4A90E2', delay: 200 },
        { text: '  ✨ Built SaaS platform serving 10K+ users', color: '#FFC107', delay: 250 },
        { text: '  ✨ Reduced API response time by 60%', color: '#FFC107', delay: 250 },
        { text: '  ✨ Saved client $50K in hosting costs', color: '#FFC107', delay: 250 },
        { text: '  ✨ Increased conversion rate by 25%', color: '#FFC107', delay: 250 },
        { text: '', color: '#fff', delay: 100 },
        { text: '[ ✓ ] All systems operational', color: '#4CAF50', delay: 300 },
        { text: '[ ✓ ] Portfolio ready for viewing', color: '#4CAF50', delay: 300 },
        { text: '', color: '#fff', delay: 100 },
        { text: '🚀 READY TO TRANSFORM YOUR PROJECT?', color: '#E95420', delay: 200 },
        { text: '📧 Contact: tensaeaschalew27@gmail.com', color: '#4A90E2', delay: 200 },
        { text: '', color: '#fff', delay: 100 },
        { text: 'Starting desktop environment...', color: '#AEA79F', delay: 300 },
    ];

    // Boot sequence with typing effect
    useEffect(() => {
        let totalDelay = 0;

        logs.forEach((log, index) => {
            totalDelay += log.delay;
            setTimeout(() => {
                setBootLogs(prev => [...prev, log]);

                // Update progress
                const progressValue = ((index + 1) / logs.length) * 100;
                setProgress(progressValue);

                // Show project cards progressively based on progress
                const cardIndex = Math.floor((progressValue / 100) * projects.length);
                if (cardIndex > visibleCards.length && cardIndex <= projects.length) {
                    setVisibleCards(projects.slice(0, cardIndex));
                }

                // Auto-scroll to bottom
                if (containerRef.current) {
                    containerRef.current.scrollTop = containerRef.current.scrollHeight;
                }
            }, totalDelay);
        });

        // Move to loading phase after boot logs
        setTimeout(() => {
            setCurrentPhase('loading');
            // Show all cards
            setVisibleCards(projects);
        }, totalDelay + 500);

        // Complete intro and show desktop
        setTimeout(() => {
            setCurrentPhase('ready');
            setTimeout(onComplete, 1000);
        }, totalDelay + 3500);

    }, []);

    return (
        <Box
            sx={{
                width: '100vw',
                height: '100vh',
                bgcolor: '#0a0a0a',
                color: '#ffffff',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                // Scanline effect
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 2px)',
                    pointerEvents: 'none',
                    animation: 'scanline 10s linear infinite',
                    zIndex: 10,
                },
                '@keyframes scanline': {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(100%)' }
                },
                '@keyframes flicker': {
                    '0%': { opacity: 0.97 },
                    '50%': { opacity: 1 },
                    '100%': { opacity: 0.97 }
                },
                animation: 'flicker 0.15s infinite alternate'
            }}
        >
            {/* Header with progress bar */}
            <Box sx={{
                p: 2,
                borderBottom: '2px solid #E95420',
                bgcolor: 'rgba(233, 84, 32, 0.1)',
                zIndex: 20,
            }}>
                <Typography variant="body2" sx={{ color: '#E95420', mb: 1, fontWeight: 'bold', fontSize: { xs: '10px', md: '12px' } }}>
                    TENSAE ASCHALEW - FULL-STACK DEVELOPER PORTFOLIO
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <LinearProgress
                        variant="determinate"
                        value={progress}
                        sx={{
                            flex: 1,
                            height: 8,
                            borderRadius: 1,
                            bgcolor: '#1a1a1a',
                            '& .MuiLinearProgress-bar': {
                                bgcolor: '#E95420',
                                boxShadow: '0 0 10px #E95420'
                            }
                        }}
                    />
                    <Typography variant="caption" sx={{ color: '#4CAF50', minWidth: 60, fontSize: { xs: '10px', md: '12px' } }}>
                        {Math.round(progress)}%
                    </Typography>
                </Box>
            </Box>

            {/* Main Content: Terminal + Floating Cards */}
            <Box sx={{
                display: 'flex',
                flex: 1,
                overflow: 'hidden',
                gap: 1
            }}>
                {/* Left: Terminal - 40% */}
                <Box
                    ref={containerRef}
                    sx={{
                        width: { xs: '100%', md: '40%' },
                        overflow: 'auto',
                        p: { xs: 2, md: 3 },
                        zIndex: 20,
                        fontFamily: '"Ubuntu Mono", monospace',
                        fontSize: { xs: '10px', sm: '12px', md: '13px' },
                        borderRight: { md: '1px solid rgba(233, 84, 32, 0.2)' },
                        '&::-webkit-scrollbar': {
                            width: '8px',
                        },
                        '&::-webkit-scrollbar-track': {
                            background: '#1a1a1a',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: '#E95420',
                            borderRadius: '4px',
                        },
                    }}
                >
                    {/* ASCII Art */}
                    <pre style={{
                        color: '#E95420',
                        fontSize: '9px',
                        lineHeight: '1.1',
                        textShadow: '0 0 10px rgba(233, 84, 32, 0.5)',
                        marginBottom: '15px',
                        display: currentPhase === 'boot' ? 'block' : 'none'
                    }}>
                        {asciiArt}
                    </pre>

                    {/* Boot logs */}
                    {bootLogs.map((log, index) => (
                        <Typography
                            key={index}
                            sx={{
                                color: log.color,
                                fontSize: 'inherit',
                                fontFamily: 'inherit',
                                whiteSpace: 'pre-wrap',
                                lineHeight: 1.5,
                                textShadow: log.color !== '#fff' ? `0 0 5px ${log.color}` : 'none',
                                mb: 0.3,
                                animation: 'fadeIn 0.3s ease-in',
                                '@keyframes fadeIn': {
                                    from: { opacity: 0, transform: 'translateX(-10px)' },
                                    to: { opacity: 1, transform: 'translateX(0)' }
                                }
                            }}
                        >
                            {log.text}
                        </Typography>
                    ))}

                    {/* Loading phase */}
                    {currentPhase === 'loading' && (
                        <Box sx={{ mt: 3, animation: 'pulse 1s infinite' }}>
                            <Typography sx={{
                                color: '#E95420',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                textShadow: '0 0 20px #E95420',
                                '@keyframes pulse': {
                                    '0%, 100%': { opacity: 1 },
                                    '50%': { opacity: 0.5 }
                                }
                            }}>
                                🚀 LAUNCHING PORTFOLIO DESKTOP...
                            </Typography>
                        </Box>
                    )}
                </Box>

                {/* Right: Floating Project Cards - 60% */}
                <Box sx={{
                    width: { xs: '0%', md: '60%' },
                    display: { xs: 'none', md: 'flex' },
                    position: 'relative',
                    overflow: 'hidden',
                    p: 2,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {/* Centered Container for Cards */}
                    <Box sx={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '600px',
                        height: '100%'
                    }}>
                        <AnimatePresence>
                            {visibleCards.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{
                                        opacity: 0,
                                        scale: 0,
                                        rotateY: -180,
                                        x: 100,
                                        y: 100
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        rotateY: 0,
                                        x: (index % 2) * 290,
                                        y: Math.floor(index / 2) * 200,
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.15,
                                        type: 'spring',
                                        stiffness: 100
                                    }}
                                    whileHover={{
                                        scale: 1.08,
                                        rotateY: 8,
                                        z: 50,
                                        transition: { duration: 0.3 }
                                    }}
                                    style={{
                                        position: 'absolute',
                                        width: '280px',
                                        transformStyle: 'preserve-3d',
                                        perspective: '1000px'
                                    }}
                                >
                                    <Card
                                        sx={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            backdropFilter: 'blur(20px)',
                                            border: '1px solid rgba(233, 84, 32, 0.3)',
                                            borderRadius: 3,
                                            overflow: 'hidden',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s',
                                            boxShadow: `
                        0 8px 32px rgba(0, 0, 0, 0.4),
                        0 0 20px rgba(233, 84, 32, 0.2),
                        inset 0 0 20px rgba(255, 255, 255, 0.05)
                      `,
                                            animation: `float${index % 3} 3s ease-in-out infinite`,
                                            animationDelay: `${index * 0.2}s`,
                                            '@keyframes float0': {
                                                '0%, 100%': { transform: 'translateY(0px) rotateZ(0deg)' },
                                                '50%': { transform: 'translateY(-10px) rotateZ(1deg)' }
                                            },
                                            '@keyframes float1': {
                                                '0%, 100%': { transform: 'translateY(0px) rotateZ(0deg)' },
                                                '50%': { transform: 'translateY(-15px) rotateZ(-1deg)' }
                                            },
                                            '@keyframes float2': {
                                                '0%, 100%': { transform: 'translateY(0px) rotateZ(0deg)' },
                                                '50%': { transform: 'translateY(-12px) rotateZ(0.5deg)' }
                                            },
                                            '&:hover': {
                                                border: '1px solid rgba(233, 84, 32, 0.8)',
                                                boxShadow: `
                          0 12px 48px rgba(0, 0, 0, 0.6),
                          0 0 40px rgba(233, 84, 32, 0.6),
                          inset 0 0 30px rgba(255, 255, 255, 0.1)
                        `,
                                                '& .project-overlay': {
                                                    opacity: 1
                                                }
                                            }
                                        }}
                                        onClick={() => window.open(project.demoUrl, '_blank')}
                                    >
                                        {/* Project Image */}
                                        <Box sx={{ position: 'relative', height: 130, overflow: 'hidden' }}>
                                            <CardMedia
                                                component="img"
                                                height="130"
                                                image={project.imageUrl}
                                                alt={project.title}
                                                sx={{
                                                    objectFit: 'cover',
                                                    filter: 'brightness(0.8)',
                                                    transition: 'all 0.3s',
                                                    '&:hover': {
                                                        filter: 'brightness(1)',
                                                        transform: 'scale(1.1)'
                                                    }
                                                }}
                                            />
                                            {/* Overlay on hover */}
                                            <Box
                                                className="project-overlay"
                                                sx={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    background: 'linear-gradient(135deg, rgba(233, 84, 32, 0.95) 0%, rgba(195, 65, 19, 0.95) 100%)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    opacity: 0,
                                                    transition: 'opacity 0.3s'
                                                }}
                                            >
                                                <Typography variant="body1" sx={{ color: 'white', fontWeight: 'bold', textShadow: '0 2px 4px rgba(0,0,0,0.5)', fontSize: '14px' }}>
                                                    VIEW PROJECT →
                                                </Typography>
                                            </Box>
                                        </Box>

                                        {/* Project Info */}
                                        <CardContent sx={{ p: 1.5, bgcolor: 'rgba(0, 0, 0, 0.4)' }}>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    color: '#E95420',
                                                    fontWeight: 'bold',
                                                    mb: 0.5,
                                                    fontSize: '13px',
                                                    textShadow: '0 0 10px rgba(233, 84, 32, 0.5)'
                                                }}
                                            >
                                                {project.title}
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    color: '#AEA79F',
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    fontSize: '11px',
                                                    mb: 1,
                                                    lineHeight: 1.3
                                                }}
                                            >
                                                {project.description}
                                            </Typography>
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                {project.technologies.slice(0, 3).map((tech, i) => (
                                                    <Chip
                                                        key={i}
                                                        label={tech}
                                                        size="small"
                                                        sx={{
                                                            height: 18,
                                                            fontSize: '9px',
                                                            bgcolor: 'rgba(233, 84, 32, 0.2)',
                                                            color: '#00ff88',
                                                            border: '1px solid rgba(233, 84, 32, 0.4)',
                                                            '& .MuiChip-label': {
                                                                px: 1
                                                            }
                                                        }}
                                                    />
                                                ))}
                                                {project.technologies.length > 3 && (
                                                    <Chip
                                                        label={`+${project.technologies.length - 3}`}
                                                        size="small"
                                                        sx={{
                                                            height: 18,
                                                            fontSize: '9px',
                                                            bgcolor: 'rgba(233, 84, 32, 0.5)',
                                                            color: '#fff',
                                                            fontWeight: 'bold',
                                                            '& .MuiChip-label': {
                                                                px: 1
                                                            }
                                                        }}
                                                    />
                                                )}
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </Box>
                </Box>
            </Box>

            {/* Footer */}
            <Box sx={{
                p: 1.5,
                borderTop: '1px solid #E95420',
                bgcolor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '11px',
                zIndex: 20,
            }}>
                <Typography sx={{ color: '#4CAF50', fontSize: { xs: '9px', md: '11px' } }}>
                    ● System Online • {visibleCards.length} Projects Loaded
                </Typography>
                <Typography sx={{ color: '#4A90E2', fontSize: { xs: '9px', md: '11px' } }}>
                    Ubuntu 24.04 LTS • Tensae Edition
                </Typography>
                <Typography sx={{ color: '#AEA79F', fontSize: { xs: '9px', md: '11px' } }}>
                    {new Date().toLocaleTimeString()}
                </Typography>
            </Box>
        </Box>
    );
};

export default AdvancedTerminalIntro;

import { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Box, LinearProgress, IconButton, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import testimonials from '../../data/testimonials';
import projects from '../../data/projects';

// Map testimonials to match expected structure
const testimonialsData = testimonials.map(t => ({
    clientName: t.name,
    role: t.role,
    company: t.company,
    rating: t.rating,
    feedback: t.text,
    project: t.project
}));

const AutoSliderWidget = ({ type, delay, onClick }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const data = type === 'review' ? testimonialsData : projects;
    const duration = 5000; // 5 seconds per slide

    useEffect(() => {
        if (isPaused) return;

        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    return 0;
                }
                return prev + (100 / (duration / 50));
            });
        }, 50);

        const slideInterval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % data.length);
            setProgress(0);
        }, duration);

        return () => {
            clearInterval(progressInterval);
            clearInterval(slideInterval);
        };
    }, [data.length, duration, isPaused]);

    const handlePrevious = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
        setProgress(0);
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % data.length);
        setProgress(0);
    };

    const togglePause = (e) => {
        e.stopPropagation();
        setIsPaused(!isPaused);
    };

    const current = data[currentIndex];

    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay }}
        >
            <Card
                sx={{
                    background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.95) 0%, rgba(40, 40, 40, 0.95) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(233, 84, 32, 0.4)',
                    borderRadius: 2,
                    minWidth: 320,
                    maxWidth: 320,
                    minHeight: type === 'review' ? 240 : 260,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 12px 48px rgba(233, 84, 32, 0.4)',
                        border: '1px solid rgba(233, 84, 32, 0.7)'
                    }
                }}
                onClick={onClick}
            >
                {/* Progress Bar */}
                <LinearProgress
                    variant="determinate"
                    value={progress}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 3,
                        bgcolor: 'rgba(233, 84, 32, 0.2)',
                        '& .MuiLinearProgress-bar': {
                            bgcolor: '#E95420',
                            boxShadow: '0 0 10px rgba(233, 84, 32, 0.6)'
                        }
                    }}
                />

                <CardContent sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    {/* Header with Controls */}
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mb: 1.5,
                        pb: 1,
                        borderBottom: '1px solid rgba(233, 84, 32, 0.3)'
                    }}>
                        <Typography variant="subtitle2" sx={{
                            color: '#E95420',
                            fontWeight: 'bold',
                            fontFamily: 'monospace',
                            fontSize: '13px'
                        }}>
                            {type === 'review' ? '💬 CLIENT_REVIEW' : '💼 PROJECT_SHOWCASE'}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <IconButton
                                size="small"
                                onClick={handlePrevious}
                                sx={{
                                    color: '#E95420',
                                    p: 0.3,
                                    '&:hover': { bgcolor: 'rgba(233, 84, 32, 0.2)' }
                                }}
                            >
                                <NavigateBeforeIcon fontSize="small" />
                            </IconButton>
                            <IconButton
                                size="small"
                                onClick={togglePause}
                                sx={{
                                    color: '#E95420',
                                    p: 0.3,
                                    '&:hover': { bgcolor: 'rgba(233, 84, 32, 0.2)' }
                                }}
                            >
                                {isPaused ? <PlayArrowIcon fontSize="small" /> : <PauseIcon fontSize="small" />}
                            </IconButton>
                            <IconButton
                                size="small"
                                onClick={handleNext}
                                sx={{
                                    color: '#E95420',
                                    p: 0.3,
                                    '&:hover': { bgcolor: 'rgba(233, 84, 32, 0.2)' }
                                }}
                            >
                                <NavigateNextIcon fontSize="small" />
                            </IconButton>
                            <Typography variant="caption" sx={{
                                color: '#AEA79F',
                                fontFamily: 'monospace',
                                fontSize: '10px',
                                ml: 0.5
                            }}>
                                {currentIndex + 1}/{data.length}
                            </Typography>
                        </Box>
                    </Box>

                    {/* Content with Animation */}
                    <Box sx={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                {type === 'review' ? (
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, height: '100%' }}>
                                        {/* Client Name - Prominent */}
                                        <Box sx={{
                                            bgcolor: 'rgba(233, 84, 32, 0.1)',
                                            border: '1px solid rgba(233, 84, 32, 0.3)',
                                            borderRadius: 1,
                                            p: 1
                                        }}>
                                            <Typography variant="subtitle2" sx={{
                                                color: '#E95420',
                                                fontWeight: 'bold',
                                                fontSize: '13px',
                                                fontFamily: 'monospace'
                                            }}>
                                                {current.clientName}
                                            </Typography>
                                            <Typography variant="caption" sx={{
                                                color: '#AEA79F',
                                                fontSize: '10px',
                                                fontFamily: 'monospace'
                                            }}>
                                                {current.role} @ {current.company}
                                            </Typography>
                                        </Box>

                                        {/* Review Text */}
                                        <Typography variant="caption" sx={{
                                            color: 'white',
                                            fontStyle: 'italic',
                                            fontSize: '11px',
                                            lineHeight: 1.4,
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                            fontFamily: 'monospace',
                                            flex: 1
                                        }}>
                                            "{current.feedback}"
                                        </Typography>

                                        {/* Rating & Action */}
                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            pt: 1,
                                            borderTop: '1px solid rgba(233, 84, 32, 0.2)'
                                        }}>
                                            <Typography variant="caption" sx={{ color: '#FFC107', fontSize: '14px' }}>
                                                {'⭐'.repeat(current.rating)}
                                            </Typography>
                                            <Button
                                                size="small"
                                                variant="outlined"
                                                onClick={(e) => { e.stopPropagation(); onClick(); }}
                                                sx={{
                                                    color: '#E95420',
                                                    borderColor: 'rgba(233, 84, 32, 0.4)',
                                                    fontSize: '9px',
                                                    py: 0.3,
                                                    px: 1.5,
                                                    fontFamily: 'monospace',
                                                    textTransform: 'none',
                                                    '&:hover': {
                                                        borderColor: '#E95420',
                                                        bgcolor: 'rgba(233, 84, 32, 0.2)'
                                                    }
                                                }}
                                            >
                                                View All
                                            </Button>
                                        </Box>
                                    </Box>
                                ) : (
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, height: '100%' }}>
                                        {/* Project Title */}
                                        <Typography variant="subtitle2" sx={{
                                            color: '#E95420',
                                            fontWeight: 'bold',
                                            fontSize: '13px',
                                            fontFamily: 'monospace'
                                        }}>
                                            $ cat {current.title.toLowerCase().replace(/\s+/g, '_')}
                                        </Typography>

                                        {/* Description */}
                                        <Typography variant="caption" sx={{
                                            color: 'white',
                                            fontSize: '11px',
                                            lineHeight: 1.3,
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                            fontFamily: 'monospace',
                                            flex: 1
                                        }}>
                                            {current.description}
                                        </Typography>

                                        {/* Technologies */}
                                        <Box sx={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: 0.5,
                                            mb: 1
                                        }}>
                                            {current.technologies.slice(0, 4).map((tech, i) => (
                                                <Box
                                                    key={i}
                                                    sx={{
                                                        px: 1,
                                                        py: 0.3,
                                                        bgcolor: 'rgba(233, 84, 32, 0.2)',
                                                        border: '1px solid rgba(233, 84, 32, 0.4)',
                                                        borderRadius: 1,
                                                        fontSize: '9px',
                                                        fontFamily: 'monospace',
                                                        color: '#00ff88'
                                                    }}
                                                >
                                                    {tech}
                                                </Box>
                                            ))}
                                            {current.technologies.length > 4 && (
                                                <Box
                                                    sx={{
                                                        px: 1,
                                                        py: 0.3,
                                                        bgcolor: 'rgba(233, 84, 32, 0.4)',
                                                        borderRadius: 1,
                                                        fontSize: '9px',
                                                        fontFamily: 'monospace',
                                                        color: 'white',
                                                        fontWeight: 'bold'
                                                    }}
                                                >
                                                    +{current.technologies.length - 4}
                                                </Box>
                                            )}
                                        </Box>

                                        {/* Action Buttons */}
                                        <Box sx={{
                                            display: 'flex',
                                            gap: 1,
                                            pt: 1,
                                            borderTop: '1px solid rgba(233, 84, 32, 0.2)'
                                        }}>
                                            {current.demoUrl && (
                                                <Button
                                                    size="small"
                                                    variant="contained"
                                                    onClick={(e) => { e.stopPropagation(); window.open(current.demoUrl, '_blank'); }}
                                                    sx={{
                                                        bgcolor: '#E95420',
                                                        color: 'white',
                                                        fontSize: '9px',
                                                        py: 0.5,
                                                        px: 1.5,
                                                        fontFamily: 'monospace',
                                                        textTransform: 'none',
                                                        flex: 1,
                                                        '&:hover': {
                                                            bgcolor: '#C34113'
                                                        }
                                                    }}
                                                >
                                                    Live Demo
                                                </Button>
                                            )}
                                            {current.githubUrl && (
                                                <Button
                                                    size="small"
                                                    variant="outlined"
                                                    onClick={(e) => { e.stopPropagation(); window.open(current.githubUrl, '_blank'); }}
                                                    sx={{
                                                        color: '#00ff88',
                                                        borderColor: 'rgba(0, 255, 136, 0.4)',
                                                        fontSize: '9px',
                                                        py: 0.5,
                                                        px: 1.5,
                                                        fontFamily: 'monospace',
                                                        textTransform: 'none',
                                                        flex: 1,
                                                        '&:hover': {
                                                            borderColor: '#00ff88',
                                                            bgcolor: 'rgba(0, 255, 136, 0.1)'
                                                        }
                                                    }}
                                                >
                                                    GitHub
                                                </Button>
                                            )}
                                        </Box>
                                    </Box>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </Box>

                    {/* Slider Dots */}
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 0.5,
                        mt: 1,
                        pt: 1,
                        borderTop: '1px solid rgba(233, 84, 32, 0.2)'
                    }}>
                        {data.slice(0, 8).map((_, index) => (
                            <Box
                                key={index}
                                sx={{
                                    width: index === currentIndex ? 16 : 6,
                                    height: 6,
                                    borderRadius: index === currentIndex ? 1 : '50%',
                                    bgcolor: index === currentIndex ? '#E95420' : 'rgba(233, 84, 32, 0.3)',
                                    transition: 'all 0.3s',
                                    cursor: 'pointer'
                                }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentIndex(index);
                                    setProgress(0);
                                }}
                            />
                        ))}
                        {data.length > 8 && (
                            <Typography variant="caption" sx={{
                                color: '#AEA79F',
                                fontSize: '10px',
                                fontFamily: 'monospace',
                                ml: 0.5
                            }}>
                                +{data.length - 8}
                            </Typography>
                        )}
                    </Box>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default AutoSliderWidget;

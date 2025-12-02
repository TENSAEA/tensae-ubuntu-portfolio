import { Box, Typography, Grid, Paper, LinearProgress } from '@mui/material';
import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import CodeIcon from '@mui/icons-material/Code';
import GroupIcon from '@mui/icons-material/Group';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SpeedIcon from '@mui/icons-material/Speed';
import GitHubIcon from '@mui/icons-material/GitHub';
import WorkIcon from '@mui/icons-material/Work';

const StatsDashboard = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const stats = [
        {
            icon: <WorkIcon sx={{ fontSize: 40 }} />,
            value: 8,
            suffix: '+',
            label: 'Projects Delivered',
            color: '#E95420',
            description: 'Production-ready applications'
        },
        {
            icon: <GroupIcon sx={{ fontSize: 40 }} />,
            value: 15,
            suffix: '+',
            label: 'Happy Clients',
            color: '#4CAF50',
            description: 'Worldwide satisfaction'
        },
        {
            icon: <CheckCircleIcon sx={{ fontSize: 40 }} />,
            value: 100,
            suffix: '%',
            label: 'Job Success Rate',
            color: '#4A90E2',
            description: 'Perfect track record'
        },
        {
            icon: <CodeIcon sx={{ fontSize: 40 }} />,
            value: 50000,
            suffix: '+',
            label: 'Lines of Code',
            color: '#FFC107',
            description: 'Clean, documented code'
        },
        {
            icon: <SpeedIcon sx={{ fontSize: 40 }} />,
            value: 2,
            suffix: ' hrs',
            label: 'Avg Response Time',
            color: '#9C27B0',
            description: 'Quick communication'
        },
        {
            icon: <GitHubIcon sx={{ fontSize: 40 }} />,
            value: 3,
            suffix: ' yrs',
            label: 'Experience',
            color: '#00BCD4',
            description: 'Professional development'
        },
    ];

    const skills = [
        { name: 'React/Next.js', level: 95, color: '#61DAFB' },
        { name: 'Node.js/Express', level: 90, color: '#339933' },
        { name: 'MongoDB/MySQL', level: 85, color: '#47A248' },
        { name: 'GraphQL/REST APIs', level: 90, color: '#E10098' },
        { name: 'TypeScript', level: 85, color: '#3178C6' },
        { name: 'AWS/Cloud', level: 75, color: '#FF9900' },
    ];

    return (
        <Box sx={{ height: '100%', overflow: 'auto', p: 3, bgcolor: '#f5f5f5', position: 'relative' }}>
            {/* Mouse following particle effect */}
            <Box
                sx={{
                    position: 'fixed',
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, #E95420 0%, transparent 70%)',
                    pointerEvents: 'none',
                    left: mousePosition.x - 10,
                    top: mousePosition.y - 10,
                    transition: 'all 0.1s ease',
                    zIndex: 9999,
                    filter: 'blur(10px)',
                    opacity: 0.6,
                }}
            />

            <Typography variant="h4" gutterBottom align="center" sx={{ mb: 1, fontWeight: 'bold', color: '#300A24' }}>
                Professional Statistics
            </Typography>

            <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 4 }}>
                Real metrics that matter to clients
            </Typography>

            {/* Main Stats Grid */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
                {stats.map((stat, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Paper
                            elevation={3}
                            sx={{
                                p: 3,
                                textAlign: 'center',
                                background: `linear-gradient(135deg, ${stat.color}15 0%, ${stat.color}05 100%)`,
                                border: `2px solid ${stat.color}30`,
                                borderRadius: 3,
                                transition: 'all 0.3s',
                                cursor: 'pointer',
                                '&:hover': {
                                    transform: 'translateY(-10px) scale(1.03)',
                                    boxShadow: `0 10px 30px ${stat.color}40`,
                                    border: `2px solid ${stat.color}`,
                                }
                            }}
                        >
                            <Box sx={{ color: stat.color, mb: 2 }}>
                                {stat.icon}
                            </Box>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 'bold',
                                    color: stat.color,
                                    mb: 1
                                }}
                            >
                                {typeof stat.value === 'number' && stat.value < 100 ? (
                                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix || ''} />
                                ) : (
                                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix || ''} separator="," />
                                )}
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                {stat.label}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {stat.description}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            {/* Skills Section */}
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3, mb: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                    Core Technologies
                </Typography>
                <Grid container spacing={3}>
                    {skills.map((skill, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <Box sx={{ mb: 2 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="body1" fontWeight="bold">
                                        {skill.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {skill.level}%
                                    </Typography>
                                </Box>
                                <LinearProgress
                                    variant="determinate"
                                    value={skill.level}
                                    sx={{
                                        height: 10,
                                        borderRadius: 5,
                                        bgcolor: '#e0e0e0',
                                        '& .MuiLinearProgress-bar': {
                                            background: `linear-gradient(90deg, ${skill.color} 0%, ${skill.color}CC 100%)`,
                                            borderRadius: 5,
                                        }
                                    }}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Paper>

            {/* Value Proposition */}
            <Paper
                elevation={4}
                sx={{
                    p: 4,
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #E95420 0%, #C34113 100%)',
                    color: 'white',
                    textAlign: 'center'
                }}
            >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Why Clients Choose Me
                </Typography>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>⚡ Fast Delivery</Typography>
                        <Typography variant="body2">
                            Projects delivered on-time or ahead of schedule
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>💬 Clear Communication</Typography>
                        <Typography variant="body2">
                            Daily updates and responsive to all messages
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>🎯 Business Focused</Typography>
                        <Typography variant="body2">
                            Solutions that increase revenue and reduce costs
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default StatsDashboard;

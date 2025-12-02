import { useState } from 'react';
import {
    Box,
    Typography,
    Avatar,
    Rating,
    Card,
    CardContent,
    Grid,
    Chip,
    IconButton,
    Paper
} from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import testimonials from '../../data/testimonials';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <Box sx={{ height: '100%', overflow: 'auto', p: 3, bgcolor: '#f5f5f5' }}>
            <Typography variant="h4" gutterBottom align="center" sx={{ mb: 1, fontWeight: 'bold' }}>
                Client Testimonials
            </Typography>

            <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 4 }}>
                What my clients say about working with me
            </Typography>

            {/* Stats Summary */}
            <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={4}>
                    <Paper elevation={2} sx={{ p: 2, textAlign: 'center', bgcolor: '#E95420', color: 'white' }}>
                        <Typography variant="h3" fontWeight="bold">15+</Typography>
                        <Typography variant="body2">Happy Clients</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper elevation={2} sx={{ p: 2, textAlign: 'center', bgcolor: '#300A24', color: 'white' }}>
                        <Typography variant="h3" fontWeight="bold">5.0</Typography>
                        <Typography variant="body2">Average Rating</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper elevation={2} sx={{ p: 2, textAlign: 'center', bgcolor: '#4CAF50', color: 'white' }}>
                        <Typography variant="h3" fontWeight="bold">100%</Typography>
                        <Typography variant="body2">Job Success Rate</Typography>
                    </Paper>
                </Grid>
            </Grid>

            {/* Main Testimonial Card */}
            <Card
                elevation={4}
                sx={{
                    position: 'relative',
                    borderRadius: 3,
                    overflow: 'visible',
                    bgcolor: 'white',
                    transition: 'transform 0.3s',
                    '&:hover': {
                        transform: 'translateY(-5px)'
                    }
                }}
            >
                <FormatQuoteIcon
                    sx={{
                        position: 'absolute',
                        top: -20,
                        left: 20,
                        fontSize: 80,
                        color: '#E95420',
                        opacity: 0.2
                    }}
                />

                <CardContent sx={{ p: 4 }}>
                    {/* Client Info */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Avatar
                            sx={{
                                width: 80,
                                height: 80,
                                mr: 2,
                                border: '3px solid #E95420'
                            }}
                        >
                            {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                        </Avatar>
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" fontWeight="bold">
                                {currentTestimonial.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {currentTestimonial.role}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {currentTestimonial.company} • {currentTestimonial.location}
                            </Typography>
                            <Rating value={currentTestimonial.rating} readOnly sx={{ mt: 0.5 }} />
                        </Box>
                    </Box>

                    {/* Testimonial Text */}
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{
                            fontSize: '1.1rem',
                            lineHeight: 1.8,
                            fontStyle: 'italic',
                            mb: 3
                        }}
                    >
                        "{currentTestimonial.text}"
                    </Typography>

                    {/* Project Info */}
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                            Project:
                        </Typography>
                        <Typography variant="body1" fontWeight="bold" color="primary">
                            {currentTestimonial.project}
                        </Typography>
                    </Box>

                    {/* Delivery Time Badge */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <CheckCircleIcon sx={{ color: '#4CAF50', mr: 1 }} />
                        <Typography variant="body2" color="success.main" fontWeight="bold">
                            {currentTestimonial.deliveryTime}
                        </Typography>
                    </Box>

                    {/* Tech Tags */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {currentTestimonial.tags.map((tag, index) => (
                            <Chip
                                key={index}
                                label={tag}
                                size="small"
                                color="primary"
                                variant="outlined"
                            />
                        ))}
                    </Box>
                </CardContent>
            </Card>

            {/* Navigation */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 3, gap: 2 }}>
                <IconButton
                    onClick={handlePrev}
                    sx={{
                        bgcolor: '#E95420',
                        color: 'white',
                        '&:hover': { bgcolor: '#C34113' }
                    }}
                >
                    <NavigateBeforeIcon />
                </IconButton>

                <Typography variant="body2" color="text.secondary">
                    {currentIndex + 1} / {testimonials.length}
                </Typography>

                <IconButton
                    onClick={handleNext}
                    sx={{
                        bgcolor: '#E95420',
                        color: 'white',
                        '&:hover': { bgcolor: '#C34113' }
                    }}
                >
                    <NavigateNextIcon />
                </IconButton>
            </Box>

            {/* All Testimonials Preview */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom align="center">
                    All Reviews
                </Typography>
                <Grid container spacing={2}>
                    {testimonials.map((testimonial, index) => (
                        <Grid item xs={12} sm={6} md={4} key={testimonial.id}>
                            <Card
                                elevation={currentIndex === index ? 4 : 1}
                                sx={{
                                    cursor: 'pointer',
                                    transition: 'all 0.3s',
                                    border: currentIndex === index ? '2px solid #E95420' : '1px solid #e0e0e0',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        elevation: 3
                                    }
                                }}
                                onClick={() => setCurrentIndex(index)}
                            >
                                <CardContent>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <Avatar sx={{ width: 40, height: 40, mr: 1, bgcolor: '#E95420' }}>
                                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                                        </Avatar>
                                        <Box>
                                            <Typography variant="subtitle2" fontWeight="bold">
                                                {testimonial.name}
                                            </Typography>
                                            <Rating value={testimonial.rating} size="small" readOnly />
                                        </Box>
                                    </Box>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: 'vertical',
                                        }}
                                    >
                                        {testimonial.text}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Testimonials;

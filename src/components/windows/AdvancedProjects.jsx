import { useState, useMemo, useEffect } from 'react';
import {
    Box, Typography, TextField, Button, Chip, Card, CardContent,
    CardMedia, CardActions, ToggleButton, ToggleButtonGroup,
    Select, MenuItem, FormControl, InputLabel, InputAdornment, IconButton,
    Dialog, DialogTitle, DialogContent, DialogActions, Grid, Divider,
    Drawer, useMediaQuery, useTheme
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import StarIcon from '@mui/icons-material/Star';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '../../data/projects';
import testimonials from '../../data/testimonials';


const AdvancedProjects = () => {
    // State management
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedYear, setSelectedYear] = useState('All');
    const [sortBy, setSortBy] = useState('featured');
    const [viewMode, setViewMode] = useState('grid');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProject, setSelectedProject] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const itemsPerPage = 9;

    // Extract unique categories, tags, and years
    const categories = useMemo(() => {
        const cats = new Set(projects.map(p => p.category));
        return ['All', ...Array.from(cats)];
    }, []);

    const allTags = useMemo(() => {
        const tags = new Set();
        projects.forEach(p => p.tags?.forEach(tag => tags.add(tag)));
        return Array.from(tags);
    }, []);

    const years = useMemo(() => {
        const yrs = new Set(projects.map(p => p.year));
        return ['All', ...Array.from(yrs).sort((a, b) => b - a)];
    }, []);

    // Filter and sort projects
    const filteredProjects = useMemo(() => {
        let filtered = projects;

        if (searchTerm) {
            filtered = filtered.filter(p =>
                p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedCategory !== 'All') {
            filtered = filtered.filter(p => p.category === selectedCategory);
        }

        if (selectedTags.length > 0) {
            filtered = filtered.filter(p =>
                selectedTags.every(tag => p.tags?.includes(tag))
            );
        }

        if (selectedYear !== 'All') {
            filtered = filtered.filter(p => p.year === parseInt(selectedYear));
        }

        filtered = [...filtered].sort((a, b) => {
            switch (sortBy) {
                case 'featured':
                    if (a.featured && !b.featured) return -1;
                    if (!a.featured && b.featured) return 1;
                    return b.year - a.year;
                case 'newest':
                    return b.year - a.year;
                case 'oldest':
                    return a.year - b.year;
                case 'title':
                    return a.title.localeCompare(b.title);
                default:
                    return 0;
            }
        });

        return filtered;
    }, [searchTerm, selectedCategory, selectedTags, selectedYear, sortBy]);

    // Pagination
    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
    const paginatedProjects = filteredProjects.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleTagToggle = (tag) => {
        setSelectedTags(prev =>
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
        );
        setCurrentPage(1);
    };

    const resetFilters = () => {
        setSearchTerm('');
        setSelectedCategory('All');
        setSelectedTags([]);
        setSelectedYear('All');
        setSortBy('featured');
        setCurrentPage(1);
    };

    return (
        <Box sx={{ height: '100%', display: 'flex', bgcolor: '#FAFAFA', flexDirection: { xs: 'column', md: 'row' } }}>
            {/* Filter Button for Mobile */}
            {isMobile && (
                <Button
                    variant="contained"
                    startIcon={<FilterListIcon />}
                    onClick={() => setDrawerOpen(true)}
                    sx={{
                        m: 1,
                        bgcolor: '#E95420',
                        '&:hover': { bgcolor: '#C34113' }
                    }}
                >
                    Filters ({filteredProjects.length} projects)
                </Button>
            )}

            {/* Sidebar Filters - Drawer on Mobile, Static on Desktop */}
            <Drawer
                anchor="left"
                open={isMobile && drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{
                    sx: {
                        width: '80%',
                        maxWidth: 320,
                        display: { xs: 'block', md: 'none' }
                    }
                }}
            >
                <Box sx={{
                    bgcolor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    overflow: 'auto'
                }}>
                    <Box sx={{ p: 2, borderBottom: '1px solid #E0E0E0', bgcolor: '#E95420' }}>
                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>
                            🔍 Filters
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '11px' }}>
                            {filteredProjects.length} projects
                        </Typography>
                    </Box>
                    <Box sx={{ p: 2, flex: 1 }}>
                        {/* Search */}
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="caption" sx={{ fontWeight: 'bold', color: '#333', display: 'block', mb: 1 }}>
                                Search
                            </Typography>
                            <TextField
                                fullWidth
                                size="small"
                                placeholder="Project name..."
                                value={searchTerm}
                                onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon sx={{ fontSize: 18 }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>

                        {/* Category */}
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="caption" sx={{ fontWeight: 'bold', color: '#333', display: 'block', mb: 1 }}>
                                Category
                            </Typography>
                            <FormControl fullWidth size="small">
                                <Select
                                    value={selectedCategory}
                                    onChange={(e) => { setSelectedCategory(e.target.value); setCurrentPage(1); }}
                                >
                                    {categories.map(cat => (
                                        <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>

                        {/* Year */}
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="caption" sx={{ fontWeight: 'bold', color: '#333', display: 'block', mb: 1 }}>
                                Year
                            </Typography>
                            <FormControl fullWidth size="small">
                                <Select
                                    value={selectedYear}
                                    onChange={(e) => { setSelectedYear(e.target.value); setCurrentPage(1); }}
                                >
                                    {years.map(year => (
                                        <MenuItem key={year} value={year}>{year}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>

                        {/* Sort */}
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="caption" sx={{ fontWeight: 'bold', color: '#333', display: 'block', mb: 1 }}>
                                Sort By
                            </Typography>
                            <FormControl fullWidth size="small">
                                <Select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <MenuItem value="featured">⭐ Featured</MenuItem>
                                    <MenuItem value="newest">📅 Newest</MenuItem>
                                    <MenuItem value="oldest">📅 Oldest</MenuItem>
                                    <MenuItem value="title">🔤 A-Z</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                        {/* Technology Tags */}
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="caption" sx={{ fontWeight: 'bold', color: '#333', display: 'block', mb: 1 }}>
                                Technologies
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {allTags.map(tag => (
                                    <Chip
                                        key={tag}
                                        label={tag}
                                        size="small"
                                        onClick={() => handleTagToggle(tag)}
                                        color={selectedTags.includes(tag) ? 'primary' : 'default'}
                                        sx={{
                                            cursor: 'pointer',
                                            fontSize: '10px',
                                            height: 24
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>

                        {/* Reset Button */}
                        {(selectedTags.length > 0 || selectedCategory !== 'All' || selectedYear !== 'All' || searchTerm) && (
                            <Button
                                fullWidth
                                variant="outlined"
                                size="small"
                                onClick={() => { resetFilters(); setDrawerOpen(false); }}
                                sx={{ mt: 2 }}
                            >
                                Reset All Filters
                            </Button>
                        )}
                    </Box>
                </Box>
            </Drawer>

            {/* Desktop Filters - Always visible on desktop */}
            <Box sx={{
                width: 280,
                bgcolor: 'white',
                borderRight: '1px solid #E0E0E0',
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'column',
                overflow: 'auto'
            }}>
                {/* Sidebar Header */}
                <Box sx={{ p: 2, borderBottom: '1px solid #E0E0E0', bgcolor: '#E95420' }}>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>
                        🔍 Filters
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '11px' }}>
                        {filteredProjects.length} projects
                    </Typography>
                </Box>

                {/* Filters Content */}
                <Box sx={{ p: 2, flex: 1 }}>
                    {/* Search */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="caption" sx={{ fontWeight: 'bold', color: '#333', display: 'block', mb: 1 }}>
                            Search
                        </Typography>
                        <TextField
                            fullWidth
                            size="small"
                            placeholder="Project name..."
                            value={searchTerm}
                            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon sx={{ fontSize: 18 }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>

                    {/* Category */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="caption" sx={{ fontWeight: 'bold', color: '#333', display: 'block', mb: 1 }}>
                            Category
                        </Typography>
                        <FormControl fullWidth size="small">
                            <Select
                                value={selectedCategory}
                                onChange={(e) => { setSelectedCategory(e.target.value); setCurrentPage(1); }}
                            >
                                {categories.map(cat => (
                                    <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>

                    {/* Year */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="caption" sx={{ fontWeight: 'bold', color: '#333', display: 'block', mb: 1 }}>
                            Year
                        </Typography>
                        <FormControl fullWidth size="small">
                            <Select
                                value={selectedYear}
                                onChange={(e) => { setSelectedYear(e.target.value); setCurrentPage(1); }}
                            >
                                {years.map(year => (
                                    <MenuItem key={year} value={year}>{year}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>

                    {/* Sort */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="caption" sx={{ fontWeight: 'bold', color: '#333', display: 'block', mb: 1 }}>
                            Sort By
                        </Typography>
                        <FormControl fullWidth size="small">
                            <Select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <MenuItem value="featured">⭐ Featured</MenuItem>
                                <MenuItem value="newest">📅 Newest</MenuItem>
                                <MenuItem value="oldest">📅 Oldest</MenuItem>
                                <MenuItem value="title">🔤 A-Z</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    {/* Technology Tags */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="caption" sx={{ fontWeight: 'bold', color: '#333', display: 'block', mb: 1 }}>
                            Technologies
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {allTags.map(tag => (
                                <Chip
                                    key={tag}
                                    label={tag}
                                    size="small"
                                    onClick={() => handleTagToggle(tag)}
                                    color={selectedTags.includes(tag) ? 'primary' : 'default'}
                                    sx={{
                                        cursor: 'pointer',
                                        fontSize: '10px',
                                        height: 24
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>

                    {/* Reset Button */}
                    {(selectedTags.length > 0 || selectedCategory !== 'All' || selectedYear !== 'All' || searchTerm) && (
                        <Button
                            fullWidth
                            variant="outlined"
                            size="small"
                            onClick={resetFilters}
                            sx={{ mt: 2 }}
                        >
                            Reset All Filters
                        </Button>
                    )}
                </Box>
            </Box>

            {/* Main Content Area */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                {/* Compact Header */}
                <Box sx={{
                    p: { xs: 1, sm: 2 },
                    bgcolor: 'white',
                    borderBottom: '1px solid #E0E0E0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 1
                }}>
                    <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 auto' } }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333', fontSize: { xs: '16px', sm: '18px' } }}>
                            🚀 Project Showcase
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#666', fontSize: { xs: '11px', sm: '12px' } }}>
                            Showing {paginatedProjects.length} of {filteredProjects.length} projects
                        </Typography>
                    </Box>

                    {/* View Toggle */}
                    <ToggleButtonGroup
                        value={viewMode}
                        exclusive
                        onChange={(e, newMode) => newMode && setViewMode(newMode)}
                        size="small"
                        sx={{ display: { xs: 'none', sm: 'flex' } }}
                    >
                        <ToggleButton value="grid">
                            <GridViewIcon fontSize="small" />
                        </ToggleButton>
                        <ToggleButton value="list">
                            <ViewListIcon fontSize="small" />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>

                {/* Projects Grid/List */}
                <Box sx={{ flex: 1, overflow: 'auto', p: { xs: 1, sm: 3 } }}>
                    {paginatedProjects.length === 0 ? (
                        <Box sx={{ textAlign: 'center', py: 8 }}>
                            <Typography variant="h6" color="text.secondary">No projects found</Typography>
                            <Button onClick={resetFilters} sx={{ mt: 2 }}>Clear Filters</Button>
                        </Box>
                    ) : (
                        <Grid container spacing={{ xs: 2, sm: 3 }}>
                            {paginatedProjects.map((project) => (
                                <Grid item xs={12} sm={viewMode === 'grid' ? 6 : 12} md={viewMode === 'grid' ? 4 : 12} key={project.id}>
                                    <ProjectCard project={project} viewMode={viewMode} onViewDetails={setSelectedProject} />
                                </Grid>
                            ))}
                        </Grid>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 1 }}>
                            <Button
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage(p => p - 1)}
                                size="small"
                            >
                                Previous
                            </Button>
                            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                                const page = i + 1;
                                return (
                                    <Button
                                        key={page}
                                        variant={currentPage === page ? 'contained' : 'outlined'}
                                        onClick={() => setCurrentPage(page)}
                                        size="small"
                                        sx={{ minWidth: 40 }}
                                    >
                                        {page}
                                    </Button>
                                );
                            })}
                            {totalPages > 5 && <Typography sx={{ px: 1, alignSelf: 'center' }}>...</Typography>}
                            <Button
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage(p => p + 1)}
                                size="small"
                            >
                                Next
                            </Button>
                        </Box>
                    )}
                </Box>
            </Box>

            {/* Project Details Modal */}
            <ProjectDetailsModal
                project={selectedProject}
                open={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </Box >
    );
};

const ProjectCard = ({ project, viewMode, onViewDetails }) => {
    const isGrid = viewMode === 'grid';

    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: isGrid ? 'column' : 'row',
                transition: 'all 0.3s',
                position: 'relative',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 4,
                }
            }}
        >
            {project.featured && (
                <Chip
                    icon={<StarIcon />}
                    label="Featured"
                    color="warning"
                    size="small"
                    sx={{ position: 'absolute', top: 8, right: 8, zIndex: 1 }}
                />
            )}

            <CardMedia
                component="img"
                sx={{
                    width: isGrid ? '100%' : 200,
                    height: isGrid ? 180 : 'auto',
                    objectFit: 'cover'
                }}
                image={project.imageUrl || 'https://via.placeholder.com/400x300?text=No+Image'}
                alt={project.title}
            />

            <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <CardContent sx={{ flex: 1 }}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: '#222', fontSize: '16px' }}>
                        {project.title}
                    </Typography>
                    <Chip label={project.category} size="small" color="primary" sx={{ mb: 1 }} />
                    <Typography variant="caption" display="block" color="text.secondary" gutterBottom sx={{ fontSize: '11px' }}>
                        {project.year} • {project.technologies.slice(0, 3).join(', ')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: isGrid ? 3 : 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        fontSize: '13px',
                        lineHeight: 1.5
                    }}>
                        {project.description}
                    </Typography>

                    {project.metrics && (
                        <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                            {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                                <Chip
                                    key={key}
                                    label={value}
                                    size="small"
                                    variant="outlined"
                                    sx={{ fontSize: '10px', height: 22 }}
                                />
                            ))}
                        </Box>
                    )}
                </CardContent>

                <CardActions sx={{ px: 2, pb: 2 }}>
                    {project.demoUrl && (
                        <Button size="small" startIcon={<LaunchIcon fontSize="small" />} href={project.demoUrl} target="_blank">
                            Demo
                        </Button>
                    )}
                    {project.githubUrl && (
                        <Button size="small" startIcon={<CodeIcon fontSize="small" />} href={project.githubUrl} target="_blank">
                            Code
                        </Button>
                    )}
                    <Button size="small" onClick={() => onViewDetails(project)} color="primary" variant="contained">
                        Details
                    </Button>
                </CardActions>
            </Box>
        </Card>
    );
};

// Media Carousel Component
const MediaCarousel = ({ screenshots, videoUrl, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Combine screenshots and video into media array
    const mediaItems = [
        ...screenshots.map(url => ({ type: 'image', url })),
        ...(videoUrl ? [{ type: 'video', url: videoUrl }] : [])
    ];

    // Auto-play carousel every 5 seconds
    useEffect(() => {
        if (!isAutoPlaying || mediaItems.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, mediaItems.length]);

    const handlePrev = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
    };

    const handleNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
    };

    if (mediaItems.length === 0) return null;

    const currentMedia = mediaItems[currentIndex];

    return (
        <Box sx={{ position: 'relative', mb: 3 }}>
            <Box sx={{
                position: 'relative',
                height: 400,
                borderRadius: 2,
                overflow: 'hidden',
                bgcolor: 'grey.900'
            }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                        style={{ height: '100%' }}
                    >
                        {currentMedia.type === 'image' ? (
                            <CardMedia
                                component="img"
                                height="400"
                                image={currentMedia.url}
                                alt={`${title} - Screenshot ${currentIndex + 1}`}
                                sx={{
                                    objectFit: 'contain',
                                    bgcolor: 'grey.900'
                                }}
                            />
                        ) : (
                            <Box sx={{
                                position: 'relative',
                                paddingBottom: '56.25%',
                                height: 0,
                                overflow: 'hidden',
                                bgcolor: 'grey.900'
                            }}>
                                {currentMedia.url ? (
                                    <iframe
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            border: 0
                                        }}
                                        src={currentMedia.url}
                                        title={`${title} - Demo Video`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                ) : (
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '400px',
                                        color: 'grey.500'
                                    }}>
                                        <Typography variant="body2">Video will be available soon</Typography>
                                    </Box>
                                )}
                            </Box>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                {mediaItems.length > 1 && (
                    <>
                        <IconButton
                            onClick={handlePrev}
                            sx={{
                                position: 'absolute',
                                left: 10,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                bgcolor: 'rgba(0, 0, 0, 0.6)',
                                color: 'white',
                                '&:hover': {
                                    bgcolor: 'rgba(0, 0, 0, 0.8)',
                                }
                            }}
                        >
                            <ArrowBackIosNewIcon />
                        </IconButton>
                        <IconButton
                            onClick={handleNext}
                            sx={{
                                position: 'absolute',
                                right: 10,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                bgcolor: 'rgba(0, 0, 0, 0.6)',
                                color: 'white',
                                '&:hover': {
                                    bgcolor: 'rgba(0, 0, 0, 0.8)',
                                }
                            }}
                        >
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </>
                )}
            </Box>

            {/* Indicators */}
            {mediaItems.length > 1 && (
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 1,
                    mt: 2
                }}>
                    {mediaItems.map((item, index) => (
                        <Box
                            key={index}
                            onClick={() => {
                                setIsAutoPlaying(false);
                                setCurrentIndex(index);
                            }}
                            sx={{
                                width: 10,
                                height: 10,
                                borderRadius: '50%',
                                bgcolor: index === currentIndex ? 'primary.main' : 'grey.400',
                                cursor: 'pointer',
                                transition: 'all 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.2)',
                                }
                            }}
                        />
                    ))}
                </Box>
            )}

            {/* Media Type Indicator */}
            <Box sx={{
                position: 'absolute',
                bottom: 50,
                right: 20,
                bgcolor: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                px: 2,
                py: 0.5,
                borderRadius: 1
            }}>
                <Typography variant="caption">
                    {currentMedia.type === 'image' ? 'Screenshot' : 'Video'} {currentIndex + 1}/{mediaItems.length}
                </Typography>
            </Box>
        </Box>
    );
};

const ProjectDetailsModal = ({ project, open, onClose }) => {
    if (!project) return null;

    const testimonial = project.testimonialId ?
        testimonials.find(t => t.id === project.testimonialId) : null;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            PaperProps={{ sx: { maxHeight: '90vh' } }}
        >
            <DialogTitle sx={{ bgcolor: '#E95420', color: 'white', position: 'relative' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{project.title}</Typography>
                {project.featured && (
                    <Chip
                        icon={<StarIcon />}
                        label="Featured"
                        size="small"
                        sx={{ position: 'absolute', top: 16, right: 16 }}
                    />
                )}
            </DialogTitle>

            <DialogContent dividers sx={{ p: 3 }}>
                {/* Media Carousel */}
                <MediaCarousel
                    screenshots={project.screenshots || [project.imageUrl]}
                    videoUrl={project.videoUrl}
                    title={project.title}
                />

                {project.clientImpact && (
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: '#E95420' }}>
                            💼 Client Impact Story
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Typography variant="subtitle2" fontWeight="bold" sx={{ color: '#D32F2F' }}>❌ Problem:</Typography>
                                <Typography variant="body2" sx={{ color: '#555', fontSize: '13px' }}>{project.clientImpact.problem}</Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="subtitle2" fontWeight="bold" sx={{ color: '#388E3C' }}>✅ Solution:</Typography>
                                <Typography variant="body2" sx={{ color: '#555', fontSize: '13px' }}>{project.clientImpact.solution}</Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="subtitle2" fontWeight="bold" sx={{ color: '#1976D2' }}>📈 Results:</Typography>
                                <Typography variant="body2" sx={{ color: '#555', fontSize: '13px' }}>{project.clientImpact.results}</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                )}

                <Divider sx={{ my: 3 }} />

                {project.metrics && (
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: '#333' }}>📊 Key Metrics</Typography>
                        <Grid container spacing={2}>
                            {Object.entries(project.metrics).map(([key, value]) => (
                                <Grid item xs={6} md={4} key={key}>
                                    <Card variant="outlined" sx={{ p: 2, textAlign: 'center', bgcolor: '#FAFAFA' }}>
                                        <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>{value}</Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            {key.charAt(0).toUpperCase() + key.slice(1)}
                                        </Typography>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                )}

                <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: '#333' }}>🔧 Technologies Used</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.map(tech => (
                            <Chip key={tech} label={tech} color="primary" variant="outlined" size="small" />
                        ))}
                    </Box>
                </Box>

                {testimonial && (
                    <Box sx={{ mb: 2, p: 2, bgcolor: '#FFF3E0', borderRadius: 2, borderLeft: '4px solid #FF9800' }}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: '#E65100' }}>⭐ Client Testimonial</Typography>
                        <Typography variant="body2" fontStyle="italic" gutterBottom sx={{ color: '#555' }}>
                            "{testimonial.text}"
                        </Typography>
                        <Typography variant="caption" fontWeight="bold" sx={{ color: '#777' }}>
                            — {testimonial.name}, {testimonial.role} at {testimonial.company}
                        </Typography>
                    </Box>
                )}
            </DialogContent>

            <DialogActions sx={{ p: 2 }}>
                {project.videoUrl && (
                    <Button href={project.videoUrl} target="_blank">Video Demo</Button>
                )}
                {project.githubUrl && (
                    <Button startIcon={<CodeIcon />} href={project.githubUrl} target="_blank">
                        GitHub
                    </Button>
                )}
                {project.demoUrl && (
                    <Button variant="contained" startIcon={<LaunchIcon />} href={project.demoUrl} target="_blank">
                        Live Demo
                    </Button>
                )}
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AdvancedProjects;

import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Pagination
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '../../data/projects';

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
    <Box sx={{ position: 'relative', mb: 2 }}>
      <Box sx={{
        position: 'relative',
        height: 400,
        borderRadius: 1,
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

const ProjectViewer = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [page, setPage] = useState(1);
  const projectsPerPage = 4;

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // Calculate pagination
  const indexOfLastProject = page * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const pageCount = Math.ceil(projects.length / projectsPerPage);

  return (
    <Box sx={{ height: '100%', p: 2, overflow: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        My Projects
      </Typography>

      <Grid container spacing={2}>
        {currentProjects.map((project) => (
          <Grid item xs={12} sm={6} key={project.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: 3
                }
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={project.imageUrl}
                alt={project.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, height: 80, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {project.description.substring(0, 150)}...
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Chip key={index} label={tech} size="small" />
                  ))}
                  {project.technologies.length > 3 && (
                    <Chip label={`+${project.technologies.length - 3}`} size="small" variant="outlined" />
                  )}
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleProjectClick(project)}
                >
                  Learn More
                </Button>
                <Button
                  size="small"
                  color="primary"
                  startIcon={<LaunchIcon />}
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Pagination
          count={pageCount}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>

      {/* Project Details Dialog */}
      <Dialog
        open={Boolean(selectedProject)}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        {selectedProject && (
          <>
            <DialogTitle>
              {selectedProject.title}
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{ position: 'absolute', right: 8, top: 8 }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              {/* Media Carousel */}
              <MediaCarousel
                screenshots={selectedProject.screenshots || [selectedProject.imageUrl]}
                videoUrl={selectedProject.videoUrl}
                title={selectedProject.title}
              />

              <Typography variant="body1" paragraph>
                {selectedProject.description}
              </Typography>

              <Typography variant="h6" gutterBottom>
                Technologies Used
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 3 }}>
                {selectedProject.technologies.map((tech, index) => (
                  <Chip key={index} label={tech} />
                ))}
              </Box>

              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<LaunchIcon />}
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </Button>
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default ProjectViewer;

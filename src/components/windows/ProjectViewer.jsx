import { useState } from 'react';
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
import projects from '../../data/projects';

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
              <Box sx={{ mb: 2 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  sx={{ borderRadius: 1 }}
                />
              </Box>
              
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
              
              {selectedProject.videoUrl && (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Project Demo
                  </Typography>
                  <Box sx={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                    <iframe
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                      src={selectedProject.videoUrl}
                      title="Project Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </Box>
                </Box>
              )}
              
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

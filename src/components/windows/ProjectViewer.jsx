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
  Tabs,
  Tab
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import projects from '../../data/projects';

const ProjectViewer = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setDialogOpen(true);
    setTabValue(0);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ height: '100%', overflow: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        My Projects
      </Typography>
      
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4
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
                <Typography gutterBottom variant="h6" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {project.description.substring(0, 100)}...
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Chip key={index} label={tech} size="small" />
                  ))}
                  {project.technologies.length > 3 && (
                    <Chip label={`+${project.technologies.length - 3}`} size="small" />
                  )}
                </Box>
              </CardContent>
              <CardActions>
                <Button 
                  size="small" 
                  onClick={() => handleProjectClick(project)}
                  color="primary"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        {selectedProject && (
          <>
            <DialogTitle>
              {selectedProject.title}
              <IconButton
                aria-label="close"
                onClick={handleCloseDialog}
                sx={{ position: 'absolute', right: 8, top: 8 }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
                <Tabs value={tabValue} onChange={handleTabChange}>
                  <Tab label="Overview" />
                  <Tab label="Demo" />
                  <Tab label="Video" />
                </Tabs>
              </Box>
              
              {tabValue === 0 && (
                <Box>
                  <Box 
                    component="img" 
                    src={selectedProject.imageUrl} 
                    alt={selectedProject.title}
                    sx={{ 
                      width: '100%', 
                      height: 300, 
                      objectFit: 'cover',
                      borderRadius: 1,
                      mb: 2
                    }}
                  />
                  <Typography variant="body1" paragraph>
                    {selectedProject.description}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Technologies Used
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                    {selectedProject.technologies.map((tech, index) => (
                      <Chip key={index} label={tech} />
                    ))}
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button 
                      variant="contained" 
                      startIcon={<LaunchIcon />}
                      href={selectedProject.demoUrl}
                      target="_blank"
                    >
                      Live Demo
                    </Button>
                    <Button 
                      variant="outlined" 
                      startIcon={<GitHubIcon />}
                      href={selectedProject.githubUrl}
                      target="_blank"
                    >
                      GitHub
                    </Button>
                  </Box>
                </Box>
              )}
              
              {tabValue === 1 && (
                <Box sx={{ height: 500 }}>
                  <iframe
                    src={selectedProject.demoUrl}
                    title={`${selectedProject.title} Demo`}
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                  />
                </Box>
              )}
              
              {tabValue === 2 && (
                <Box sx={{ height: 500 }}>
                  <iframe
                    src={selectedProject.videoUrl}
                    title={`${selectedProject.title} Video`}
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                    allowFullScreen
                  />
                </Box>
              )}
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default ProjectViewer;

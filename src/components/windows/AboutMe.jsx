import { 
    Box, 
    Typography, 
    Avatar, 
    Divider, 
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText,
    Paper,
    Grid,
    Chip
  } from '@mui/material';
  import CodeIcon from '@mui/icons-material/Code';
  import SchoolIcon from '@mui/icons-material/School';
  import WorkIcon from '@mui/icons-material/Work';
  import InterestsIcon from '@mui/icons-material/Interests';
  
  const AboutMe = () => {
    // Replace with your information
    const personalInfo = {
      name: "Your Name",
      title: "Full Stack Developer",
      avatar: "https://via.placeholder.com/150",
      bio: "I'm a passionate developer with expertise in building web applications using modern technologies. I love solving complex problems and creating intuitive user experiences.",
      skills: [
        "JavaScript", "React", "Node.js", "Express", "MongoDB", "Python", 
        "HTML/CSS", "Material UI", "Git", "Docker", "AWS"
      ],
      education: [
        {
          degree: "Bachelor of Science in Computer Science",
          institution: "University Name",
          year: "2018 - 2022"
        }
      ],
      experience: [
        {
          position: "Full Stack Developer",
          company: "Company Name",
          period: "2022 - Present",
          description: "Developing and maintaining web applications using React, Node.js, and MongoDB."
        },
        {
          position: "Web Developer Intern",
          company: "Internship Company",
          period: "Summer 2021",
          description: "Assisted in developing front-end components and implementing responsive designs."
        }
      ],
      interests: ["Open Source", "UI/UX Design", "Machine Learning", "Hiking", "Photography"]
    };
  
    return (
      <Box sx={{ height: '100%', overflow: 'auto' }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', mb: 4 }}>
          <Avatar 
            src={personalInfo.avatar} 
            alt={personalInfo.name}
            sx={{ 
              width: 150, 
              height: 150, 
              mr: { xs: 0, sm: 4 },
              mb: { xs: 2, sm: 0 }
            }}
          />
          <Box>
            <Typography variant="h4" gutterBottom>
              {personalInfo.name}
            </Typography>
            <Typography variant="h6" color="primary" gutterBottom>
              {personalInfo.title}
            </Typography>
            <Typography variant="body1">
              {personalInfo.bio}
            </Typography>
          </Box>
        </Box>
        
        <Divider sx={{ my: 3 }} />
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 2, height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CodeIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Skills</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {personalInfo.skills.map((skill, index) => (
                  <Chip key={index} label={skill} />
                ))}
              </Box>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 2, height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <SchoolIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Education</Typography>
              </Box>
              <List disablePadding>
                {personalInfo.education.map((edu, index) => (
                  <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                    <ListItemText 
                      primary={edu.degree} 
                      secondary={
                        <>
                          <Typography component="span" variant="body2" color="text.primary">
                            {edu.institution}
                          </Typography>
                          {` — ${edu.year}`}
                        </>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          
          <Grid item xs={12}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <WorkIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Work Experience</Typography>
              </Box>
              <List disablePadding>
                {personalInfo.experience.map((exp, index) => (
                  <ListItem key={index} disablePadding sx={{ mb: 2 }}>
                    <ListItemText 
                      primary={
                        <Typography variant="subtitle1" fontWeight="medium">
                          {exp.position} at {exp.company}
                        </Typography>
                      } 
                      secondary={
                        <>
                          <Typography component="span" variant="body2" color="text.primary">
                            {exp.period}
                          </Typography>
                          <Typography variant="body2" sx={{ mt: 0.5 }}>
                            {exp.description}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          
          <Grid item xs={12}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <InterestsIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Interests</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {personalInfo.interests.map((interest, index) => (
                  <Chip key={index} label={interest} variant="outlined" />
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    );
  };
  
  export default AboutMe;
  
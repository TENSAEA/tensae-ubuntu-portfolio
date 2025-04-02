import { 
  Box, 
  Typography, 
  Divider, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Chip,
  Avatar,
  Grid,
  Paper,
  LinearProgress,
  Link
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import LanguageIcon from '@mui/icons-material/Language';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const AboutMe = () => {
  const skills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React.js', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 85 },
    { name: 'PHP', level: 80 },
    { name: 'Laravel', level: 75 },
    { name: 'Python', level: 75 },
    { name: 'MongoDB', level: 85 },
    { name: 'MySQL', level: 80 },
    { name: 'GraphQL', level: 85 },
    { name: 'Docker', level: 70 },
    { name: 'AWS', level: 65 },
    { name: 'Linux/Ubuntu', level: 90 },
  ];
  
  return (
    <Box sx={{ height: '100%', overflow: 'auto', p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
      <Avatar
          alt="Tensae Aschalew"
          src="/images/Tensu.jpg"  // Updated to use static public path
          sx={{ width: 100, height: 100, mr: 3 }}
        />

        <Box>
          <Typography variant="h4" gutterBottom>
            Tensae Aschalew
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Software Engineer
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
            <Chip label="JavaScript" color="primary" size="small" />
            <Chip label="React" color="primary" size="small" />
            <Chip label="Node.js" color="primary" size="small" />
            <Chip label="GraphQL" color="primary" size="small" />
            <Chip label="PHP" color="primary" size="small" />
          </Box>
        </Box>
      </Box>
      
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
        <Link href="mailto:tensaeaschalew27@gmail.com" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
          <EmailIcon fontSize="small" sx={{ mr: 0.5 }} />
          tensaeaschalew27@gmail.com
        </Link>
        <Link href="https://github.com/TENSAEA" target="_blank" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
          <GitHubIcon fontSize="small" sx={{ mr: 0.5 }} />
          github.com/TENSAEA
        </Link>
        <Link href="https://www.linkedin.com/in/tensae-aschalew-339368239" target="_blank" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
          <LinkedInIcon fontSize="small" sx={{ mr: 0.5 }} />
          LinkedIn
        </Link>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <PhoneIcon fontSize="small" sx={{ mr: 0.5 }} />
          +251-984-04-9121
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LocationOnIcon fontSize="small" sx={{ mr: 0.5 }} />
          Addis Ababa, Ethiopia
        </Box>
      </Box>
      
      <Typography variant="body1" paragraph>
        I'm an experienced software engineer with a proven track record of remote work, leading distributed teams
        across time zones. I design and build innovative platforms, contribute to open-source projects, and enhance
        efficiency for U.S. clients using scalable architectures and APIs, driving collaboration, strategic growth, and
        entrepreneurial innovation.
      </Typography>
      
      <Typography variant="body1" paragraph>
        Ubuntu is an ancient African word meaning "humanity to others". I have used Ubuntu for more than 3 years and 
        have tried more than 5 Linux distributions. My friends also call me Ubuntu since I love it so much!
      </Typography>
      
      <Divider sx={{ my: 3 }} />
      
      <Typography variant="h5" gutterBottom>
        Skills
      </Typography>
      
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {skills.map((skill) => (
          <Grid item xs={12} sm={6} md={4} key={skill.name}>
            <Box sx={{ mb: 1 }}>
              <Typography variant="body2" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </Typography>
              <LinearProgress 
                variant="determinate" 
                value={skill.level} 
                sx={{ height: 8, borderRadius: 5 }} 
              />
            </Box>
          </Grid>
        ))}
      </Grid>
      
      <Divider sx={{ my: 3 }} />
      
      <Typography variant="h5" gutterBottom>
        Work Experience
      </Typography>
      
      <List>
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText
            primary="Founder and CEO | HorizoNova Startup"
            secondary={
              <>
                <Typography component="span" variant="body2" color="text.primary">
                  Remote • Nov 2024 - Present
                </Typography>
                <Typography variant="body2" component="ul" sx={{ pl: 2 }}>
                  <li>Founded and lead HorizoNova, a job service assistant startup, as CEO, driving vision and strategy.</li>
                  <li>Manage a team of employees, delivering software solutions to U.S clients.</li>
                  <li>Oversee development of innovative tools using React, Node.js, JavaScript, PHP and GraphQL.</li>
                  <li>Direct product roadmap, ensuring scalable, high-quality platforms for job service optimization.</li>
                  <li>Combine strategic leadership with hands-on expertise in building robust, client-focused systems.</li>
                  <li>Foster a collaborative team environment to meet growing client demands in the U.S. market.</li>
                  <li>Design and implement AI and ML-driven solutions to automate processes, enhancing efficiency and scalability through data-driven decision-making and advanced algorithms.</li>
                </Typography>
              </>
            }
          />
        </ListItem>
        
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText
            primary="Software Engineer | Right Tech PLC"
            secondary={
              <>
                <Typography component="span" variant="body2" color="text.primary">
                  Addis Ababa • Jan 2024 - Mar 2025
                </Typography>
                <Typography variant="body2" component="ul" sx={{ pl: 2 }}>
                  <li>Developed scalable web apps with React, Node.js, JavaScript, and Python for enterprise solutions.</li>
                  <li>Designed GraphQL APIs using PHP, Node.js, and Python for optimized data workflows.</li>
                  <li>Customized WordPress with plugins and themes for client and community needs.</li>
                  <li>Engineered performant systems with Ruby, Java, and Python for industrial use.</li>
                  <li>Built internal tools for steel factories, hotels, and buildings using Debian Linux and Ubuntu.</li>
                  <li>Collaborated globally via GitHub, managing code, reviews, and contributions.</li>
                  <li>Deployed apps on Debian Linux and Ubuntu, ensuring stability and security.</li>
                  <li>Integrated third-party APIs e.g., authentication, payments for enhanced functionality.</li>
                  <li>Worked with distributed teams on microservices, using GitHub for coordination.</li>
                  <li>Wrote resilient code, adhering to open-source standards and resolving full-stack issues.</li>
                </Typography>
              </>
            }
          />
        </ListItem>
        
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText
            primary="Software Developer | KoderLab"
            secondary={
              <>
                <Typography component="span" variant="body2" color="text.primary">
                  Remote • Addis Ababa • Dec 2022 - Dec 2023
                </Typography>
                <Typography variant="body2" component="ul" sx={{ pl: 2 }}>
                  <li>Built educational tools with React, Node.js, JavaScript, and Python for high school coding students.</li>
                  <li>Designed GraphQL APIs and backend logic using Node.js and Python for dynamic platforms.</li>
                  <li>Created responsive interfaces with CSS frameworks e.g., Tailwind CSS, Bootstrap.</li>
                  <li>Developed learning modules with PHP, WordPress, and Ruby for student engagement.</li>
                  <li>Engineered backend systems in Java and Python for gamified learning and feedback.</li>
                  <li>Managed internal tools on Ubuntu for lesson and progress tracking.</li>
                  <li>Collaborated via GitHub for code maintenance and team alignment.</li>
                  <li>Optimized full-stack apps for better performance and learning outcomes.</li>
                </Typography>
              </>
            }
          />
        </ListItem>
        
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText
            primary="Coding Instructor | Code JIKA"
            secondary={
              <>
                <Typography component="span" variant="body2" color="text.primary">
                  Remote • Johannesburg • Jan 2023 - Oct 2023
                </Typography>
                <Typography variant="body2" component="ul" sx={{ pl: 2 }}>
                  <li>Delivered engaging remote instruction on HTML, CSS, JavaScript, and React, empowering students to build modern, responsive web applications.</li>
                  <li>Designed interactive, hands-on coding curricula for virtual classrooms, enhancing learner comprehension and skill mastery.</li>
                  <li>Mentored students via video calls and online platforms, providing personalized feedback on projects like dynamic websites and single-page apps.</li>
                  <li>Created reusable React component libraries and real-world coding exercises, simulating remote development workflows.</li>
                  <li>Leveraged tools like Zoom, Slack, and GitHub to facilitate seamless remote collaboration and code reviews.</li>
                  <li>Adapted teaching methods to diverse skill levels, boosting student confidence and proficiency in front-end technologies.</li>
                  <li>Streamlined lesson delivery with pre-recorded tutorials and live Q&A sessions, optimizing remote learning efficiency.</li>
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>
      
      <Divider sx={{ my: 3 }} />
      
      <Typography variant="h5" gutterBottom>
        Education
      </Typography>
      
      <List>
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText
            primary="Bachelor of Science in Computer Information Systems"
            secondary={
              <>
                <Typography component="span" variant="body2" color="text.primary">
                  Addis Ababa University • Jul 2020 - Jul 2024
                </Typography>
                <Typography variant="body2">
                  GPA: 3.59
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>
      
      <Divider sx={{ my: 3 }} />
      
      <Typography variant="h5" gutterBottom>
        Core Skills
      </Typography>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" gutterBottom>Languages:</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'C#', 'Java', 'Python', 'Go', 'PHP', 'C/C++'].map(skill => (
            <Chip key={skill} label={skill} size="small" />
          ))}
        </Box>
      </Box>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" gutterBottom>Frontend:</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {['React.js', 'Next.js', 'Angular', 'Vue.js', 'Material UI', 'Tailwind CSS'].map(skill => (
            <Chip key={skill} label={skill} size="small" />
          ))}
        </Box>
      </Box>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" gutterBottom>Backend:</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {['Node.js', 'Express.js', 'Nest.js', '.NET Core', 'Blazor', 'Spring Boot', 'Django', 'Flask', 'FastAPI', 'Gin', 'Laravel'].map(skill => (
            <Chip key={skill} label={skill} size="small" />
          ))}
        </Box>
      </Box>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" gutterBottom>Databases:</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite', 'Oracle', 'AWS DynamoDB', 'Firestore'].map(skill => (
            <Chip key={skill} label={skill} size="small" />
          ))}
        </Box>
      </Box>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" gutterBottom>Cloud & DevOps:</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {['AWS', 'GCP', 'Azure', 'Firebase', 'Docker', 'Kubernetes', 'Jenkins'].map(skill => (
            <Chip key={skill} label={skill} size="small" />
          ))}
        </Box>
      </Box>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" gutterBottom>Other:</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {['GraphQL', 'React Query', 'Redux', 'Ubuntu', 'Debian', 'Linux', 'Webpack', 'WebSocket', 'Redis', 'ElasticSearch'].map(skill => (
            <Chip key={skill} label={skill} size="small" />
          ))}
        </Box>
      </Box>
      
      <Divider sx={{ my: 3 }} />
      
      <Typography variant="h5" gutterBottom>
        Awards & Achievements
      </Typography>
      
      <List>
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <EmojiEventsIcon />
          </ListItemIcon>
          <ListItemText
            primary="Scholarship"
            secondary={
              <>
                <Typography component="span" variant="body2" color="text.primary">
                  Addis Ababa University • Nov 2024
                </Typography>
                <Typography variant="body2">
                  In recognition of my academic achievements, Addis Ababa University has awarded me a scholarship to pursue a master's degree in Artificial Intelligence.
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>
      
      <Divider sx={{ my: 3 }} />
      
      <Typography variant="h5" gutterBottom>
        Extra Curricular
      </Typography>
      
      <List>
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText
            primary="Technology Club President"
            secondary={
              <>
                <Typography component="span" variant="body2" color="text.primary">
                  Addis Ababa University
                </Typography>
                <Typography variant="body2">
                  In addition to my education at Addis Ababa University, I served as the leader of the Technology Club, where I organized and led boot camps, training sessions, and various international activities.
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>
      
      <Divider sx={{ my: 3 }} />
      
      <Typography variant="h5" gutterBottom>
        Certifications
      </Typography>
      
      <List>
        <ListItem>
          <ListItemIcon>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText
            primary="AWS Certified Solutions Architect Associate"
            secondary="Amazon Web Services (AWS) - In Progress"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText
            primary="MERN Stack Bootcamp Certified"
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default AboutMe;


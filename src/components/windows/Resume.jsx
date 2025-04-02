import { Box, Typography, Divider, Paper, Grid, Chip, Link, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const Resume = () => {
  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1o5noe_Ni4T5E2Gq10ZGSh3fpW0NiwVnK/view?usp=sharing', '_blank');
  };

  return (
    <Box sx={{ height: '100%', overflow: 'auto', p: 3 }}>
      <Paper elevation={3} sx={{ p: 3, maxWidth: 900, mx: 'auto' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h4" gutterBottom>
            TENSAE ASCHALEW
          </Typography>
          <Button 
            variant="contained" 
            startIcon={<DownloadIcon />}
            onClick={handleDownload}
          >
            Download PDF
          </Button>
        </Box>
        
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Software Engineer
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
          <Link href="mailto:tensaeaschalew27@gmail.com" underline="hover">tensaeaschalew27@gmail.com</Link>
          <Link href="https://github.com/TENSAEA" target="_blank" underline="hover">github.com/TENSAEA</Link>
          <Link href="https://www.linkedin.com/in/tensae-aschalew-339368239" target="_blank" underline="hover">LinkedIn</Link>
          <Link href="https://tensae-ubuntu-portfolio.vercel.app" target="_blank" underline="hover">Portfolio</Link>
          <Typography>Addis Ababa, 1000, Ethiopia | +251-984-04-9121</Typography>
        </Box>
        
        <Typography variant="body1" paragraph>
          I'm an experienced software engineer with a proven track record of remote work, leading distributed teams
          across time zones. I design and build innovative platforms, contribute to open-source projects, and enhance
          efficiency for U.S. clients using scalable architectures and APIs, driving collaboration, strategic growth, and
          entrepreneurial innovation.
        </Typography>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="h5" gutterBottom>
          Work Experience
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="h6">Founder and CEO | HorizoNova Startup</Typography>
            <Typography variant="body2" color="text.secondary">Nov 2024 - Present</Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" gutterBottom>Remote</Typography>
          <Typography variant="body1" component="ul" sx={{ pl: 2 }}>
            <li>Founded and lead HorizoNova, a job service assistant startup, as CEO, driving vision and strategy.</li>
            <li>Manage a team of employees, delivering software solutions to U.S clients.</li>
            <li>Oversee development of innovative tools using React, Node.js, JavaScript, PHP and GraphQL.</li>
            <li>Direct product roadmap, ensuring scalable, high-quality platforms for job service optimization.</li>
            <li>Combine strategic leadership with hands-on expertise in building robust, client-focused systems.</li>
            <li>Foster a collaborative team environment to meet growing client demands in the U.S. market.</li>
            <li>Design and implement AI and ML-driven solutions to automate processes, enhancing efficiency and scalability through data-driven decision-making and advanced algorithms.</li>
          </Typography>
        </Box>
        
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="h6">Software Engineer | Right Tech PLC</Typography>
            <Typography variant="body2" color="text.secondary">Jan 2024 - Mar 2025</Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" gutterBottom>Addis Ababa</Typography>
          <Typography variant="body1" component="ul" sx={{ pl: 2 }}>
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
        </Box>
        
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="h6">Software Developer | KoderLab</Typography>
            <Typography variant="body2" color="text.secondary">Dec 2022 - Dec 2023</Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" gutterBottom>Remote | Addis Ababa</Typography>
          <Typography variant="body1" component="ul" sx={{ pl: 2 }}>
            <li>Built educational tools with React, Node.js, JavaScript, and Python for high school coding students.</li>
            <li>Designed GraphQL APIs and backend logic using Node.js and Python for dynamic platforms.</li>
            <li>Created responsive interfaces with CSS frameworks e.g., Tailwind CSS, Bootstrap.</li>
            <li>Developed learning modules with PHP, WordPress, and Ruby for student engagement.</li>
            <li>Engineered backend systems in Java and Python for gamified learning and feedback.</li>
            <li>Managed internal tools on Ubuntu for lesson and progress tracking.</li>
            <li>Collaborated via GitHub for code maintenance and team alignment.</li>
            <li>Optimized full-stack apps for better performance and learning outcomes.</li>
          </Typography>
        </Box>
        
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="h6">Coding Instructor | Code JIKA</Typography>
            <Typography variant="body2" color="text.secondary">Jan 2023 - Oct 2023</Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" gutterBottom>Remote | Johannesburg</Typography>
          <Typography variant="body1" component="ul" sx={{ pl: 2 }}>
            <li>Delivered engaging remote instruction on HTML, CSS, JavaScript, and React, empowering students to build modern, responsive web applications.</li>
            <li>Designed interactive, hands-on coding curricula for virtual classrooms, enhancing learner comprehension and skill mastery.</li>
            <li>Mentored students via video calls and online platforms, providing personalized feedback on projects like dynamic websites and single-page apps.</li>
            <li>Created reusable React component libraries and real-world coding exercises, simulating remote development workflows.</li>
            <li>Leveraged tools like Zoom, Slack, and GitHub to facilitate seamless remote collaboration and code reviews.</li>
            <li>Adapted teaching methods to diverse skill levels, boosting student confidence and proficiency in front-end technologies.</li>
            <li>Streamlined lesson delivery with pre-recorded tutorials and live Q&A sessions, optimizing remote learning efficiency.</li>
          </Typography>
        </Box>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="h5" gutterBottom>
          Core Skills
        </Typography>
        
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" gutterBottom>Languages:</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'C#', 'Java', 'Python', 'Go', 'PHP', 'C/C++'].map(skill => (
                <Chip key={skill} label={skill} size="small" sx={{ mb: 1 }} />
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" gutterBottom>Frontend:</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {['React.js', 'Next.js', 'Angular', 'Vue.js', 'Material UI', 'Tailwind CSS'].map(skill => (
                <Chip key={skill} label={skill} size="small" sx={{ mb: 1 }} />
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" gutterBottom>Backend:</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {['Node.js', 'Express.js', 'Nest.js', '.NET Core', 'Blazor', 'Spring Boot', 'Django', 'Flask', 'FastAPI', 'Gin', 'Laravel'].map(skill => (
                <Chip key={skill} label={skill} size="small" sx={{ mb: 1 }} />
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" gutterBottom>Databases:</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite', 'Oracle', 'AWS DynamoDB', 'Firestore'].map(skill => (
                <Chip key={skill} label={skill} size="small" sx={{ mb: 1 }} />
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" gutterBottom>Cloud & DevOps:</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {['AWS', 'GCP', 'Azure', 'Firebase', 'Docker', 'Kubernetes', 'Jenkins'].map(skill => (
                <Chip key={skill} label={skill} size="small" sx={{ mb: 1 }} />
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" gutterBottom>Other:</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {['GraphQL', 'React Query', 'Redux', 'Ubuntu', 'Debian', 'Linux', 'Webpack', 'WebSocket', 'Redis', 'ElasticSearch'].map(skill => (
                <Chip key={skill} label={skill} size="small" sx={{ mb: 1 }} />
              ))}
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="h5" gutterBottom>
          Education
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="h6">Bachelor of Science in Computer Information Systems</Typography>
            <Typography variant="body2" color="text.secondary">Jul 2020 - Jul 2024</Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" gutterBottom>Addis Ababa University</Typography>
          <Typography variant="body2">GPA: 3.59</Typography>
        </Box>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="h5" gutterBottom>
          Awards
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="h6">Scholarship</Typography>
            <Typography variant="body2" color="text.secondary">Nov 2024</Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" gutterBottom>Addis Ababa University</Typography>
          <Typography variant="body1">
            In recognition of my academic achievements, Addis Ababa University has awarded me a scholarship to pursue a master's degree in Artificial Intelligence.
          </Typography>
        </Box>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="h5" gutterBottom>
          Extra Curricular
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="h6">Technology Club President</Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" gutterBottom>Addis Ababa University</Typography>
          <Typography variant="body1">
            In addition to my education at Addis Ababa University, I served as the leader of the Technology Club, where I organized and led boot camps, training sessions, and various international activities.
          </Typography>
        </Box>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="h5" gutterBottom>
          Certifications
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <Typography variant="body1" component="ul" sx={{ pl: 2 }}>
            <li>AWS Certified Solutions Architect Associate - Amazon Web Services (AWS)/in prog</li>
            <li>MERN Stack Bootcamp Certified</li>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Resume;

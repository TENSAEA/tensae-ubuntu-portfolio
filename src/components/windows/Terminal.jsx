import { useState, useEffect, useRef } from 'react';
import { Box, Typography, TextField, Paper } from '@mui/material';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    { text: 'Welcome to Ubuntu 22.04 LTS (GNU/Linux 5.15.0-58-generic x86_64)', type: 'system' },
    { text: 'Type "help" to see available commands.', type: 'system' },
    { text: 'tensae@ubuntu:~$ ', type: 'prompt' }
  ]);
  const outputEndRef = useRef(null);
  
  useEffect(() => {
    scrollToBottom();
  }, [output]);
  
  const scrollToBottom = () => {
    outputEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      processCommand();
    }
  };
  
  const addToOutput = (text, type = 'text') => {
    setOutput(prev => [...prev, { text, type }]);
  };
  
  const processCommand = () => {
    const command = input.trim();
    addToOutput(`tensae@ubuntu:~$ ${command}`, 'command');
    
    // Process the command
    switch (command.toLowerCase()) {
      case 'help':
        addToOutput('Available commands:', 'text');
        addToOutput('  help         - Show this help message', 'text');
        addToOutput('  clear        - Clear the terminal', 'text');
        addToOutput('  whoami       - Display user information', 'text');
        addToOutput('  date         - Display current date and time', 'text');
        addToOutput('  ls           - List directory contents', 'text');
        addToOutput('  pwd          - Print working directory', 'text');
        addToOutput('  echo [text]  - Display a line of text', 'text');
        addToOutput('  about        - About Tensae Aschalew', 'text');
        addToOutput('  skills       - List my technical skills', 'text');
        addToOutput('  projects     - List my projects', 'text');
        addToOutput('  contact      - Show contact information', 'text');
        break;
        
      case 'clear':
        setOutput([]);
        break;
        
      case 'whoami':
        addToOutput('Tensae Aschalew', 'text');
        addToOutput('Software Engineer', 'text');
        break;
        
      case 'date':
        addToOutput(new Date().toString(), 'text');
        break;
        
      case 'ls':
        addToOutput('Documents  Projects  README.txt', 'text');
        break;
        
      case 'pwd':
        addToOutput('/home/tensae', 'text');
        break;
        
      case 'about':
        addToOutput('Tensae Aschalew - Software Engineer', 'heading');
        addToOutput('I\'m an experienced software engineer with a proven track record of remote work, leading distributed teams across time zones. I design and build innovative platforms, contribute to open-source projects, and enhance efficiency for U.S. clients using scalable architectures and APIs, driving collaboration, strategic growth, and entrepreneurial innovation.', 'text');
        break;
        
      case 'skills':
        addToOutput('Technical Skills:', 'heading');
        addToOutput('Languages: HTML, CSS, JavaScript, TypeScript, C#, Java, Python, Go, PHP, C/C++', 'text');
        addToOutput('Frontend: React.js, Next.js, Angular, Vue.js, Material UI, Tailwind CSS', 'text');
        addToOutput('Backend: Node.js, Express.js, Nest.js, .NET Core, Blazor, Spring Boot, Django, Flask, FastAPI, Gin, Laravel', 'text');
        addToOutput('Databases: PostgreSQL, MongoDB, MySQL, SQLite, Oracle, AWS DynamoDB, Firestore', 'text');
        addToOutput('Cloud & DevOps: AWS, GCP, Azure, Firebase, Docker, Kubernetes, Jenkins', 'text');
        break;
        
      case 'projects':
        addToOutput('My Projects:', 'heading');
        addToOutput('1. Project 1 - React and Node.js application', 'text');
        addToOutput('2. Project 2 - React and Firebase web application', 'text');
        addToOutput('3. Project 3 - React Native mobile app', 'text');
        break;
        
      case 'contact':
        addToOutput('Contact Information:', 'heading');
        addToOutput('Email: tensaeaschalew27@gmail.com', 'text');
        addToOutput('GitHub: https://github.com/TENSAEA', 'link');
        addToOutput('LinkedIn: https://www.linkedin.com/in/tensae-aschalew-339368239', 'link');
        break;
        
      case '':
        // Do nothing for empty command
        break;
        
      default:
        if (command.startsWith('echo ')) {
          const text = command.substring(5);
          addToOutput(text, 'text');
        } else {
          addToOutput(`Command not found: ${command}. Type 'help' to see available commands.`, 'error');
        }
    }
    
    // Add new prompt
    if (command.toLowerCase() !== 'clear') {
      addToOutput('tensae@ubuntu:~$ ', 'prompt');
    }
    
    // Clear input
    setInput('');
  };
  
  return (
    <Box sx={{ 
      height: '100%', 
      bgcolor: 'black', 
      color: 'lightgreen', 
      p: 1, 
      fontFamily: 'monospace',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Paper 
        elevation={0}
        sx={{ 
          bgcolor: 'black', 
          color: 'lightgreen', 
          p: 1, 
          fontFamily: 'monospace',
          flexGrow: 1,
          overflow: 'auto',
          '&::-webkit-scrollbar': {
            width: '0.4em'
          },
          '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline: '1px solid slategrey'
          }
        }}
      >
        {output.map((line, index) => {
          if (line.type === 'prompt') {
            return (
              <Box key={index} sx={{ display: 'flex' }}>
                <Typography variant="body2" component="span" sx={{ color: 'lightgreen' }}>
                  {line.text}
                </Typography>
                {index === output.length - 1 && (
                  <TextField
                    variant="standard"
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    autoFocus
                    sx={{
                      flexGrow: 1,
                      '& .MuiInput-root': {
                        color: 'lightgreen',
                        fontFamily: 'monospace',
                        fontSize: '1rem',
                        '&:before, &:after': {
                          display: 'none'
                        }
                      },
                      '& .MuiInput-input': {
                        padding: 0
                      }
                    }}
                  />
                )}
              </Box>
            );
          } else {
            let color = 'lightgreen';
            let fontWeight = 'normal';
            
            switch (line.type) {
              case 'system':
                color = 'lightblue';
                break;
              case 'error':
                color = 'red';
                break;
              case 'heading':
                color = 'yellow';
                fontWeight = 'bold';
                break;
              case 'link':
                color = 'cyan';
                break;
              default:
                color = 'lightgreen';
            }
            
            return (
              <Typography 
                key={index} 
                variant="body2" 
                sx={{ 
                  color, 
                  fontWeight,
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word'
                }}
              >
                {line.text}
              </Typography>
            );
          }
        })}
        <div ref={outputEndRef} />
      </Paper>
    </Box>
  );
};

export default Terminal;

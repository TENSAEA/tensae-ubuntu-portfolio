import { useState, useEffect, useRef } from 'react';
import { Box, Typography, TextField, Paper } from '@mui/material';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    { text: '╔═══════════════════════════════════════════════════════════╗', type: 'border' },
    { text: '║     TENSAE ASCHALEW - PROFESSIONAL DEVELOPER TERMINAL     ║', type: 'border' },
    { text: '╚═══════════════════════════════════════════════════════════╝', type: 'border' },
    { text: '', type: 'system' },
    { text: '🚀 Welcome to Ubuntu 24.04 LTS (Tensae Edition)', type: 'system' },
    { text: '💼 Full-Stack Developer | MERN Stack Expert | 100% Job Success', type: 'system' },
    { text: '', type: 'system' },
    { text: '✨ Try commands: help, stats, hire-me, resume', type: 'success' },
    { text: 'tensae@portfolio:~$ ', type: 'prompt' }
  ]);
  const outputEndRef = useRef(null);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

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
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Auto-complete feature
      const commands = ['help', 'stats', 'hire-me', 'resume', 'skills', 'projects', 'achievements', 'contact'];
      const matches = commands.filter(cmd => cmd.startsWith(input.toLowerCase()));
      if (matches.length === 1) {
        setInput(matches[0]);
      }
    }
  };

  const addToOutput = (text, type = 'text') => {
    setOutput(prev => [...prev, { text, type }]);
  };

  const processCommand = () => {
    const command = input.trim();
    if (command) {
      setCommandHistory(prev => [...prev, command]);
      setHistoryIndex(-1);
    }
    addToOutput(`tensae@portfolio:~$ ${command}`, 'command');

    // Process the command
    switch (command.toLowerCase()) {
      case 'help':
        addToOutput('', 'text');
        addToOutput('━━━━━━━━━━━━━━ AVAILABLE COMMANDS ━━━━━━━━━━━━━━', 'heading');
        addToOutput('', 'text');
        addToOutput('  📊 stats           Show professional statistics', 'text');
        addToOutput('  💼 hire-me         Why you should hire me', 'text');
        addToOutput('  📄 resume          Download my resume', 'text');
        addToOutput('  🛠️  skills          Technical expertise', 'text');
        addToOutput('  🚀 projects        Production applications', 'text');
        addToOutput('  🏆 achievements    Recent wins & impact', 'text');
        addToOutput('  💬 testimonials    Client reviews', 'text');
        addToOutput('  📧 contact         Get in touch', 'text');
        addToOutput('  ⚡ quick-facts     TL;DR about me', 'text');
        addToOutput('', 'text');
        addToOutput('  📁 ls              List directory', 'text');
        addToOutput('  📍 pwd             Current directory', 'text');
        addToOutput('  🗑️  clear          Clear terminal', 'text');
        addToOutput('  💡 whoami          User info', 'text');
        addToOutput('  📅 date            Current date/time', 'text');
        addToOutput('', 'text');
        addToOutput('💡 Tip: Use Tab for auto-complete, ↑↓ for history', 'success');
        break;

      case 'stats':
        addToOutput('', 'text');
        addToOutput('━━━━━━━━━━━━ PROFESSIONAL STATISTICS ━━━━━━━━━━━━', 'heading');
        addToOutput('', 'text');
        addToOutput('  📊 Projects Delivered..................... 8+', 'success');
        addToOutput('  ⭐ Client Satisfaction Rate........... 100%', 'success');
        addToOutput('  👥 Happy Clients Worldwide............. 15+', 'success');
        addToOutput('  💰 Revenue Generated for Clients... $250K+', 'success');
        addToOutput('  ⚡ Average Response Time............. <2 hrs', 'success');
        addToOutput('  🚀 On-Time Delivery Rate.............. 100%', 'success');
        addToOutput('  📈 Performance Improvements............ 60%', 'success');
        addToOutput('  💵 Cost Savings Delivered........... $50K+', 'success');
        break;

      case 'hire-me':
        addToOutput('', 'text');
        addToOutput('━━━━━━━━━━━━━ WHY HIRE ME? ━━━━━━━━━━━━━', 'heading');
        addToOutput('', 'text');
        addToOutput('  ⚡ FAST DELIVERY', 'success');
        addToOutput('     → Projects delivered on-time or ahead of schedule', 'text');
        addToOutput('     → 100% on-time delivery track record', 'text');
        addToOutput('', 'text');
        addToOutput('  💬 EXCELLENT COMMUNICATION', 'success');
        addToOutput('     → Daily updates and progress reports', 'text');
        addToOutput('     → <2 hour average response time', 'text');
        addToOutput('     → Fluent in technical and business language', 'text');
        addToOutput('', 'text');
        addToOutput('  🎯 BUSINESS-FOCUSED', 'success');
        addToOutput('     → Solutions that drive revenue & reduce costs', 'text');
        addToOutput('     → Generated $250K+ for clients', 'text');
        addToOutput('     → Saved clients $50K+ in operational costs', 'text');
        addToOutput('', 'text');
        addToOutput('  💎 PREMIUM QUALITY', 'success');
        addToOutput('     → Clean, documented, maintainable code', 'text');
        addToOutput('     → Best practices & modern tech stack', 'text');
        addToOutput('     → Scalable architectures for growth', 'text');
        addToOutput('', 'text');
        addToOutput('  🔒 100% RELIABLE', 'success');
        addToOutput('     → Perfect job success rate', 'text');
        addToOutput('     → Zero client complaints', 'text');
        addToOutput('     → Long-term partnership focus', 'text');
        addToOutput('', 'text');
        addToOutput('📧 Ready to start? Contact: tensaeaschalew27@gmail.com', 'link');
        break;

      case 'resume':
        addToOutput('', 'text');
        addToOutput('📄 Opening resume...', 'success');
        addToOutput('🔗 https://drive.google.com/file/d/YOUR_RESUME_ID', 'link');
        addToOutput('', 'text');
        addToOutput('💡 Tip: Click the "📄 Resume" icon on desktop to view interactive version', 'text');
        break;

      case 'skills':
        addToOutput('', 'text');
        addToOutput('━━━━━━━━━━━━ TECHNICAL EXPERTISE ━━━━━━━━━━━━', 'heading');
        addToOutput('', 'text');
        addToOutput('  Frontend Development:', 'success');
        addToOutput('  [████████████████████] React/Next.js     95%', 'progress');
        addToOutput('  [█████████████████   ] Vue.js/Angular    85%', 'progress');
        addToOutput('  [██████████████████  ] Tailwind/MUI      90%', 'progress');
        addToOutput('', 'text');
        addToOutput('  Backend Development:', 'success');
        addToOutput('  [██████████████████  ] Node.js/Express   90%', 'progress');
        addToOutput('  [█████████████████   ] Python/Django     85%', 'progress');
        addToOutput('  [████████████████    ] PHP/Laravel       80%', 'progress');
        addToOutput('', 'text');
        addToOutput('  Databases:', 'success');
        addToOutput('  [█████████████████   ] MongoDB           85%', 'progress');
        addToOutput('  [██████████████████  ] PostgreSQL/MySQL  90%', 'progress');
        addToOutput('', 'text');
        addToOutput('  Cloud & DevOps:', 'success');
        addToOutput('  [███████████████     ] AWS/GCP/Azure     75%', 'progress');
        addToOutput('  [██████████████████  ] Docker/K8s        90%', 'progress');
        addToOutput('', 'text');
        addToOutput('  Other:', 'success');
        addToOutput('  [██████████████████  ] GraphQL/REST      90%', 'progress');
        addToOutput('  [█████████████████   ] TypeScript        85%', 'progress');
        addToOutput('  [██████████████████  ] Git/GitHub        90%', 'progress');
        break;

      case 'projects':
        addToOutput('', 'text');
        addToOutput('━━━━━━━━━━ PRODUCTION APPLICATIONS ━━━━━━━━━━', 'heading');
        addToOutput('', 'text');
        addToOutput('  1. 💼 Lira Workspace - Task Management SaaS', 'success');
        addToOutput('     ├─ Tech: MERN Stack, Redux, WebSocket', 'text');
        addToOutput('     ├─ Impact: 10K+ users, 45% productivity gain', 'achievement');
        addToOutput('     └─ https://lira-workspace.onrender.com', 'link');
        addToOutput('', 'text');
        addToOutput('  2. 🏢 Nest_Net - Building Management System', 'success');
        addToOutput('     ├─ Tech: PHP, MySQL, JavaScript', 'text');
        addToOutput('     ├─ Impact: Managing 15+ properties', 'achievement');
        addToOutput('     └─ Live system serving 500+ tenants', 'achievement');
        addToOutput('', 'text');
        addToOutput('  3. 🛒 Scandiweb Ready - E-commerce Platform', 'success');
        addToOutput('     ├─ Tech: MERN + GraphQL', 'text');
        addToOutput('     ├─ Impact: 60% faster API responses', 'achievement');
        addToOutput('     └─ https://scandiweb-ready.onrender.com', 'link');
        addToOutput('', 'text');
        addToOutput('  4. 💰 Digital Ekub - Fintech SaaS', 'success');
        addToOutput('     ├─ Tech: MERN Stack, Payment APIs', 'text');
        addToOutput('     ├─ Impact: Digitized traditional savings', 'achievement');
        addToOutput('     └─ Processing $10K+ monthly', 'achievement');
        addToOutput('', 'text');
        addToOutput('... and 4 more! Click "💼 Projects" icon for full details', 'text');
        break;

      case 'achievements':
        addToOutput('', 'text');
        addToOutput('━━━━━━━━━━━ RECENT ACHIEVEMENTS ━━━━━━━━━━━', 'heading');
        addToOutput('', 'text');
        addToOutput('  🏆 Built SaaS serving 10,000+ active users', 'achievement');
        addToOutput('  🏆 Reduced API response time by 60%', 'achievement');
        addToOutput('  🏆 Saved client $50K in hosting costs', 'achievement');
        addToOutput('  🏆 Increased conversion rate by 25%', 'achievement');
        addToOutput('  🏆 Led team of 5 developers remotely', 'achievement');
        addToOutput('  🏆 Earned AWS scholarship for AI masters', 'achievement');
        addToOutput('  🏆 Technology Club President (700+ members)', 'achievement');
        addToOutput('  🏆 100% job success rate on all platforms', 'achievement');
        break;

      case 'testimonials':
        addToOutput('', 'text');
        addToOutput('━━━━━━━━━━━━ CLIENT REVIEWS ━━━━━━━━━━━━', 'heading');
        addToOutput('', 'text');
        addToOutput('  ⭐⭐⭐⭐⭐ Sarah Mitchell - CEO, TechFlow Solutions', 'success');
        addToOutput('  "Tensae is exceptional! 300% user growth in 3 months"', 'text');
        addToOutput('', 'text');
        addToOutput('  ⭐⭐⭐⭐⭐ Michael Chen - Founder & CTO', 'success');
        addToOutput('  "Game-changer for our startup. Outstanding quality"', 'text');
        addToOutput('', 'text');
        addToOutput('  ⭐⭐⭐⭐⭐ Jennifer Rodriguez - Product Manager', 'success');
        addToOutput('  "Page load: 8s → 1s. Completed 20% under budget!"', 'text');
        addToOutput('', 'text');
        addToOutput('💡 Click "⭐ Testimonials" icon for full reviews', 'text');
        break;

      case 'contact':
        addToOutput('', 'text');
        addToOutput('━━━━━━━━━━━ CONTACT INFORMATION ━━━━━━━━━━━', 'heading');
        addToOutput('', 'text');
        addToOutput('  📧 Email:     tensaeaschalew27@gmail.com', 'link');
        addToOutput('  🐙 GitHub:    github.com/TENSAEA', 'link');
        addToOutput('  💼 LinkedIn:  linkedin.com/in/tensae-aschalew-339368239', 'link');
        addToOutput('  📱 Phone:     +251-984-04-9121', 'text');
        addToOutput('  🌍 Location:  Addis Ababa, Ethiopia (Remote)', 'text');
        addToOutput('  ⏰ Response:  <2 hours average', 'success');
        addToOutput('', 'text');
        addToOutput('💡 Or click "📧 Hire Me" icon for contact form', 'text');
        break;

      case 'quick-facts':
        addToOutput('', 'text');
        addToOutput('━━━━━━━━━━━━ QUICK FACTS ━━━━━━━━━━━━', 'heading');
        addToOutput('', 'text');
        addToOutput('  ✅ 3 years professional experience', 'success');
        addToOutput('  ✅ 8+ production applications delivered', 'success');
        addToOutput('  ✅ 15+ satisfied clients worldwide', 'success');
        addToOutput('  ✅ 100% job success rate', 'success');
        addToOutput('  ✅ MERN Stack specialist', 'success');
        addToOutput('  ✅ Available for remote work', 'success');
        addToOutput('  ✅ Bachelor\'s in Computer Science (3.59 GPA)', 'success');
        addToOutput('  ✅ Pursuing AI Master\'s (Scholarship)', 'success');
        break;

      case 'clear':
        setOutput([
          { text: '🚀 Terminal cleared!', type: 'success' },
          { text: 'tensae@portfolio:~$ ', type: 'prompt' }
        ]);
        return;

      case 'whoami':
        addToOutput('Tensae Aschalew', 'text');
        addToOutput('Full-Stack Developer | MERN Stack Expert', 'text');
        break;

      case 'date':
        addToOutput(new Date().toString(), 'text');
        break;

      case 'ls':
        addToOutput('📁 Projects/  📁 Skills/  📁 Testimonials/  📄 Resume.pdf', 'text');
        break;

      case 'pwd':
        addToOutput('/home/tensae/portfolio', 'text');
        break;

      case '':
        // Do nothing for empty command
        break;

      default:
        if (command.startsWith('echo ')) {
          const text = command.substring(5);
          addToOutput(text, 'text');
        } else {
          addToOutput(`❌ Command not found: ${command}`, 'error');
          addToOutput('💡 Type "help" for available commands', 'text');
        }
    }

    // Add new prompt
    if (command.toLowerCase() !== 'clear') {
      addToOutput('tensae@portfolio:~$ ', 'prompt');
    }

    // Clear input
    setInput('');
  };

  return (
    <Box sx={{
      height: '100%',
      bgcolor: '#0a0a0a',
      color: '#00ff88',
      p: 2,
      fontFamily: '"Ubuntu Mono", "Courier New", monospace',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      fontSize: '14px',
      // CRT effect
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 1px, transparent 1px, transparent 2px)',
        pointerEvents: 'none',
        animation: 'scanline 8s linear infinite',
        zIndex: 1,
      },
      '@keyframes scanline': {
        '0%': { transform: 'translateY(0)' },
        '100%': { transform: 'translateY(100%)' }
      }
    }}>
      <Paper
        elevation={0}
        sx={{
          bgcolor: 'transparent',
          color: '#00ff88',
          fontFamily: 'inherit',
          flexGrow: 1,
          overflow: 'auto',
          position: 'relative',
          zIndex: 2,
          '&::-webkit-scrollbar': {
            width: '8px'
          },
          '&::-webkit-scrollbar-track': {
            background: '#1a1a1a'
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#00ff88',
            borderRadius: '4px'
          }
        }}
      >
        {output.map((line, index) => {
          if (line.type === 'prompt') {
            return (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body2" component="span" sx={{ color: '#E95420', fontWeight: 'bold' }}>
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
                        color: '#00ff88',
                        fontFamily: 'inherit',
                        fontSize: 'inherit',
                        '&:before, &:after': {
                          display: 'none'
                        }
                      },
                      '& .MuiInput-input': {
                        padding: 0,
                        caretColor: '#00ff88'
                      }
                    }}
                    placeholder="Type 'help' for commands..."
                  />
                )}
              </Box>
            );
          }

          let color = '#00ff88';
          let fontWeight = 'normal';
          let textShadow = 'none';

          switch (line.type) {
            case 'border':
              color = '#E95420';
              fontWeight = 'bold';
              textShadow = '0 0 10px #E95420';
              break;
            case 'system':
              color = '#4A90E2';
              break;
            case 'error':
              color = '#ff4444';
              textShadow = '0 0 5px #ff4444';
              break;
            case 'heading':
              color = '#FFC107';
              fontWeight = 'bold';
              textShadow = '0 0 8px #FFC107';
              break;
            case 'link':
              color = '#00BCD4';
              textShadow = '0 0 5px #00BCD4';
              break;
            case 'success':
              color = '#4CAF50';
              break;
            case 'achievement':
              color = '#FFC107';
              break;
            case 'progress':
              color = '#00ff88';
              break;
            case 'command':
              color = '#ffffff';
              break;
          }

          return (
            <Typography
              key={index}
              variant="body2"
              sx={{
                color,
                fontWeight,
                textShadow,
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                lineHeight: 1.6,
                fontFamily: 'inherit',
                mb: line.type === 'heading' ? 0.5 : 0
              }}
            >
              {line.text}
            </Typography>
          );
        })}

        <div ref={outputEndRef} />
      </Paper>
    </Box>
  );
};

export default Terminal;

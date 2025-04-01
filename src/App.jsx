import { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import ubuntuTheme from './theme';
import Desktop from './components/desktop/Desktop';
import IntroAnimation from './components/IntroAnimation';

// Import Ubuntu font
import '@fontsource/ubuntu/300.css';
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  
  const handleIntroComplete = () => {
    setShowIntro(false);
  };
  
  return (
    <ThemeProvider theme={ubuntuTheme}>
      <CssBaseline />
      {showIntro ? (
        <IntroAnimation onComplete={handleIntroComplete} />
      ) : (
        <Desktop />
      )}
    </ThemeProvider>
  );
}

export default App;

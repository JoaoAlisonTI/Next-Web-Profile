import { useState } from 'react';
import { ThemeProvider, CssBaseline, Switch } from '@mui/material';
import { darkTheme, lightTheme } from '../../theme/theme';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Switch checked={isDarkMode} onChange={handleToggleTheme} />
    </ThemeProvider>
  );
};

export default ThemeToggle;
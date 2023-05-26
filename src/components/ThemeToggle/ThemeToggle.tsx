import { useState } from 'react';
import { ThemeProvider, CssBaseline, Switch } from '@mui/material';
import { FaRegSun, FaRegMoon } from 'react-icons/fa';
import { darkTheme, lightTheme } from '../../theme/theme';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <FaRegSun />
      <Switch checked={isDarkMode} onChange={handleToggleTheme} />
      <FaRegMoon />
    </ThemeProvider>
  );
};

export default ThemeToggle;
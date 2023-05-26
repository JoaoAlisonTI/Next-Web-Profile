import { useState } from 'react';
import { ThemeProvider, CssBaseline, Switch, styled } from '@mui/material';
import { FaRegSun, FaRegMoon } from 'react-icons/fa';
import { darkTheme, lightTheme } from '../../theme/theme';

const CustomSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-thumb': {
    width: '24px',
    height: '24px',
    '& svg': {
      fontSize: '18px',
    },
  },
  '& .MuiSwitch-track': {
    backgroundColor: theme.palette.mode === 'dark' ? '#888' : '#ccc',
  },
}));

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <CustomSwitch
        checked={isDarkMode}
        onChange={handleToggleTheme}
        icon={<FaRegMoon />}
        checkedIcon={<FaRegSun />}
      />
    </ThemeProvider>
  );
};

export default ThemeToggle;
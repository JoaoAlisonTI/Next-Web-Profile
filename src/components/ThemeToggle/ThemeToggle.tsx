import { useEffect ,useState } from 'react';
import { ThemeProvider, CssBaseline, Switch, styled } from '@mui/material';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'
import { darkTheme, lightTheme } from '../../theme/theme';

const CustomSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-thumb': {
    width: '24px',
    height: '24px',
    '& svg': {
      fontSize: '24px',
    },
  },
  '& .MuiSwitch-track': {
    paddingBottom: '4px',
    height: '18px',
    width: '60px',
    backgroundColor: theme.palette.mode === 'dark' ? '#888' : '#ccc',
  },
}));

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    const storedMode = localStorage.getItem('themeMode');
    if (storedMode) {
      setIsDarkMode(storedMode === 'dark');
    }
  }, []);
  
  const handleToggleTheme = () => {
    const newMode = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('themeMode', newMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <CustomSwitch
        checked={isDarkMode}
        onChange={handleToggleTheme}
        icon={<BsSunFill />}
        checkedIcon={<BsMoonStarsFill />}
      />
    </ThemeProvider>
  );
};

export default ThemeToggle;
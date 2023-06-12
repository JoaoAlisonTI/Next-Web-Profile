import { useEffect, useState, createContext, useContext } from 'react';
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

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProviderWrapper: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem('themeMode');
    if (storedMode) {
      setIsDarkMode(storedMode === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('themeMode', newMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <CustomSwitch
      checked={isDarkMode}
      onChange={toggleTheme}
      icon={<BsSunFill />}
      checkedIcon={<BsMoonStarsFill />}
    />
  );
};

export { ThemeProviderWrapper, ThemeToggle };

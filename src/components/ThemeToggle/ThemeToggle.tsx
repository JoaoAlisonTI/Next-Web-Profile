import { useEffect, useState } from 'react';
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

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false); // Novo estado de carregamento

  useEffect(() => {
    const storedMode = localStorage.getItem('themeMode');
    if (storedMode) {
      setIsDarkMode(storedMode === 'dark');
    }
    setIsLoaded(true); // Definir o estado de carregamento como true após a leitura do valor do tema
  }, []);

  const handleToggleTheme = () => {
    const newMode = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('themeMode', newMode);
  };

  if (!isLoaded) {
    return null; // Ou você pode mostrar um indicador de carregamento enquanto o tema está sendo lido
  }

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

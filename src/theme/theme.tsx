import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2b3c6a', // Cor primária no modo dark
    },
    secondary: {
      main: '#00FF00', // Cor secundária no modo dark
    },
    background: {
      default: '#001D2C', // Cor de fundo no modo dark
      paper: '#001D2C', // Cor de fundo do papel no modo dark
    },
    text: {
      primary: '#f8f8f2', // Cor do texto no modo dark
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0000FF', // Cor primária no modo light
    },
    secondary: {
      main: '#00FFFF', // Cor secundária no modo light
    },
    background: {
      default: '#FFFFFF', // Cor de fundo no modo light
      paper: '#F5F5F5', // Cor de fundo do papel no modo light
    },
    text: {
      primary: '#192030', // Cor do texto no modo light
    },
  },
});

export { darkTheme, lightTheme };

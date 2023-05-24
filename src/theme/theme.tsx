import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF0000', // Cor primária no modo dark
    },
    secondary: {
      main: '#00FF00', // Cor secundária no modo dark
    },
    background: {
      default: '#121212', // Cor de fundo no modo dark
      paper: '#1E1E1E', // Cor de fundo do papel no modo dark
    },
    text: {
      primary: '#FFFFFF', // Cor do texto no modo dark
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
      primary: '#000000', // Cor do texto no modo light
    },
  },
});

export { darkTheme, lightTheme };

import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f1fa8c', // Cor primária no modo dark
    },
    background: {
      default: '#111111', // Cor de fundo no modo dark
      paper: '#111111', // Cor de fundo do papel no modo dark
    },
    text: {
      primary: '#f8f8f8', // Cor do texto no modo dark
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f3f1f1', // Cor de fundo no modo light
      paper: '#f3f1f1', // Cor de fundo do papel no modo light
    },
    text: {
      primary: '#111111', // Cor do texto no modo light
    },
  },
});

export { darkTheme, lightTheme };

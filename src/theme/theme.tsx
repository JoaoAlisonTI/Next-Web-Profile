import { createTheme } from '@mui/material/styles';

// Definindo as cores para os modos dark/light
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export { darkTheme, lightTheme };
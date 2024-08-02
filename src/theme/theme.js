import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Roboto Mono", "Courier", "monospace"',
    },
    h2: {
      fontFamily: '"Roboto Mono", "Courier", "monospace"',
    },
    h3: {
      fontFamily: '"Roboto Mono", "Courier", "monospace"',
    },
    body1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    body2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
  },
  palette: {
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    primary: {
      main: '#3f51b5',
      light: '#757de8',
      dark: '#002984',
    },
    secondary: {
      main: '#f50057',
      light: '#ff4081',
      dark: '#c51162',
    },
    text: {
      primary: '#333',
      secondary: '#666',
    },
  },
  // Other theme configurations...
});

export default theme;
